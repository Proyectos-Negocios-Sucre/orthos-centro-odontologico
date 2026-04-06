'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import Button from './Button'
import Modal from './Modal'
import ServiceCard from './ServiceCard'
import ArticleCard from './ArticleCard'
import StatCard from './StatCard'
import { Service, Article } from '@/types'
import { ROUTES, PAGINATION } from '@/utils/constants'
import services from '@/data/services.json'
import articles from '@/data/articles.json'
import statistics from '@/data/statistics.json'

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const featuredServices = services.slice(0, 4)
  const featuredArticles = articles.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block bg-secondary/20 border border-secondary text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase">
                Sonriendo a Salud Bucal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pretty">
                Tu Sonrisa,<br />
                <span className="text-secondary">Nuestra Pasión</span>
              </h1>
              <p className="text-lg text-blue-100 mb-6">
                Especialistas en Ortodoncia y Estética Dental. Tecnología de vanguardia con trato humano excepcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={ROUTES.CONTACT}>
                  <Button variant="secondary" size="lg">
                    Agendar Cita
                  </Button>
                </Link>
                <Link href={ROUTES.SERVICES}>
                  <Button
                    variant="secondary"
                    size="lg"
                  >
                    Nuestros Servicios
                  </Button>
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
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

            {/* Image */}
            <div className="relative h-64 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1606144242614-5c7ba2d63d1f?w=600&h=400&fit=crop"
                alt="Consultorio dental moderno"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              15 años cuidando sonrisas
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Servicios Destacados
            </h2>
            <p className="text-text-light dark:text-gray-400 text-lg">
              Contamos con un equipo especializado para ofrecerte las mejores soluciones
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
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
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
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center">
            <Link href={ROUTES.TIPS}>
              <Button variant="primary" size="lg" className="group">
                Ver Más Artículos
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Aún tienes dudas?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Nuestro equipo de expertos está listo para brindarte la atención personalizada que mereces
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
          <div>
            <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
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
            <Link href={ROUTES.CONTACT}>
              <Button variant="secondary" size="lg" className="w-full">
                Agendar Cita
              </Button>
            </Link>
          </div>
        )}
      </Modal>
    </>
  )
}
