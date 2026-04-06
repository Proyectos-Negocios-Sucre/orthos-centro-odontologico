'use client'

import Image from 'next/image'
import Button from './Button'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  onViewDetails: (service: Service) => void
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border dark:border-gray-700 hover:border-primary dark:hover:border-primary">
      {/* Image */}
      {service.image && (
        <div className="relative h-48 w-full">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {service.name}
        </h3>
        <p className="text-text-light dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onViewDetails(service)}
          className="w-full"
        >
          Ver Detalles
        </Button>
      </div>
    </div>
  )
}
