import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { ROUTES } from '@/utils/constants'
import contactInfo from '@/data/contact-info.json'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-gray-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                O
              </div>
              <h3 className="text-lg font-bold">Orthos</h3>
            </div>
            <p className="text-sm text-blue-100">
              Excelencia en odontología moderna. Cuidamos tus sonrisas con experiencia y tecnología de punta.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={contactInfo.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href={contactInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={ROUTES.HOME}
                  className="hover:text-secondary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.ABOUT}
                  className="hover:text-secondary transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SERVICES}
                  className="hover:text-secondary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.TIPS}
                  className="hover:text-secondary transition-colors"
                >
                  Tips & Salud
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.PROFESSIONALS}
                  className="hover:text-secondary transition-colors"
                >
                  Profesionales
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.CONTACT}
                  className="hover:text-secondary transition-colors"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#ortodoncia" className="hover:text-secondary transition-colors">
                  Ortodoncia
                </a>
              </li>
              <li>
                <a href="#implantologia" className="hover:text-secondary transition-colors">
                  Implantología
                </a>
              </li>
              <li>
                <a href="#estetica" className="hover:text-secondary transition-colors">
                  Estética Dental
                </a>
              </li>
              <li>
                <a href="#blanqueamiento" className="hover:text-secondary transition-colors">
                  Blanqueamiento
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-secondary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-secondary transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contactos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 pt-8">
          <p className="text-center text-sm text-blue-100">
            © 2024 Orthos Centro Odontológico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
