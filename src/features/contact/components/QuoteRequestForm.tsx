import { Clipboard, MessageCircle } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import type { Service, SiteInfo } from '../../../domain/models'
import { emitCtaEvent } from '../../../shared/lib/ctaEvents'
import { createWhatsAppUrl } from '../../../shared/lib/contact'
import { Button } from '../../../shared/ui'

interface QuoteRequestFormProps {
  services: readonly Service[]
  siteInfo: SiteInfo
}

interface FormErrors {
  customerName?: string
  serviceType?: string
  location?: string
  description?: string
}

const fieldClassName =
  'mt-2 min-h-12 w-full rounded-brand-sm border border-ivory-200 bg-surface px-4 py-3 text-charcoal-900 outline-none transition placeholder:text-charcoal-700/60 focus:border-bronze-500 focus:ring-2 focus:ring-bronze-300/40'

function requiredError(value: string, label: string) {
  return value.trim() ? undefined : `${label} مطلوب.`
}

async function copyMessage(message: string) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(message)
      return
    } catch {
      // Fall back to a temporary selection when Clipboard API access is unavailable.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = message
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand('copy')
  textarea.remove()
  if (!copied) throw new Error('Copy command failed')
}

export function QuoteRequestForm({ services, siteInfo }: QuoteRequestFormProps) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [generatedMessage, setGeneratedMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const customerName = String(form.get('customerName') ?? '')
    const phone = String(form.get('phone') ?? '')
    const serviceType = String(form.get('serviceType') ?? '')
    const location = String(form.get('location') ?? '')
    const projectSize = String(form.get('projectSize') ?? '')
    const description = String(form.get('description') ?? '')
    const nextErrors: FormErrors = {
      customerName: requiredError(customerName, 'الاسم'),
      serviceType: requiredError(serviceType, 'نوع الخدمة'),
      location: requiredError(location, 'المدينة أو الحي'),
      description: requiredError(description, 'وصف المشروع'),
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      const firstInvalidName = (
        ['customerName', 'serviceType', 'location', 'description'] as const
      ).find((name) => nextErrors[name])
      const formElement = event.currentTarget
      requestAnimationFrame(() => {
        if (firstInvalidName) {
          const field = formElement.elements.namedItem(firstInvalidName)
          if (field instanceof HTMLElement) field.focus()
        }
      })
      return
    }

    const lines = [
      'مرحبًا، أرغب في طلب عرض لمشروع دهانات.',
      `الاسم: ${customerName.trim()}`,
      phone.trim() ? `رقم التواصل: ${phone.trim()}` : null,
      `نوع الخدمة: ${serviceType}`,
      `الموقع: ${location.trim()}`,
      projectSize.trim() ? `حجم المشروع التقريبي: ${projectSize.trim()}` : null,
      `تفاصيل المشروع: ${description.trim()}`,
    ].filter((line): line is string => Boolean(line))
    const message = lines.join('\n')

    setGeneratedMessage(message)
    setCopyStatus('')
    emitCtaEvent('quote-whatsapp', 'contact-form')
    window.open(
      createWhatsAppUrl(siteInfo.contact.whatsappUrl, message),
      '_blank',
      'noopener,noreferrer',
    )
  }

  async function handleCopy() {
    try {
      await copyMessage(generatedMessage)
      setCopyStatus('تم نسخ الرسالة.')
      emitCtaEvent('copy-message', 'contact-form')
    } catch {
      setCopyStatus('تعذّر النسخ التلقائي. يمكنك تحديد النص ونسخه يدويًا.')
    }
  }

  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-semibold text-charcoal-800">
            الاسم <span aria-hidden="true" className="text-bronze-700">*</span>
            <input
              aria-describedby={errors.customerName ? 'customer-name-error' : undefined}
              aria-invalid={Boolean(errors.customerName)}
              autoComplete="name"
              className={fieldClassName}
              name="customerName"
              placeholder="اكتب اسمك"
              type="text"
            />
            {errors.customerName ? <span className="mt-2 block text-sm text-red-700" id="customer-name-error" role="alert">{errors.customerName}</span> : null}
          </label>

          <label className="font-semibold text-charcoal-800">
            رقم الهاتف <span className="text-sm font-normal text-charcoal-700">(اختياري)</span>
            <input autoComplete="tel" className={fieldClassName} dir="ltr" inputMode="tel" name="phone" placeholder="05xxxxxxxx" type="tel" />
          </label>

          <label className="font-semibold text-charcoal-800">
            نوع الخدمة <span aria-hidden="true" className="text-bronze-700">*</span>
            <select
              aria-describedby={errors.serviceType ? 'service-type-error' : undefined}
              aria-invalid={Boolean(errors.serviceType)}
              className={fieldClassName}
              defaultValue=""
              name="serviceType"
            >
              <option disabled value="">اختر الخدمة</option>
              {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
            </select>
            {errors.serviceType ? <span className="mt-2 block text-sm text-red-700" id="service-type-error" role="alert">{errors.serviceType}</span> : null}
          </label>

          <label className="font-semibold text-charcoal-800">
            المدينة أو الحي <span aria-hidden="true" className="text-bronze-700">*</span>
            <input
              aria-describedby={errors.location ? 'location-error' : undefined}
              aria-invalid={Boolean(errors.location)}
              autoComplete="address-level2"
              className={fieldClassName}
              name="location"
              placeholder={siteInfo.city}
              type="text"
            />
            {errors.location ? <span className="mt-2 block text-sm text-red-700" id="location-error" role="alert">{errors.location}</span> : null}
          </label>

          <label className="font-semibold text-charcoal-800 sm:col-span-2">
            حجم المشروع التقريبي <span className="text-sm font-normal text-charcoal-700">(اختياري)</span>
            <input className={fieldClassName} name="projectSize" placeholder="مثال: شقة من 4 غرف أو واجهة فيلا" type="text" />
          </label>

          <label className="font-semibold text-charcoal-800 sm:col-span-2">
            وصف المشروع <span aria-hidden="true" className="text-bronze-700">*</span>
            <textarea
              aria-describedby={errors.description ? 'description-error' : undefined}
              aria-invalid={Boolean(errors.description)}
              className={`${fieldClassName} min-h-36 resize-y`}
              name="description"
              placeholder="اذكر حالة المساحة والعمل المطلوب وأي تفاصيل مهمة"
            />
            {errors.description ? <span className="mt-2 block text-sm text-red-700" id="description-error" role="alert">{errors.description}</span> : null}
          </label>
        </div>

        <p className="mt-6 text-sm leading-7 text-charcoal-700">
          عند الضغط على الزر سنجهّز رسالتك ونفتح واتساب. لن تُرسل الرسالة تلقائيًا، ولن يحفظ الموقع البيانات المدخلة.
        </p>
        <Button className="mt-5 w-full sm:w-auto" leadingIcon={<MessageCircle aria-hidden="true" className="size-5" />} size="lg" type="submit">
          تجهيز الطلب وفتح واتساب
        </Button>
      </form>

      {generatedMessage ? (
        <div className="mt-8 rounded-brand-lg border border-bronze-300 bg-bronze-50 p-5">
          <h3 className="font-bold text-charcoal-900">نسخة من الرسالة</h3>
          <p className="mt-2 text-sm leading-7 text-charcoal-700">إذا لم يفتح واتساب، انسخ الرسالة وأرسلها يدويًا.</p>
          <textarea aria-label="رسالة طلب عرض السعر الجاهزة" className={`${fieldClassName} min-h-52 resize-y`} readOnly value={generatedMessage} />
          <Button className="mt-4" leadingIcon={<Clipboard aria-hidden="true" className="size-5" />} onClick={handleCopy} type="button" variant="secondary">
            نسخ الرسالة
          </Button>
          <p aria-live="polite" className="mt-3 text-sm font-semibold text-charcoal-800">{copyStatus}</p>
        </div>
      ) : null}
    </div>
  )
}
