"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { ClinicalCase } from "@/types";

interface CaseCardProps {
  clinicalCase: ClinicalCase;
  onViewMore?: (clinicalCase: ClinicalCase) => void;
}

export default function CaseCard({ clinicalCase, onViewMore }: CaseCardProps) {
  const [activeImage, setActiveImage] = useState<"before" | "after" | "both">(
    "both",
  );
  const timerRef = useRef<number | null>(null);

  // cuando activeImage es 'before' o 'after' se reinicia un temporizador de 3s
  useEffect(() => {
    // limpiar timer previo
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (activeImage === "before" || activeImage === "after") {
      timerRef.current = window.setTimeout(() => {
        setActiveImage("both");
        timerRef.current = null;
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeImage]);

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
      onClick={() => onViewMore && onViewMore(clinicalCase)}
    >
      {/* Images Container - render condicional */}
      {activeImage === "both" ? (
        <div className="grid grid-cols-2 md:grid-cols-2 gap-0">
          <div className="relative h-48 md:h-80 group">
            <Image
              src={clinicalCase.beforeImage}
              alt="Antes"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-gray-400/60 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Antes
            </div>
          </div>
          <div className="relative h-48 md:h-80 group">
            <Image
              src={clinicalCase.afterImage}
              alt="Después"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-gray-400/60 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
              Después
            </div>
          </div>
        </div>
      ) : activeImage === "before" ? (
        <div className="relative h-48 md:h-80 group w-full">
          <Image
            src={clinicalCase.beforeImage}
            alt="Antes"
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-gray-400/60 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Antes
          </div>
        </div>
      ) : (
        <div className="relative h-48 md:h-80 group w-full">
          <Image
            src={clinicalCase.afterImage}
            alt="Después"
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-gray-400/60 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            Después
          </div>
        </div>
      )}

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
            variant="outline"
            size="sm"
            className={`flex-1 ${activeImage === "before" ? "border-primary text-primary dark:bg-white/5 dark:border-white/20" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) => (prev === "before" ? "both" : "before"));
            }}
          >
            Ver Antes
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`flex-1 ${activeImage === "after" ? "border-secondary text-secondary dark:bg-white/5 dark:border-white/20" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveImage((prev) => (prev === "after" ? "both" : "after"));
            }}
          >
            Ver Después
          </Button>
        </div>
      </div>
    </div>
  );
}

