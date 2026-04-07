'use client'

import { FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTiktok, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import contactInfo from '@/data/contact-info.json'

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-1 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        {/* Phone */}

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope size={14} />
          <span>{contactInfo.email}</span>
        </div>

        <div className="flex items-center gap-2">
            <a
            href={`${contactInfo.whatsapp_me}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
            <FaWhatsapp size={14} />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
        {/* Hours */}
        <div className="flex items-center gap-2">
          <FaClock size={14} />
          <span>Lun - Vie: 8:00 - 18:00</span>
          <div className="flex items-center gap-3 ml-4">
            <a
              href={contactInfo.social.facebook || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-200"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href={contactInfo.social.tiktok || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-gray-200"
            >
              <FaTiktok size={14} />
            </a>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <FaMapMarkerAlt size={14} />
            <a href={contactInfo.url_maps} target="_blank" rel="noopener noreferrer">
              Ir a Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
