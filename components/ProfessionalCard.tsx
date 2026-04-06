'use client'

import Image from 'next/image'
import Button from './Button'
import { Professional } from '@/types'

interface ProfessionalCardProps {
  professional: Professional
  onViewMore: (professional: Professional) => void
}

export default function ProfessionalCard({
  professional,
  onViewMore,
}: ProfessionalCardProps) {
  return (
    <div className="text-center bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300">
      {/* Circular Image */}
      {professional.image && (
        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
          <Image
            src={professional.image}
            alt={professional.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold text-text-light dark:text-white mb-1">
        {professional.name}
      </h3>
      <p className="text-secondary font-medium text-sm mb-3 uppercase tracking-wider">
        {professional.specialty}
      </p>
      <p className="text-text-light dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {professional.description}
      </p>

      <Button
        variant="primary"
        size="sm"
        onClick={() => onViewMore(professional)}
      >
        Más Información
      </Button>
    </div>
  )
}
