<p align="center">
  <img src="icons/icon-128.png" width="96" height="96" alt="آیکن همه‌جو">
</p>

<h1 align="center">همه‌جو برای کروم</h1>

<p align="center">
  افزونهٔ رسمی <a href="https://hamejoo.ir">همه‌جو</a> — موتور جستجوی آگهی و کسب‌وکار ایران — برای Google Chrome و مرورگرهای سازگار با Chromium.
  <br>
  Official Chrome extension for <a href="https://hamejoo.ir">HameJoo</a>, an Iranian classifieds and business search engine.
</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-2563eb"></a>
  <a href="manifest.json"><img alt="Manifest V3" src="https://img.shields.io/badge/manifest-V3-0f172a"></a>
  <a href="_locales/fa/messages.json"><img alt="Primary locale: fa" src="https://img.shields.io/badge/locale-fa-2563eb"></a>
  <a href="https://chromewebstore.google.com/detail/hhchlcjldhlccicaaeiifmfdbacedhoi"><img alt="Chrome Web Store" src="https://img.shields.io/badge/Chrome_Web_Store-install-2563eb"></a>
</p>

<p align="center">
  <a href="https://hamejoo.github.io/hamejoo-chrome/"><strong>صفحهٔ معرفی</strong></a>
  ·
  <a href="https://chromewebstore.google.com/detail/hhchlcjldhlccicaaeiifmfdbacedhoi">نصب از فروشگاه کروم</a>
  ·
  <a href="https://github.com/HameJoo/hamejoo-chrome">مخزن</a>
</p>

جستجو را از داخل مرورگر، بدون باز کردن دستی سایت، شروع می‌کنید. نتایج همیشه روی دامنهٔ رسمی `hamejoo.ir` باز می‌شوند.

نشانی صفحهٔ معرفی، پس از روشن کردن GitHub Pages از پوشهٔ `docs/` روی شاخهٔ `main`:

**https://hamejoo.github.io/hamejoo-chrome/**

---

## چه کار می‌کند؟

نسخهٔ فعلی **1.0.0** روی **Manifest V3** است: سبک، بدون اسکریپت تزریقی روی سایت‌های دیگر، بدون ردیاب شخص‌ثالث، و بدون کد راه‌دور.

| قابلیت | توضیح |
|--------|--------|
| **پاپ‌آپ** | روی آیکن نوار ابزار کلیک کنید، عبارت را بنویسید، Enter. آخرین عبارت فقط روی دستگاه شما می‌ماند (حداکثر ۲۰۰ نویسه). |
| **نوار آدرس** | بنویسید `hj`، فاصله بزنید، بعد عبارت جستجو. پیشنهاد: «جستجو در همه‌جو». |
| **راست‌کلیک** | متن را انتخاب کنید → «جستجو در همه‌جو». |
| **باز کردن سایت** | از منوی صفحه یا آیکن افزونه: «باز کردن همه‌جو». |
| **میانبر** | `Alt+H` (میانبر پیشنهادی در ویندوز، لینوکس و macOS) پاپ‌آپ را باز می‌کند. |

جستجو به این شکل ساخته می‌شود:

`https://hamejoo.ir/search?q=<عبارت>`

اگر عبارتی نباشد، افزونه صفحهٔ اصلی `https://hamejoo.ir/` را باز می‌کند. پاپ‌آپ با فیلد خالی فقط همان فیلد را دوباره فعال می‌کند.

---

## پیش‌نمایش

اسکرین‌شات یا GIF داخل مخزن نیست. پیش‌نمایش CSS پاپ‌آپ، نوار آدرس و منوی راست‌کلیک — ساخته‌شده از روی رابط واقعی، نه تصویر ساختگی — در صفحهٔ معرفی است:

**[hamejoo.github.io/hamejoo-chrome](https://hamejoo.github.io/hamejoo-chrome/#how)**

وقتی تصویر واقعی از رابط آماده شد، همین بخش را با فایل خودش عوض کنید:

| نما | مسیر پیشنهادی | وضعیت |
|-----|----------------|--------|
| پاپ‌آپ | `docs/media/popup.png` | هنوز اضافه نشده |
| نوار آدرس (`hj`) | `docs/media/omnibox.gif` | هنوز اضافه نشده |
| راست‌کلیک | `docs/media/context-menu.png` | هنوز اضافه نشده |

---

## نصب

### فروشگاه کروم

[همه‌جو — جستجوی آگهی](https://chromewebstore.google.com/detail/hhchlcjldhlccicaaeiifmfdbacedhoi)

### از سورس (توسعه‌دهندگان)

1. این مخزن را کلون کنید
2. به `chrome://extensions` بروید
3. **Developer mode** را روشن کنید
4. **Load unpacked** → ریشهٔ همین پروژه

```bash
git clone https://github.com/HameJoo/hamejoo-chrome.git
cd hamejoo-chrome
```

### بستهٔ zip

```bash
./scripts/pack.sh
# خروجی: dist/hamejoo-chrome-<version>.zip
```

اسکریپت پوشهٔ `docs/` (صفحهٔ معرفی) را داخل zip نمی‌گذارد. آیکن ۵۱۲ هم، مثل قبل، فقط برای صفحه و فروشگاه در مخزن می‌ماند و در بستهٔ افزونه نیست.

دانلود عمومی (در صورت انتشار روی سایت): [hamejoo.ir/app/hamejoo-chrome.zip](https://hamejoo.ir/app/hamejoo-chrome.zip)

---

## حریم خصوصی و مجوزها

افزونه **رمز، توکن یا کلید API** ندارد و محتوای تب‌های دیگر را نمی‌خواند. اسکریپت محتوا در مانیفست تعریف نشده است.

| مجوز | دلیل |
|------|------|
| `contextMenus` | منوی راست‌کلیک: جستجوی متن انتخاب‌شده، و «باز کردن همه‌جو» از منوی صفحه یا آیکن |
| `storage` | ذخیرهٔ آخرین عبارت پاپ‌آپ با کلید `lastQuery` در `chrome.storage.local`، فقط روی دستگاه شما. این مقدار به سرویس دیگری فرستاده نمی‌شود. خود جستجو با باز شدن نشانی نتایج به `hamejoo.ir` می‌رود. |
| `https://hamejoo.ir/*` | تنها میزبان مجاز. افزونه صفحهٔ نتایج و صفحهٔ اصلی را روی همین دامنه باز می‌کند. |

سیاست حریم خصوصی محصول: [hamejoo.ir/privacy](https://hamejoo.ir/privacy)

---

## ساختار پروژه

```
manifest.json       تنظیمات MV3، کلیدواژهٔ hj، میانبر Alt+H
background.js       service worker — omnibox، منو، باز کردن جستجو
popup.html/css/js   رابط پاپ‌آپ (فارسی)
icons/              آیکن‌های ۱۶ تا ۵۱۲
_locales/fa/        رشته‌های فارسی فروشگاه و مانیفست (زبان پیش‌فرض)
scripts/pack.sh     ساخت zip برای انتشار
docs/               صفحهٔ معرفی GitHub Pages (داخل zip افزونه نیست)
```

رابط پاپ‌آپ فارسی و ثابت است. تنها پوشهٔ locale، `fa` است.

---

## مشارکت

ایده، باگ و PR خوش‌آمد است. قبل از PR بزرگ، یک Issue کوتاه باز کنید تا روی جهت کار هم‌نظر شویم.

جزئیات در [CONTRIBUTING.md](CONTRIBUTING.md): فورک از `main`، تغییر کوچک، تست با Load unpacked روی Chrome پایدار، و توضیح «چه چیزی» و «چرا» در PR. کلید، کوکی، توکن یا اطلاعات استقرار را commit نکنید.

---

## لایسنس

[MIT](LICENSE) · Copyright (c) 2026 Naser Sadrmanesh / HameJoo

---

## English

**HameJoo for Chrome** is the official browser extension for [HameJoo](https://hamejoo.ir), an Iranian classifieds and business search engine.

Search from the toolbar popup, the address bar (`hj` plus a query), the context menu, or the suggested shortcut `Alt+H`. Results open on `hamejoo.ir`. Manifest V3. No content scripts, no third-party trackers, no remote code.

Landing page (GitHub Pages from `docs/` on `main`): **https://hamejoo.github.io/hamejoo-chrome/**

The repo has no screenshots. That page includes CSS previews of the real Persian UI.

### Install

- Chrome Web Store: [همه‌جو — جستجوی آگهی](https://chromewebstore.google.com/detail/hhchlcjldhlccicaaeiifmfdbacedhoi)
- Load unpacked: clone this repo, open `chrome://extensions`, turn on Developer mode, choose the project folder
- Zip: `./scripts/pack.sh` → `dist/hamejoo-chrome-<version>.zip` (`docs/` is excluded)
- Public zip, if published on the site: [hamejoo.ir/app/hamejoo-chrome.zip](https://hamejoo.ir/app/hamejoo-chrome.zip)

### What it does

| Entry | Behavior |
|-------|----------|
| Popup | Type a query and press Enter. The last query (max 200 characters) is restored from `chrome.storage.local` on this device. |
| Address bar | Keyword `hj`, then the query. Suggestion text: «جستجو در همه‌جو». |
| Right-click | «جستجو در همه‌جو» on a selection. «باز کردن همه‌جو» on the page or the extension icon opens the homepage. |
| Shortcut | Suggested key `Alt+H` opens the popup on Windows, Linux, and macOS. |

Results URL: `https://hamejoo.ir/search?q=<query>`. With no query, the extension opens `https://hamejoo.ir/`. An empty popup only refocuses its field.

The popup and context menu open a new tab. The omnibox updates the current tab or opens a new one, depending on how the suggestion is accepted.

### Permissions

The extension stores no password, token, or API key, and it does not read other tabs.

| Permission | Why |
|------------|-----|
| `contextMenus` | Selection search, and “open HameJoo” from the page or action menu |
| `storage` | Key `lastQuery` in `chrome.storage.local` only. That saved value is not sent to another service. The search itself is the results URL on `hamejoo.ir`. |
| `https://hamejoo.ir/*` | The only host permission. Used to open the homepage and search results on the official site. |

Privacy policy: https://hamejoo.ir/privacy

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Fork from `main`, keep the change small, test with Load unpacked on stable Chrome, and explain what and why. Open an issue before a large pull request. Do not commit secrets.

License: [MIT](LICENSE) · Copyright (c) 2026 Naser Sadrmanesh / HameJoo
