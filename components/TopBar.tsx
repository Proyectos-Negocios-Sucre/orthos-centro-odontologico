'use client'

import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import contactInfo from '@/data/contact-info.json'

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhone size={16} />
          <span>{contactInfo.phone}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope size={16} />
          <span>{contactInfo.email}</span>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-2">
          <FaClock size={16} />
          <span>Lun - Vie: 8:00 - 18:00</span>
        </div>
      </div>
    </div>
  )
}
