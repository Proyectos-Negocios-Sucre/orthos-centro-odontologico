"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/Button";
import contactInfo from "@/data/contact-info.json";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Hablemos sobre tu sonrisa
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para resolver tus dudas y agendar tu próxima visita.
            Nuestro equipo está listo para brindarte la atención personalizada
            que mereces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WhatsApp CTA - Priorized */}
          <div className="mb-12 p-8 md:p-12 bg-linear-to-r from-primary to-primary/80 text-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">
                Contáctanos por WhatsApp
              </h2>
            </div>
            <p className="text-blue-100 mb-6 text-lg">
              La forma más rápida de comunicarte con nosotros
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
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

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href={contactInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href={contactInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href={contactInfo.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/30 bg-white/10 hover:bg-white/20 transition-all"
                >
                  <TrendingUp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Address */}
            <div className="bg-light-bg dark:bg-dark-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  Dirección
                </h3>
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
                <h3 className="text-xl font-semibold text-primary">
                  Teléfono & Email
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <a
                  href={`${contactInfo.whatsapp_me}`}
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.whatsapp}
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
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
                <span className="font-semibold text-text-light dark:text-text-dark">
                  Lun - Vie:
                </span>{" "}
                {contactInfo.hours.weekday}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-text-light dark:text-text-dark">
                  Sábado:
                </span>{" "}
                {contactInfo.hours.saturday}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-text-light dark:text-text-dark">
                  Domingo:
                </span>{" "}
                {contactInfo.hours.sunday}
              </p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg bg-light-bg dark:bg-dark-card">
            <div className="relative w-full h-96">
              <iframe
                title="Ubicación"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${contactInfo.latitude},${contactInfo.longitude}&z=17&output=embed`}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/60 rounded-md p-3 shadow-md">
                <p className="text-sm font-semibold text-primary mb-1">
                  Ubicación: {contactInfo.address}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  Lat: {contactInfo.latitude}, Long: {contactInfo.longitude}
                </p>
                <a
                  href={`https://maps.google.com/?q=${contactInfo.latitude},${contactInfo.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 md:py-16 bg-light-bg dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-primary to-primary/80 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  ¿Deseas explorar más?
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  Descubre nuestros servicios, conoce a nuestro equipo
                  profesional y accede a consejos para cuidar tu sonrisa.
                </p>
              </div>

              <div className="flex gap-3 flex-col sm:flex-row shrink-0 w-full md:w-auto">
                <a
                  href="/servicios"
                  className="px-4 py-2 border border-white/30 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-white text-center text-sm"
                >
                  Ver Servicios
                </a>
                <a
                  href="/profesionales"
                  className="px-4 py-2 border border-white/30 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-white text-center text-sm"
                >
                  Conocer Equipo
                </a>
                <a
                  href="/tips-salud"
                  className="px-4 py-2 border border-white/30 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-white text-center text-sm"
                >
                  Consejos Dentales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

