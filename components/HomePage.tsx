"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Button from "./Button";
import Modal from "./Modal";
import ServiceCard from "./ServiceCard";
import ArticleCard from "./ArticleCard";
import StatCard from "./StatCard";
import { Service, Article } from "@/types";
import { ROUTES, PAGINATION } from "@/utils/constants";
import services from "@/data/services.json";
import articles from "@/data/articles.json";
import statistics from "@/data/statistics.json";
import contact from "@/data/contact-info.json";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const featuredServices = services.slice(0, 4);
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background image (full section) */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/banner.jpeg"
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay: oscurece y difumina ligeramente el fondo para mejorar legibilidad */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            aria-hidden="true"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:py-3">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase shadow-sm backdrop-blur-sm">
                Protegemos tu Salud Bucal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pretty">
                Tu Sonrisa,
                <br />
                <span className="text-orange-500/90">Nuestra Pasión</span>
              </h1>
              <p className="text-lg text-blue-100 mb-6">
                Especialistas en Ortodoncia y Estética Dental. Tecnología de
                vanguardia con trato humano excepcional.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link
                  href={contact.whatsapp_me}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="group flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <FaWhatsapp size={24} className="text-gray-100" />
                    Agendar Cita
                  </Button>
                </Link>
                <Link href={ROUTES.CONTACT}>
                  <Button
                    variant="primary"
                    size="lg"
                    className=" cursor-pointer flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 transition-colors"
                  >
                    Visitanos
                  </Button>
                </Link>

                <Link href={ROUTES.SERVICES}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className=" cursor-pointer flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white/90 border border-white/20 transition-colors"
                  >
                    Nuestros Servicios
                  </Button>
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Imagen de fondo usada como background - se elimina imagen duplicada en la columna */}
            <div />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              5+ años cuidando sonrisas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-12 md:py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 dark:text-blue-100">
              Servicios Destacados
            </h2>
            <p className="text-text-light dark:text-gray-400 text-lg">
              Contamos con un equipo especializado para ofrecerte las mejores
              soluciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={setSelectedService}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.SERVICES}>
              <Button variant="primary" size="lg" className="group">
                Ver Todos los Servicios
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Últimas Noticias y Tips
            </h2>
            <p className="text-text-light dark:text-gray-400 text-lg">
              Consejos profesionales para mantener tu salud bucal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onReadMore={setSelectedArticle}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.TIPS}>
              <Button variant="primary" size="lg" className="group">
                Ver Más Artículos
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Aún tienes dudas?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Nuestro equipo de expertos está listo para brindarte la atención
            personalizada que mereces
          </p>
          <Link href={ROUTES.CONTACT}>
            <Button variant="secondary" size="lg">
              Contáctanos Ahora
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Image */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-start">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">
                {selectedService.fullDescription}
              </p>
              <Link href={contact.whatsapp_me} target="_blank">
                <Button variant="secondary" size="lg" className="w-full">
                  Agendar Cita
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* Article Modal */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title}
      >
        {selectedArticle && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Image */}
            {selectedArticle.image && (
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* Content */}
            <div className="flex flex-col justify-start">
              <div className="mb-4">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {selectedArticle.category}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {selectedArticle.content || selectedArticle.excerpt}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

