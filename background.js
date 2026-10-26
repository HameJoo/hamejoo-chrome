/* HameJoo Chrome MV3 — service worker */
const SITE = "https://hamejoo.ir";
const SEARCH_PATH = "/search";

function searchUrl(query) {
  const q = String(query || "").trim();
  if (!q) return `${SITE}/`;
  return `${SITE}${SEARCH_PATH}?q=${encodeURIComponent(q)}`;
}

function openSearch(query) {
  chrome.tabs.create({ url: searchUrl(query) });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "hamejoo-search-selection",
      title: "جستجو در همه‌جو: «%s»",
      contexts: ["selection"],
    });
    chrome.contextMenus.create({
      id: "hamejoo-open",
      title: "باز کردن همه‌جو",
      contexts: ["page", "action"],
    });
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "hamejoo-search-selection" && info.selectionText) {
    openSearch(info.selectionText);
    return;
  }
  if (info.menuItemId === "hamejoo-open") {
    chrome.tabs.create({ url: `${SITE}/` });
  }
});

chrome.omnibox.onInputEntered.addListener((text, disposition) => {
  const url = searchUrl(text);
  if (disposition === "currentTab") {
    chrome.tabs.update({ url });
  } else {
    chrome.tabs.create({ url });
  }
});

chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  const q = String(text || "").trim();
  if (!q) {
    suggest([]);
    return;
  }
  suggest([
    {
      content: q,
      description: `جستجو در همه‌جو: <match>${escapeXml(q)}</match>`,
    },
  ]);
});

chrome.omnibox.setDefaultSuggestion({
  description: "جستجو در همه‌جو — بعد از hj فاصله بزنید و بنویسید",
});

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "search" && typeof msg.query === "string") {
    openSearch(msg.query);
    sendResponse({ ok: true });
    return true;
  }
  return false;
});
