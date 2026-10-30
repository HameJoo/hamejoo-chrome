(function () {
  var TITLES = {
    fa: "همه‌جو برای کروم — جستجوی آگهی از داخل مرورگر",
    en: "HameJoo for Chrome — search classifieds from the browser",
  };

  var DESCS = {
    fa: "افزونهٔ رسمی همه‌جو برای کروم. جستجوی آگهی و کسب‌وکار از پاپ‌آپ، نوار آدرس با کلیدواژهٔ hj، منوی راست‌کلیک و میانبر Alt+H. نتایج روی hamejoo.ir باز می‌شود.",
    en: "Official HameJoo extension for Chrome. Search Iranian classifieds and businesses from the toolbar popup, the hj address-bar keyword, the right-click menu, or Alt+H. Results open on hamejoo.ir.",
  };

  var NAV = {
    fa: "بخش‌های صفحه",
    en: "Page sections",
  };

  var FOOTER_NAV = {
    fa: "پیوندهای پاورقی",
    en: "Footer links",
  };

  var LANG_GROUP = {
    fa: "زبان صفحه",
    en: "Page language",
  };

  function current() {
    return document.documentElement.lang === "en" ? "en" : "fa";
  }

  function setMeta(selector, content) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", content);
  }

  function apply(lang, persist) {
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = TITLES[lang];
    setMeta('meta[name="description"]', DESCS[lang]);
    setMeta('meta[property="og:title"]', TITLES[lang]);
    setMeta('meta[property="og:description"]', DESCS[lang]);
    setMeta('meta[property="og:locale"]', lang === "fa" ? "fa_IR" : "en_US");
    setMeta('meta[property="og:locale:alternate"]', lang === "fa" ? "en_US" : "fa_IR");
    setMeta('meta[name="twitter:title"]', TITLES[lang]);
    setMeta('meta[name="twitter:description"]', DESCS[lang]);

    var primary = document.querySelector(".nav-primary");
    if (primary) primary.setAttribute("aria-label", NAV[lang]);
    var footer = document.querySelector(".nav-footer");
    if (footer) footer.setAttribute("aria-label", FOOTER_NAV[lang]);
    var group = document.querySelector(".lang");
    if (group) group.setAttribute("aria-label", LANG_GROUP[lang]);

    var buttons = document.querySelectorAll(".lang [data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute("data-lang") === lang;
      buttons[i].setAttribute("aria-pressed", on ? "true" : "false");
    }

    if (persist) {
      try {
        localStorage.setItem("hamejoo-site-lang", lang);
      } catch (e) {}
      try {
        var url = new URL(location.href);
        url.searchParams.set("lang", lang);
        history.replaceState(null, "", url);
      } catch (e) {}
    }
  }

  apply(current(), false);

  var group = document.querySelector(".lang");
  if (!group) return;
  group.addEventListener("click", function (event) {
    var btn = event.target.closest("[data-lang]");
    if (!btn || !group.contains(btn)) return;
    var lang = btn.getAttribute("data-lang");
    if (lang !== "fa" && lang !== "en") return;
    if (lang === current()) return;
    apply(lang, true);
  });
})();
