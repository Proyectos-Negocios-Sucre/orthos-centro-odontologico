"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/Button";
import { ClinicalCase } from "@/types";
import { PAGINATION } from "@/utils/constants";
import cases from "@/data/cases.json";

export default function ClinicalCasesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("todos");

  const treatments = useMemo(() => {
    const all = cases.map((c) => c.treatment ?? "").filter(Boolean);
    const unique = Array.from(new Set(all));
    return unique.sort();
  }, []);

  const filteredCases = useMemo(() => {
    return cases.filter((c) => {
      const title = (c.procedure ?? "").toLowerCase();
      const matchesSearch = title.includes(searchTerm.toLowerCase());
      const matchesTreatment =
        selectedTreatment === "todos" || c.treatment === selectedTreatment;
      return matchesSearch && matchesTreatment;
    });
  }, [searchTerm, selectedTreatment]);

  const totalPages = Math.ceil(
    filteredCases.length / PAGINATION.SERVICES_PER_PAGE,
  );
  const startIdx = (currentPage - 1) * PAGINATION.SERVICES_PER_PAGE;
  const endIdx = startIdx + PAGINATION.SERVICES_PER_PAGE;
  const currentCases = filteredCases.slice(startIdx, endIdx);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase mb-4">
            Casos de Éxito
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Casos Clínicos
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Transformaciones reales que devuelven la confianza. Explora cómo
            nuestra precisión clínica y visión estética han cambiado la vida de
            nuestros pacientes.
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 md:py-20 bg-light-bg dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col lg:flex-row gap-4 items-start lg:items-end">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Buscar por nombre del caso..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Treatment Filter */}
            <div className="w-full lg:w-auto">
              <select
                value={selectedTreatment}
                onChange={(e) => {
                  setSelectedTreatment(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="todos">Todos los tratamientos</option>
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {currentCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-colors"
              >
                Anterior
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-gray-300 dark:border-gray-700 hover:border-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

interface CaseCardProps {
  caseItem: ClinicalCase;
}

function CaseCard({ caseItem }: CaseCardProps) {
  const [displayMode, setDisplayMode] = useState<"before" | "after" | "both">(
    "both",
  );

  const toggleMode = (mode: "before" | "after") => {
    setDisplayMode((prev) => (prev === mode ? "both" : mode));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border dark:border-gray-700">
      {/* Image Container */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        {displayMode === "both" ? (
          caseItem.beforeImage && caseItem.afterImage ? (
            <div className="flex h-full">
              <div className="relative flex-1">
                <Image
                  src={caseItem.beforeImage}
                  alt="Antes"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                  ANTES
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  src={caseItem.afterImage}
                  alt="Después"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                  DESPUÉS
                </div>
              </div>
            </div>
          ) : null
        ) : displayMode === "before" ? (
          caseItem.beforeImage ? (
            <>
              <Image
                src={caseItem.beforeImage}
                alt="Antes"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                ANTES
              </div>
            </>
          ) : null
        ) : displayMode === "after" ? (
          caseItem.afterImage ? (
            <>
              <Image
                src={caseItem.afterImage}
                alt="Después"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">
                DESPUÉS
              </div>
            </>
          ) : null
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary dark:text-primary mb-2">
          {caseItem.procedure ?? caseItem.name}
        </h3>
        <p className="text-primary text-sm font-semibold uppercase mb-4 tracking-wider">
          {caseItem.treatment}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {caseItem.description}
        </p>

        {/* Details */}
        <div className="bg-light-bg dark:bg-gray-700 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                Especialista
              </p>
              <p className="text-sm font-semibold text-text-light dark:text-white">
                {caseItem.specialist}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                Duración
              </p>
              <p className="text-sm font-semibold text-text-light dark:text-white">
                {caseItem.duration}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => toggleMode("before")}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all border ${
              displayMode === "before"
                ? "border-primary text-primary bg-white/5"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Ver Antes
          </button>
          <button
            onClick={() => toggleMode("after")}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all border ${
              displayMode === "after"
                ? "border-secondary text-secondary bg-white/5"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            }`}
          >
            Ver Después
          </button>
        </div>
      </div>
    </div>
  );
}

