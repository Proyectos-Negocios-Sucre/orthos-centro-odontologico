'use client'

import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, TrendingUp } from 'lucide-react'
import Button from '@/components/Button'
import contactInfo from '@/data/contact-info.json'

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-light-bg dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Hablemos sobre tu sonrisa
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para resolver tus dudas y agendar tu próxima visita. Nuestro equipo está listo para brindarte la atención personalizada que mereces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp CTA - Priorized */}
          <div className="mb-12 p-8 md:p-12 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">Contáctanos por WhatsApp</h2>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              La forma más rápida de comunicarte con nosotros
            </p>
            <a
              href={contactInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <MessageCircle size={20} />
                {contactInfo.whatsapp}
              </Button>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div className="bg-light-bg dark:bg-dark-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Dirección</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {contactInfo.address}
              </p>
            </div>

            {/* Phone & Email */}
            <div className="bg-light-bg dark:bg-dark-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Teléfono & Email</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-light-bg dark:bg-dark-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">Horarios</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold text-text-light dark:text-text-dark">Lun - Vie:</span> {contactInfo.hours.weekday}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-text-light dark:text-text-dark">Sábado:</span> {contactInfo.hours.saturday}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-text-light dark:text-text-dark">Domingo:</span> {contactInfo.hours.sunday}
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-light-bg dark:bg-dark-card">
            <div className="relative w-full h-96 flex items-center justify-center bg-gray-300 dark:bg-gray-700">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-primary mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-semibold">
                  Ubicación: {contactInfo.address}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                  Lat: {contactInfo.latitude}, Long: {contactInfo.longitude}
                </p>
                <a
                  href={`https://maps.google.com/?q=${contactInfo.latitude},${contactInfo.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors text-sm mt-4 inline-block underline"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-light-bg dark:bg-dark-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-light-bg dark:bg-dark-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={contactInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-light-bg dark:bg-dark-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="TikTok"
              >
                <TrendingUp size={24} />
              </a>
              <a
                href={contactInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-light-bg dark:bg-dark-card rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-light-bg dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">¿Deseas explorar más?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/servicios">
              <Button variant="primary" size="lg">
                Ver Servicios
              </Button>
            </a>
            <a href="/profesionales">
              <Button variant="secondary" size="lg">
                Conocer Equipo
              </Button>
            </a>
            <a href="/tips-salud">
              <Button variant="primary" size="lg">
                Consejos Dentales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
