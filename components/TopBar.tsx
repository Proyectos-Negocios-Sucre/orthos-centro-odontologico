"use client";

import {
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import contactInfo from "@/data/contact-info.json";

export default function TopBar() {
  return (
    <div className="bg-primary text-white py-1 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop View */}
        <div className="hidden sm:flex flex-row justify-between items-center gap-4 text-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope size={16} />
            <span>{contactInfo.email}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`${contactInfo.whatsapp_me}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FaWhatsapp size={16} />
              <span>{contactInfo.phone}</span>
            </a>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-2">
            <FaClock size={16} />
            <div className="overflow-hidden">
              <div className="animate-scroll whitespace-nowrap">
                Lun - Vie: 8:00 - 18:00 • Sábado: 9:00 - 13:00 • Lun - Vie: 8:00
                - 18:00
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <a
                href={contactInfo.social.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-200"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={contactInfo.social.tiktok || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-gray-200"
              >
                <FaTiktok size={16} />
              </a>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <FaMapMarkerAlt size={16} />
              <a
                href={contactInfo.url_maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a Mapa
              </a>
            </div>
          </div>
        </div>

        {/* Mobile View - Compact */}
        <div className="sm:hidden">
          {/* Row 1: Email and WhatsApp */}
          <div className="flex justify-between items-center gap-2 py-1">
            {/* Email Icon with Text */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1 hover:text-gray-200 transition-colors text-xs"
            >
              <FaEnvelope size={16} />
              <span>Enviar Mail</span>
            </a>

            {/* WhatsApp Icon with Text */}
            <a
              href={`${contactInfo.whatsapp_me}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-200 transition-colors text-xs"
            >
              <FaWhatsapp size={16} />
              <span>{contactInfo.phone}</span>
            </a>

            {/* Map Icon with Text */}
            <a
              href={contactInfo.url_maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-200 transition-colors text-xs"
            >
              <FaMapMarkerAlt size={16} />
              <span>Ir a Mapa</span>
            </a>
          </div>

          {/* Row 2: Hours (Scrolling Text) and Social Icons */}
          <div className="flex justify-between items-center gap-2 py-1">
            {/* Hours with Scrolling Effect */}
            <div className="flex items-center gap-1 overflow-hidden flex-1">
              <FaClock size={16} className="shrink-0" />
              <div className="overflow-hidden flex-1">
                <div className="animate-scroll whitespace-nowrap text-xs">
                  Lun - Vie: 8:00 - 18:00 • Sábado: 9:00 - 13:00 • Lun - Vie:
                  8:00 - 18:00
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={contactInfo.social.facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-200 transition-colors pr-1"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={contactInfo.social.tiktok || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-gray-200 transition-colors"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

