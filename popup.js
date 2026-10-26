const form = document.getElementById("search-form");
const input = document.getElementById("q");

const LAST_KEY = "lastQuery";

chrome.storage.local.get([LAST_KEY], (data) => {
  if (data?.[LAST_KEY] && input && !input.value) {
    input.value = String(data[LAST_KEY]);
    input.select();
  }
});

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = String(input?.value || "").trim();
  if (!q) {
    input?.focus();
    return;
  }
  chrome.storage.local.set({ [LAST_KEY]: q });
  chrome.runtime.sendMessage({ type: "search", query: q }, () => {
    window.close();
  });
});

input?.focus();
