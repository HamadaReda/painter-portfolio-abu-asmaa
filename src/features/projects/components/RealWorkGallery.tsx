import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { WorkGalleryImage } from '../../../domain/models'

interface RealWorkGalleryProps {
  images: readonly WorkGalleryImage[]
}

export function RealWorkGallery({ images }: RealWorkGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const selectedImage = selectedIndex === null ? null : images[selectedIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedImage && dialog && !dialog.open) dialog.showModal()
  }, [selectedImage])

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((index) =>
          index === null ? null : (index + 1) % images.length,
        )
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + images.length) % images.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [images.length, selectedIndex])

  function closeDialog() {
    dialogRef.current?.close()
    setSelectedIndex(null)
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            aria-label={`تكبير ${image.alt}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-brand-lg bg-charcoal-900 shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-600"
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            <img
              alt={image.alt}
              className="h-auto w-full transition duration-300 group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
              decoding="async"
              height={image.height}
              loading="lazy"
              src={image.src}
              width={image.width}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-charcoal-900/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="absolute bottom-3 end-3 grid size-10 place-items-center rounded-full bg-surface/95 text-charcoal-900 opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 aria-hidden="true" className="size-4" />
            </span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <dialog
          aria-label="عرض صورة من معرض الأعمال"
          className="m-auto max-h-[92dvh] w-[min(92vw,72rem)] overflow-visible rounded-brand-xl bg-charcoal-900 p-0 text-white shadow-lift backdrop:bg-charcoal-900/85"
          onCancel={closeDialog}
          onClick={(event) => {
            if (event.currentTarget === event.target) closeDialog()
          }}
          onClose={() => setSelectedIndex(null)}
          ref={dialogRef}
        >
          <div className="relative grid max-h-[92dvh] place-items-center p-3 sm:p-5">
            <img
              alt={selectedImage.alt}
              className="max-h-[82dvh] max-w-full rounded-brand-lg object-contain"
              height={selectedImage.height}
              src={selectedImage.src}
              width={selectedImage.width}
            />
            <button
              aria-label="إغلاق الصورة"
              className="absolute end-5 top-5 grid size-11 place-items-center rounded-full bg-charcoal-900/85 text-white transition hover:bg-charcoal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-300"
              onClick={closeDialog}
              type="button"
            >
              <X aria-hidden="true" />
            </button>
            {images.length > 1 ? (
              <>
                <button
                  aria-label="الصورة السابقة"
                  className="absolute start-5 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-charcoal-900/85 text-white transition hover:bg-charcoal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-300"
                  onClick={() => setSelectedIndex((index) => index === null ? 0 : (index - 1 + images.length) % images.length)}
                  type="button"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
                <button
                  aria-label="الصورة التالية"
                  className="absolute end-5 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-charcoal-900/85 text-white transition hover:bg-charcoal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-300"
                  onClick={() => setSelectedIndex((index) => index === null ? 0 : (index + 1) % images.length)}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
              </>
            ) : null}
            <p className="mt-3 text-center text-sm text-ivory-200">{selectedImage.alt}</p>
          </div>
        </dialog>
      ) : null}
    </>
  )
}
