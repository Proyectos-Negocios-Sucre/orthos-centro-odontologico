'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import { ClinicalCase } from '@/types'

interface CaseCardProps {
  clinicalCase: ClinicalCase
  onViewMore: (clinicalCase: ClinicalCase) => void
}

export default function CaseCard({
  clinicalCase,
  onViewMore,
}: CaseCardProps) {
  const [activeImage, setActiveImage] = useState<'before' | 'after'>('before')

  return (
    <div className="bg-white dark:bg-dark-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer" onClick={() => onViewMore(clinicalCase)}>
      {/* Images Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Before Image */}
        <div className="relative h-64 md:h-80 group">
          <Image
            src={clinicalCase.beforeImage}
            alt="Antes"
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Antes
          </div>
        </div>

        {/* After Image */}
        <div className="relative h-64 md:h-80 group">
          <Image
            src={clinicalCase.afterImage}
            alt="Después"
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Después
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {clinicalCase.procedure}
        </h3>
        <p className="text-text-light dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {clinicalCase.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <span>Especialista: {clinicalCase.specialist}</span>
          <span className="hidden sm:inline">•</span>
          <span>Duración: {clinicalCase.duration}</span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              setActiveImage('before')
            }}
          >
            Ver Antes
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation()
              setActiveImage('after')
            }}
          >
            Ver Después
          </Button>
        </div>
      </div>
    </div>
  )
}
