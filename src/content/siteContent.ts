import { siteConfig } from '../config/site'
import type { HomePageContent, Project, Service, SiteInfo } from '../domain/models'

export const siteInfo: SiteInfo = siteConfig

export const services: Service[] = [
  {
    id: 'homes-and-villas',
    name: 'دهانات المنازل والفلل',
    description:
      'أعمال دهانات للمساحات الداخلية والخارجية بما يتناسب مع طبيعة المنزل أو الفيلا.',
  },
  {
    id: 'buildings',
    name: 'دهانات المباني',
    description:
      'تنفيذ أعمال الدهانات للمباني مع مناقشة نطاق العمل ومتطلبات الموقع قبل البدء.',
  },
  {
    id: 'commercial',
    name: 'دهانات المواقع التجارية',
    description:
      'حلول دهانات للمحلات والمواقع التجارية وفق احتياج المساحة وطبيعة الاستخدام.',
  },
]

// Real project entries will be added only after verified project details are available.
export const projects: Project[] = []

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: 'خدمات دهانات في المدينة المنورة',
    title: 'معلم دهانات بوية للمنازل والفلل في المدينة المنورة',
    description:
      'تنفيذ أعمال الدهانات للمنازل والفلل والمباني والمواقع التجارية، مع تواصل مباشر لمناقشة احتياج المشروع ونطاق العمل.',
  },
  values: [
    {
      id: 'direct-contact',
      title: 'تواصل مباشر',
      description: 'تواصل عبر الهاتف أو واتساب لشرح المطلوب ومشاركة تفاصيل المشروع.',
    },
    {
      id: 'local-service',
      title: 'خدمة محلية',
      description: 'الخدمة موجهة للعملاء داخل المدينة المنورة.',
    },
    {
      id: 'clear-scope',
      title: 'مناقشة واضحة للعمل',
      description: 'يتم توضيح نوع المساحة ونطاق الدهانات المطلوب قبل تنفيذ العمل.',
    },
  ],
  process: [
    {
      id: 'contact',
      title: 'التواصل الأولي',
      description: 'اتصل أو أرسل رسالة واتساب مع نبذة عن المساحة والعمل المطلوب.',
    },
    {
      id: 'discussion',
      title: 'مناقشة المشروع',
      description: 'مناقشة نوع الموقع ونطاق الدهانات والتفاصيل المتاحة.',
    },
    {
      id: 'assessment',
      title: 'تحديد الخطوة المناسبة',
      description: 'تحديد ما إذا كان المشروع يحتاج إلى معاينة أو عرض سعر وفق طبيعته.',
    },
    {
      id: 'execution',
      title: 'تنفيذ العمل',
      description: 'بدء تنفيذ نطاق العمل الذي تم الاتفاق عليه مع العميل.',
    },
  ],
  serviceAreas: ['المدينة المنورة'],
  finalCta: {
    title: 'تريد مناقشة مشروع الدهانات؟',
    description:
      'أرسل تفاصيل المساحة والعمل المطلوب عبر واتساب، أو تواصل هاتفيًا مباشرة.',
  },
}
