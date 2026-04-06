'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import CaseCard from '@/components/CaseCard'
import { ClinicalCase } from '@/types'
import { ROUTES, PAGINATION } from '@/utils/constants'
import clinicalCases from '@/data/cases.json'

export default function ClinicalCasesPage() {
  const [selectedCase, setSelectedCase] = useState<ClinicalCase | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(clinicalCases.length / PAGINATION.CASES_PER_PAGE)
  const startIdx = (currentPage - 1) * PAGINATION.CASES_PER_PAGE
  const endIdx = startIdx + PAGINATION.CASES_PER_PAGE
  const currentCases = clinicalCases.slice(startIdx, endIdx)

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-light-bg dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-secondary/10 border border-secondary text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase">
            Casos de Éxito
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Casos Clínicos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Transformaciones reales que develan la confianza. Explora cómo nuestra precisión clínica y visión estética han cambiado la vida de nuestros pacientes.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {currentCases.map((clinicalCase) => (
              <CaseCard
                key={clinicalCase.id}
                clinicalCase={clinicalCase}
                onViewMore={setSelectedCase}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te gustaría una sonrisa como esta?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Nuestros especialistas están listos para diseñar el plan de tratamiento que transformará tu vida
          </p>
          <Link href={ROUTES.CONTACT}>
            <Button variant="secondary" size="lg">
              Agendar Consulta
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Modal */}
      <Modal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        title={selectedCase?.procedure}
      >
        {selectedCase && (
          <div>
            {/* Before and After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">ANTES</p>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedCase.beforeImage}
                    alt="Antes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary mb-2">DESPUÉS</p>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedCase.afterImage}
                    alt="Después"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              {selectedCase.description}
            </p>

            <div className="bg-light-bg dark:bg-gray-800 p-4 rounded-lg mb-6 space-y-2">
              <p className="text-sm">
                <span className="font-semibold text-primary">Especialista:</span>{' '}
                {selectedCase.specialist}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-primary">Duración:</span>{' '}
                {selectedCase.duration}
              </p>
            </div>

            <Link href={ROUTES.CONTACT}>
              <Button variant="secondary" size="lg" className="w-full">
                Solicitar Consulta Similar
              </Button>
            </Link>
          </div>
        )}
      </Modal>
    </>
  )
}
