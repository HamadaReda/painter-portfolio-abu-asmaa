# معلم دهانات بوية أبو أسماء

موقع عربي ثابت لمعلم دهانات في المدينة المنورة، مبني باستخدام React وVite وTypeScript.

## المتطلبات

- Node.js 22 أو أحدث
- npm

## أوامر المشروع

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

## بنية المصدر

- `src/app`: تشغيل التطبيق وإعداد التوجيه.
- `src/pages`: مكونات الصفحات المرتبطة بالمسارات.
- `src/features`: مكونات الميزات الخاصة بكل نطاق.
- `src/shared`: التخطيطات ومكونات الواجهة المشتركة.
- `src/config`: إعدادات الموقع المركزية.
- `src/content`: المحتوى المحلي الثابت.
- `src/domain`: نماذج نطاق العمل.
- `src/repositories`: عقود مصادر المحتوى وتنفيذاتها.

يعتمد النشر على ناتج `dist`، ويقدّم `vercel.json` الملفات المولدة مباشرةً مع صفحة 404 حقيقية للمسارات غير الموجودة.

## البناء الثابت وSEO

ينفذ `npm run build` بناء المتصفح ثم بناء SSR مؤقتًا لتوليد ملفات HTML ثابتة لكل مسار منشور. تُستخرج مسارات الخدمات من مستودع المحتوى المحلي، بينما يُنشر معرض الأعمال كصفحة صور واحدة على `/projects` دون صفحات تفاصيل منفصلة.

يستخدم البناء عنوان الموقع بالترتيب التالي:

1. المتغير `VITE_SITE_URL` عند ضبطه صراحةً، مثل `https://your-domain.example`.
2. المتغير `VERCEL_PROJECT_PRODUCTION_URL` الذي توفره Vercel عند تفعيل System Environment Variables.
3. نطاق الإنتاج الموثق في `siteConfig`: `https://painter-portfolio-abu-asmaa.vercel.app`.

يمكن استخدام `VITE_SITE_URL` لاحقًا لتبديل canonical URLs إلى دومين مخصص دون تعديل طبقة العرض.

ناتج الإنتاج يتضمن:

- HTML قابلًا للقراءة دون تنفيذ JavaScript.
- عناوين وأوصاف وcanonical وOpen Graph وTwitter metadata لكل صفحة.
- بيانات `HousePainter` و`BreadcrumbList` بصيغة JSON-LD.
- `sitemap.xml` و`robots.txt` من المسارات المنشورة فعليًا.
- `404.html`، مع استجابة 404 للمسارات غير الموجودة على Vercel.

لا تُنشر صفحة `/reviews` حاليًا لعدم وجود مراجعات موثقة. صفحة `/projects` هي معرض الصور الوحيد للأعمال ولا توجد مسارات مستقلة للمشروعات.

## ربط Google Search Console

بعد نشر نسخة Production على النطاق النهائي:

1. افتح Google Search Console وأضف النطاق النهائي كـ Domain property إن أمكن، أو URL-prefix property.
2. أكمل إثبات الملكية بالطريقة التي يعرضها Search Console؛ إثبات DNS هو الأنسب لـ Domain property.
3. أرسل `https://YOUR_PRODUCTION_DOMAIN/sitemap.xml` من قسم Sitemaps.
4. افحص الصفحة الرئيسية وصفحة خدمة ممثلة بأداة URL Inspection، ثم اطلب الفهرسة عند الحاجة.
5. اختبر صفحات ممثلة في Google Rich Results Test وSchema Markup Validator بعد أن تصبح متاحة للعامة.

لا يضمن إعداد Search Console أو إرسال خريطة الموقع ظهور الصفحات أو ترتيبًا محددًا في نتائج البحث.
