'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+5917001234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
