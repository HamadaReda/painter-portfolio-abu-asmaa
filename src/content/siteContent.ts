import { siteConfig } from '../config/site'
import type {
  AboutPageContent,
  HomePageContent,
  Project,
  Service,
  SiteInfo,
  WorkGalleryImage,
} from '../domain/models'
import interiorPaintingImage from '../assets/images/painting-hero-1440.jpg'
import commercialPaintingImage from '../assets/images/services/commercial-painting.jpg'
import decorativeFinishingImage from '../assets/images/services/decorative-finishing.jpg'
import exteriorPaintingImage from '../assets/images/services/exterior-painting.jpg'
import surfacePreparationImage from '../assets/images/services/surface-preparation.jpg'

export const siteInfo: SiteInfo = siteConfig

export const services: Service[] = [
  {
    id: 'service-interior-painting',
    slug: 'interior-painting',
    title: 'دهانات داخلية',
    shortDescription:
      'دهانات داخلية للمنازل والفلل والمباني بما يتناسب مع المساحة وطبيعة استخدامها.',
    description:
      'تنفيذ أعمال الدهانات الداخلية في المدينة المنورة للمجالس والغرف والممرات وغيرها من المساحات الداخلية. تبدأ الخدمة بمناقشة حالة الجدران والألوان ونطاق العمل المطلوب قبل التنفيذ.',
    coverImage: interiorPaintingImage,
    benefits: [
      'مناقشة الألوان وطبيعة المساحة قبل البدء',
      'تحديد نطاق الجدران والأسقف المطلوب دهانها',
      'تنفيذ الدهانات وفق التفاصيل المتفق عليها',
    ],
    relatedServices: ['surface-preparation-wall-putty', 'renovation-repainting'],
  },
  {
    id: 'service-exterior-painting',
    slug: 'exterior-painting',
    title: 'دهانات خارجية',
    shortDescription:
      'دهانات للواجهات والأسطح الخارجية وفق حالة الموقع ونوع السطح المطلوب.',
    description:
      'أعمال دهانات خارجية للمباني والفلل في المدينة المنورة، مع تحديد أجزاء الواجهة أو المساحات الخارجية الداخلة في العمل. تتم مناقشة حالة الأسطح والخطوات المناسبة للموقع قبل الاتفاق على التنفيذ.',
    coverImage: exteriorPaintingImage,
    benefits: [
      'تحديد المساحات الخارجية المطلوبة',
      'مناقشة حالة السطح قبل الدهان',
      'تنسيق اللون مع طابع المبنى',
    ],
    relatedServices: ['villa-painting', 'building-contracting-painting'],
  },
  {
    id: 'service-villa-painting',
    slug: 'villa-painting',
    title: 'دهانات الفلل',
    shortDescription:
      'تنفيذ دهانات داخلية وخارجية للفلل وفق نطاق كل مشروع.',
    description:
      'خدمة دهانات الفلل في المدينة المنورة تشمل مناقشة المساحات الداخلية أو الخارجية المطلوبة كوحدة عمل مترابطة. يتم تحديد الغرف والواجهات والتشطيبات المطلوبة وفق تفاصيل الفيلا وحالتها.',
    coverImage: exteriorPaintingImage,
    benefits: [
      'تنسيق نطاق العمل بين المساحات الداخلية والخارجية',
      'مناقشة الألوان المناسبة لأجزاء الفيلا',
      'تحديد الأعمال المطلوبة لكل مساحة بوضوح',
    ],
    relatedServices: ['interior-painting', 'exterior-painting'],
  },
  {
    id: 'service-building-contracting-painting',
    slug: 'building-contracting-painting',
    title: 'دهانات المباني وأعمال المقاولات',
    shortDescription:
      'أعمال دهانات للمباني ضمن نطاق المشروع المتفق عليه.',
    description:
      'تنفيذ أعمال الدهانات للمباني ومشروعات المقاولات في المدينة المنورة بعد تحديد المساحات ومراحل العمل المطلوبة. يُناقش نطاق الدهانات وعلاقته ببقية أعمال الموقع قبل البدء لتوضيح المسؤوليات والتنفيذ.',
    coverImage: exteriorPaintingImage,
    benefits: [
      'تحديد نطاق الدهانات داخل المشروع',
      'مناقشة ترتيب العمل بحسب حالة الموقع',
      'توضيح المساحات والمراحل الداخلة في التنفيذ',
    ],
    relatedServices: ['exterior-painting', 'commercial-property-painting'],
  },
  {
    id: 'service-commercial-property-painting',
    slug: 'commercial-property-painting',
    title: 'دهانات العقارات والمواقع التجارية',
    shortDescription:
      'دهانات للمحلات والمكاتب والمواقع التجارية حسب طبيعة المساحة.',
    description:
      'خدمات دهانات للمواقع التجارية في المدينة المنورة، مثل المحلات والمكاتب والمساحات المخصصة للنشاط التجاري. يتم الاتفاق على المساحات والألوان ونطاق التنفيذ بما يلائم استخدام الموقع وجدول العمل المتاح.',
    coverImage: commercialPaintingImage,
    benefits: [
      'مناقشة طبيعة النشاط واستخدام المساحة',
      'تحديد الجدران والأسقف الداخلة في العمل',
      'تنسيق خطوات التنفيذ مع جاهزية الموقع',
    ],
    relatedServices: ['interior-painting', 'building-contracting-painting'],
  },
  {
    id: 'service-surface-preparation-wall-putty',
    slug: 'surface-preparation-wall-putty',
    title: 'تجهيز الأسطح ومعجون الجدران',
    shortDescription:
      'إعداد الجدران ومعالجة سطحها بالمعجون عند الحاجة قبل تطبيق الدهان.',
    description:
      'تجهيز الأسطح مرحلة مرتبطة بحالة الجدار قبل الدهان. تشمل الخدمة في المدينة المنورة تقييم السطح وتحديد أعمال المعجون أو التنعيم اللازمة ضمن نطاق المشروع قبل الانتقال إلى طبقات الدهان.',
    coverImage: surfacePreparationImage,
    benefits: [
      'مراجعة حالة السطح قبل الدهان',
      'تحديد مواضع المعجون والتسوية المطلوبة',
      'تهيئة السطح للمرحلة التالية من العمل',
    ],
    relatedServices: ['interior-painting', 'renovation-repainting'],
  },
  {
    id: 'service-decorative-painting-finishing',
    slug: 'decorative-painting-finishing',
    title: 'دهانات ديكورية وتشطيبات',
    shortDescription:
      'تشطيبات دهان ديكورية تُناقش بحسب الشكل المطلوب وطبيعة المساحة.',
    description:
      'تنفيذ دهانات وتشطيبات ديكورية في المدينة المنورة للمساحات التي تحتاج إلى معالجة بصرية مختلفة عن الدهان المعتاد. يتم تحديد نوع التأثير واللون ومكان تطبيقه بعد مناقشة النتيجة المطلوبة.',
    coverImage: decorativeFinishingImage,
    benefits: [
      'مناقشة الشكل والتأثير المطلوب',
      'تحديد الجدار أو المساحة المستهدفة',
      'تنسيق التشطيب مع ألوان المكان',
    ],
    relatedServices: ['interior-painting', 'villa-painting'],
  },
  {
    id: 'service-renovation-repainting',
    slug: 'renovation-repainting',
    title: 'تجديد وإعادة الدهان',
    shortDescription:
      'تجديد ألوان المساحات وإعادة دهان الجدران وفق حالتها الحالية.',
    description:
      'خدمة تجديد وإعادة الدهان في المدينة المنورة للمساحات التي تحتاج إلى تغيير اللون أو تحديث مظهر الجدران. تتم مراجعة الحالة الحالية وتحديد ما يلزم من تجهيز قبل تنفيذ طبقات الدهان الجديدة.',
    coverImage: surfacePreparationImage,
    benefits: [
      'مراجعة حالة الدهان القائم',
      'تحديد أعمال التجهيز اللازمة للتجديد',
      'اختيار نطاق الألوان الجديدة قبل التنفيذ',
    ],
    relatedServices: ['surface-preparation-wall-putty', 'interior-painting'],
  },
]

// Real project entries will be added only after verified project details are available.
export const projects: Project[] = []

export const workGalleryImages: WorkGalleryImage[] = [
  { id: 'work-0016', src: '/project-gallery/IMG-20261017-WA0016.jpg', alt: 'تشطيبات دهانات داخلية مع تفاصيل سقف ديكورية', width: 750, height: 1000, featured: true },
  { id: 'work-0017', src: '/project-gallery/IMG-20261017-WA0017.jpg', alt: 'تنسيق الدهانات والتفاصيل الديكورية في مساحة داخلية', width: 750, height: 1000 },
  { id: 'work-0018', src: '/project-gallery/IMG-20261017-WA0018.jpg', alt: 'سقف داخلي بتفاصيل إضاءة وتشطيبات دهان', width: 750, height: 1000, featured: true },
  { id: 'work-0019', src: '/project-uploads/IMG-20261017-WA0019.jpg', alt: 'تنفيذ تشطيب دهان ديكوري بلون دافئ', width: 750, height: 1000, featured: true },
  { id: 'work-0020', src: '/project-uploads/IMG-20261017-WA0020.jpg', alt: 'تفاصيل ملمس دهان ديكوري على الجدار', width: 748, height: 748 },
  { id: 'work-0021', src: '/project-uploads/IMG-20261017-WA0021.jpg', alt: 'تفاصيل زخرفية ضمن أعمال التشطيب الداخلي', width: 750, height: 1000, featured: true },
  { id: 'work-0022', src: '/project-uploads/IMG-20261017-WA0022.jpg', alt: 'مساحة داخلية بتشطيبات دهان وسقف ديكوري', width: 750, height: 1000 },
  { id: 'work-0023', src: '/project-uploads/IMG-20261017-WA0023.jpg', alt: 'تجهيز موقع داخلي أثناء أعمال الدهانات', width: 750, height: 1000 },
  { id: 'work-0024', src: '/project-uploads/IMG-20261017-WA0024.jpg', alt: 'تنفيذ دقيق لدهان جدار داخلي', width: 750, height: 1000 },
  { id: 'work-0025', src: '/project-uploads/IMG-20261017-WA0025.jpg', alt: 'أعمال تشطيب دهان في مساحة مرتفعة', width: 720, height: 1280 },
  { id: 'work-0026', src: '/project-uploads/IMG-20261017-WA0026.jpg', alt: 'تفاصيل تشطيبات داخلية وألواح ديكورية', width: 720, height: 1280 },
  { id: 'work-0027', src: '/project-uploads/IMG-20261017-WA0027.jpg', alt: 'تطبيق طبقات التشطيب على جدار داخلي', width: 750, height: 1000 },
  { id: 'work-0028', src: '/project-uploads/IMG-20261017-WA0028.jpg', alt: 'تشطيب جوانب ومدخل داخلي بالألوان المتناسقة', width: 720, height: 1280 },
  { id: 'work-0029', src: '/project-uploads/IMG-20261017-WA0029.jpg', alt: 'تنفيذ الدهانات على تفاصيل داخلية رأسية', width: 720, height: 1280 },
  { id: 'work-0030', src: '/project-uploads/IMG-20261017-WA0030.jpg', alt: 'أعمال دهان للجزء العلوي من جدار داخلي', width: 720, height: 1280 },
  { id: 'work-0031', src: '/project-uploads/IMG-20261017-WA0031.jpg', alt: 'تنسيق سقف وإضاءة ضمن تشطيبات داخلية', width: 720, height: 1280, featured: true },
  { id: 'work-0032', src: '/project-uploads/IMG-20261017-WA0032.jpg', alt: 'تطبيق تشطيب ديكوري على مساحة جدارية', width: 960, height: 1280 },
  { id: 'work-0033', src: '/project-uploads/IMG-20261017-WA0033.jpg', alt: 'تفاصيل ألوان وتشطيبات في مساحة داخلية', width: 720, height: 1280 },
  { id: 'work-0034', src: '/project-uploads/IMG-20261017-WA0034.jpg', alt: 'تشطيب إطار باب ضمن أعمال الدهانات الداخلية', width: 720, height: 1280 },
  { id: 'work-0035', src: '/project-uploads/IMG-20261017-WA0035.jpg', alt: 'دهان علامات أرضية وحواف خارجية', width: 720, height: 1280 },
  { id: 'work-0036', src: '/project-uploads/IMG-20261017-WA0036.jpg', alt: 'أعمال دهان داخلية أثناء التنفيذ', width: 720, height: 1280 },
  { id: 'work-0037', src: '/project-uploads/IMG-20261017-WA0037.jpg', alt: 'مساحة داخلية مجهزة خلال مراحل الدهان', width: 750, height: 1000 },
  { id: 'work-0038', src: '/project-uploads/IMG-20261017-WA0038.jpg', alt: 'تنفيذ دهانات في مساحة خارجية', width: 720, height: 1280 },
  { id: 'work-0039', src: '/project-uploads/IMG-20261017-WA0039.jpg', alt: 'دهان حواف وعلامات تنظيمية خارجية', width: 720, height: 1280 },
  { id: 'work-0040', src: '/project-uploads/IMG-20261017-WA0040.jpg', alt: 'تطبيق الدهان على جدار داخلي', width: 720, height: 1280 },
  { id: 'work-0041', src: '/project-uploads/IMG-20261017-WA0041.jpg', alt: 'تفاصيل تشطيب وألوان داخل مساحة مجهزة', width: 720, height: 1280 },
  { id: 'work-0042', src: '/project-uploads/IMG-20261017-WA0042.jpg', alt: 'تنفيذ ملمس دهان ديكوري على الجدار', width: 720, height: 1280 },
  { id: 'work-0043', src: '/project-uploads/IMG-20261017-WA0043.jpg', alt: 'ألواح وتفاصيل تشطيب داخلي متناسقة', width: 1280, height: 720, featured: true },
  { id: 'work-0044', src: '/project-uploads/IMG-20261017-WA0044.jpg', alt: 'أعمال تشطيب جدار ديكوري أثناء التنفيذ', width: 720, height: 1280 },
  { id: 'work-0045', src: '/project-uploads/IMG-20261017-WA0045.jpg', alt: 'دهان وتشطيب إطار باب داخلي', width: 720, height: 1280 },
  { id: 'work-0046', src: '/project-uploads/IMG-20261017-WA0046.jpg', alt: 'تفاصيل تنفيذ دهان ديكوري داخلي', width: 720, height: 1280 },
  { id: 'work-0047', src: '/project-uploads/IMG-20261017-WA0047.jpg', alt: 'تنفيذ علامات ودهانات أرضية خارجية', width: 750, height: 1000 },
  { id: 'work-0048', src: '/project-uploads/IMG-20261017-WA0048.jpg', alt: 'تشطيب سقف داخلي حول وحدات الإضاءة', width: 720, height: 960 },
  { id: 'work-0049', src: '/project-uploads/IMG-20261017-WA0049.jpg', alt: 'تشطيب دهان حول باب داخلي', width: 720, height: 1280 },
  { id: 'work-0050', src: '/project-uploads/IMG-20261017-WA0050.jpg', alt: 'تنفيذ الدهانات في جزء مرتفع من المساحة', width: 960, height: 1280 },
  { id: 'work-0051', src: '/project-uploads/IMG-20261017-WA0051.jpg', alt: 'تنسيق جدار ديكوري ومدخل داخلي', width: 720, height: 1280 },
]

export const aboutPageContent: AboutPageContent = {
  introduction:
    'معلم دهانات بوية أبو أسماء يقدم خدمات الدهانات للمنازل والفلل والمباني والمواقع التجارية في المدينة المنورة، مع تواصل مباشر لمناقشة طبيعة الموقع ونطاق العمل المطلوب.',
  workPhilosophy: [
    'فهم احتياج العميل وطبيعة المساحة قبل تحديد نطاق العمل.',
    'مناقشة الألوان والتجهيزات والخطوات المرتبطة بحالة الموقع.',
    'توضيح الأعمال المتفق عليها قبل بدء التنفيذ.',
  ],
  serviceAreas: ['المدينة المنورة'],
}

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
