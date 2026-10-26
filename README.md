# همه‌جو برای کروم

افزونهٔ رسمی [همه‌جو](https://hamejoo.ir) — موتور جستجوی آگهی و کسب‌وکار ایران — برای Google Chrome (و مرورگرهای سازگار با Chromium).

جستجو را از داخل مرورگر، بدون باز کردن دستی سایت، شروع می‌کنید؛ نتایج همیشه روی دامنهٔ رسمی `hamejoo.ir` باز می‌شوند.

---

## چه کار می‌کند؟

| قابلیت | توضیح |
|--------|--------|
| **پاپ‌آپ** | روی آیکن نوار ابزار کلیک کنید، عبارت را بنویسید، Enter |
| **نوار آدرس** | بنویسید `hj`، فاصله بزنید، بعد عبارت جستجو |
| **راست‌کلیک** | متن را انتخاب کنید → «جستجو در همه‌جو» |
| **میانبر** | `Alt+H` پاپ‌آپ را باز می‌کند |

نسخهٔ فعلی روی **Manifest V3** است: سبک، بدون اسکریپت تزریقی روی سایت‌های دیگر، بدون ردیاب شخص‌ثالث.

---

## نصب

### از سورس (توسعه‌دهندگان)

1. این مخزن را کلون کنید  
2. به `chrome://extensions` بروید  
3. **Developer mode** را روشن کنید  
4. **Load unpacked** → ریشهٔ همین پروژه

```bash
git clone https://github.com/sadrmanesh/hamejoo-chrome.git
cd hamejoo-chrome
```

### بستهٔ zip

```bash
./scripts/pack.sh
# خروجی: dist/hamejoo-chrome-<version>.zip
```

دانلود عمومی (در صورت انتشار روی سایت): [hamejoo.ir/app/hamejoo-chrome.zip](https://hamejoo.ir/app/hamejoo-chrome.zip)

پس از انتشار در Chrome Web Store، لینک استور اینجا اضافه می‌شود.

---

## حریم خصوصی و مجوزها

افزونه **رمز، توکن یا کلید API** ندارد و محتوای تب‌های دیگر را نمی‌خواند.

| مجوز | دلیل |
|------|------|
| `contextMenus` | منوی راست‌کلیک روی متن انتخاب‌شده |
| `storage` | ذخیرهٔ آخرین عبارت جستجو فقط روی دستگاه شما |
| `https://hamejoo.ir/*` | باز کردن صفحهٔ نتایج روی سایت رسمی |

سیاست حریم خصوصی محصول: [hamejoo.ir/privacy](https://hamejoo.ir/privacy)

---

## ساختار پروژه

```
manifest.json     تنظیمات MV3
background.js     service worker — omnibox، منو، باز کردن جستجو
popup.html/css/js رابط پاپ‌آپ
icons/            آیکن‌های ۱۶ تا ۵۱۲
_locales/fa/      رشته‌های فارسی فروشگاه/مانیفست
scripts/pack.sh   ساخت zip برای انتشار
```

جستجو به این شکل ساخته می‌شود:

`https://hamejoo.ir/search?q=<عبارت>`

---

## مشارکت

ایده، باگ و PR خوش‌آمد است. قبل از PR بزرگ، یک Issue کوتاه باز کنید تا روی جهت کار هم‌نظر شویم.

لایسنس: [MIT](LICENSE)

---

## English

**HameJoo for Chrome** is the official browser extension for [HameJoo](https://hamejoo.ir), an Iranian classifieds & business search engine.

Search from the toolbar popup, omnibox (`hj` + query), context menu, or `Alt+H`. Results open on `hamejoo.ir`. Manifest V3, minimal permissions, no third-party trackers, no remote code.

```bash
git clone https://github.com/sadrmanesh/hamejoo-chrome.git
# chrome://extensions → Load unpacked → this folder
```

Privacy policy: https://hamejoo.ir/privacy · License: MIT
