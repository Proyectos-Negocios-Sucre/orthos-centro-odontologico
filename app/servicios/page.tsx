"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/types";
import { ROUTES, PAGINATION } from "@/utils/constants";
import services from "@/data/services.json";
import contact from "@/data/contact-info.json";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const servicesGridRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll suave a la sección de cards con offset para el nav
    setTimeout(() => {
      if (servicesGridRef.current) {
        const navHeight = 80; // Ajusta este valor según la altura de tu nav
        const elementPosition = servicesGridRef.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const filteredServices = useMemo(() => {
    return services.filter((service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(
    filteredServices.length / PAGINATION.SERVICES_PER_PAGE,
  );
  const startIdx = (currentPage - 1) * PAGINATION.SERVICES_PER_PAGE;
  const endIdx = startIdx + PAGINATION.SERVICES_PER_PAGE;
  const currentServices = filteredServices.slice(startIdx, endIdx);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para tu salud bucal con tecnología avanzada y
            equipo especializado
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <FaSearch
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar servicio..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={setSelectedService}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
            >
              Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
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
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
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
            ¿Cuál es el servicio que necesitas?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Estamos listos para brindarte la mejor atención y ayudarte a lograr
            tu sonrisa ideal
          </p>
          <Link href={contact.whatsapp_me} target="_blank">
            <Button variant="secondary" size="lg">
              Agendar Cita
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.name}
      >
        {selectedService && (
          <div>
            <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              {selectedService.fullDescription}
            </p>
            <Link href={contact.whatsapp_me} target="_blank">
              <Button variant="secondary" size="lg" className="w-full">
                Agendar Cita
              </Button>
            </Link>
          </div>
        )}
      </Modal>
    </>
  );
}