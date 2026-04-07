"use client";

import { useState } from "react";
import ProfessionalCardExpanded from "@/components/ProfessionalCardExpanded";
import { PAGINATION } from "@/utils/constants";
import professionals from "@/data/professionals.json";

export default function ProfessionalsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    professionals.length / PAGINATION.PROFESSIONALS_PER_PAGE,
  );
  const startIdx = (currentPage - 1) * PAGINATION.PROFESSIONALS_PER_PAGE;
  const endIdx = startIdx + PAGINATION.PROFESSIONALS_PER_PAGE;
  const currentProfessionals = professionals.slice(startIdx, endIdx);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestro Equipo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Profesionales dedicados a transformar sonrisas con la precisión
            quirúrgica de una clínica y la calidez de un taller de autor
          </p>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 mb-12">
            {currentProfessionals.map((professional) => (
              <ProfessionalCardExpanded
                key={professional.id}
                professional={professional}
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
                    ? "bg-primary text-white"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
            >
              Siguiente
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

