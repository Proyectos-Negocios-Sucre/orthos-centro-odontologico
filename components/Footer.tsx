import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import { ROUTES } from "@/utils/constants";
import contactInfo from "@/data/contact-info.json";

export default function Footer() {
  const social = contactInfo?.social ?? {};

  return (
    <footer className="bg-[#1f5760] text-white pt-12 md:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-32">
                <Image
                  src="/logo2.png"
                  alt="Orthos logo"
                  width={160}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-white/90">
              Prestamos servicios de calidad con técnicas constantemente
              actualizadas, utilizando tecnología de vanguardia en materiales y
              equipos.
            </p>

            <h5 className="mt-6 mb-2 text-sm font-semibold">Síguenos en:</h5>
            <div className="flex items-center space-x-3 mt-2">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-md border border-white/10 hover:bg-white/20 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>

            <div className="flex items-start space-x-3 mb-3">
              <span className="mt-1 text-white/90">
                <FiMapPin />
              </span>
              <div>
                <a
                  href={contactInfo.url_maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                >
                  {contactInfo.address}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-3">
              <span className="mt-1 text-white/90">
                <FiMail />
              </span>
              <div className="text-sm text-white/90">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 mb-3">
              <span className="mt-1 text-white/90">
                <FaWhatsapp />
              </span>
              <div className="text-sm text-white/90">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="mt-1 text-white/90">
                <FiClock />
              </span>
              <div className="text-sm text-white/90">
                <div>Horario:</div>
                <div className="text-sm text-white/80 space-y-1">
                  <div>Lunes a Viernes: {contactInfo.hours?.weekday}</div>
                  <div>Sábado: {contactInfo.hours?.saturday}</div>
                  <div>Domingo: {contactInfo.hours?.sunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.HOME} className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ABOUT} className="hover:underline">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href={ROUTES.SERVICES} className="hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href={ROUTES.TIPS} className="hover:underline">
                  Tips & Salud
                </Link>
              </li>
            </ul>
          </div>

          {/* Ubicación - Mapa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
            <div className="rounded-md overflow-hidden border border-white/20 shadow-lg">
              <iframe
                title="Mapa - Orthos Centro Odontológico"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  contactInfo.address || "",
                )}&output=embed`}
                className="w-full h-48 border-0"
                loading="lazy"
              />
            </div>
            {contactInfo.url_maps && (
              <div className="mt-3 text-sm">
                <a
                  href={contactInfo.url_maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:underline font-medium"
                >
                  Ver en Google Maps →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar full width */}
      <div className="w-full bg-[#13393f] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Orthos Centro Odontológico. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}

