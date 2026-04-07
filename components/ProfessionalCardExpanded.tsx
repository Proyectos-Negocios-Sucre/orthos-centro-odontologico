"use client";

import Image from "next/image";
import { FaFacebook, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { Check } from "lucide-react";
import { Professional } from "@/types";

interface ProfessionalCardExpandedProps {
  professional: Professional;
}

export default function ProfessionalCardExpanded({
  professional,
}: ProfessionalCardExpandedProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border dark:border-gray-700 hover:shadow-xl transition-shadow flex flex-col md:flex-row">
      {/* Left Side - Image and Contact Icons */}
      <div className="w-full md:w-64 bg-linear-to-br from-primary/10 to-secondary/10 dark:from-gray-700 dark:to-gray-800 p-6 flex flex-col items-center md:border-r dark:border-gray-700">
        {/* Image */}
        {professional.image && (
          <div className="relative w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg mb-6 shrink-0">
            <Image
              src={professional.image}
              alt={professional.name}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        )}

        {/* Contact Icons */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {professional.email && (
            <a
              href={`mailto:${professional.email}`}
              title={`Email: ${professional.email}`}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaEnvelope size={18} />
            </a>
          )}
          {professional.social?.whatsapp && (
            <a
              href={`https://wa.me/${professional.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>
          )}
          {professional.social?.facebook && (
            <a
              href={`https://facebook.com/${professional.social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaFacebook size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Right Side - Information */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        {/* Name and Specialty */}
        <div>
          <h3 className="text-2xl font-bold text-text-light dark:text-white mb-2 text-center md:text-left">
            {professional.name}
          </h3>
          <p className="text-secondary font-semibold text-sm uppercase mb-4 tracking-wider text-center md:text-left">
            {professional.specialty}
          </p>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed text-center md:text-left">
            {professional.description}
          </p>

          {/* Certifications */}
          {professional.certifications.length > 0 && (
            <div>
              <h4 className="font-semibold text-primary text-sm uppercase mb-3 tracking-wider text-center md:text-left">
                Certificaciones
              </h4>
              <ul className="space-y-2">
                {professional.certifications.map((cert, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 justify-center md:justify-start"
                  >
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

