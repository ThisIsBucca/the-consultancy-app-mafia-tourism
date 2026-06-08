"use client"
import Image from "next/image"

interface WhatsAppModalProps {
  open: boolean
  onClose: () => void
  bgImage?: string
}

export default function WhatsAppModal({ open, onClose, bgImage }: WhatsAppModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[10020] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-sm mx-0 sm:mx-4 shadow-2xl animate-fade-up overflow-hidden">
        <div className="relative h-44 sm:h-48">
          <Image
            src={bgImage || "/icon.png"}
            alt=""
            fill
            className="object-cover"
            sizes="384px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white transition-all z-10"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative -mt-14 flex flex-col items-center text-center px-6 pb-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-white shadow-xl mb-4">
            <Image
              src="/Chinanda.jpg"
              alt="Chinanda"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-playfair">
            Chinanda
          </h3>

          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            Your personal travel guide to Mafia Island — let me help you plan the perfect experience.
          </p>

          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-50 rounded-full text-green-700 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available now — reply within minutes
          </div>

          <a
            href="https://wa.me/255785696021?text=Hi%20Chinanda%20of%20mafiaislandauthentic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-br from-green-500 to-green-600 text-white text-base font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            Book Your Excursion Now
          </a>
        </div>
      </div>
    </div>
  )
}
