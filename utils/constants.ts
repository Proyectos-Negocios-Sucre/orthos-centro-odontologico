export const COLORS = {
  primary: '#448e99',
  secondary: '#ba5831',
  lightBg: '#f8f9fa',
  darkBg: '#1a1a1a',
  darkCard: '#2c2c2c',
  textLight: '#2c3e50',
  textDark: '#ecf0f1',
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/nosotros',
  SERVICES: '/servicios',
  TIPS: '/tips-salud',
  PROFESSIONALS: '/profesionales',
  CASES: '/casos-clinicos',
  CONTACT: '/contactos',
}

export const PAGINATION = {
  SERVICES_PER_PAGE: 6,
  PROFESSIONALS_PER_PAGE: 6,
  ARTICLES_PER_PAGE: 6,
  CASES_PER_PAGE: 4,
}

export const NAV_ITEMS = [
  { label: 'Inicio', href: ROUTES.HOME },
  { label: 'Nosotros', href: ROUTES.ABOUT },
  { label: 'Servicios', href: ROUTES.SERVICES },
  { label: 'Tips & Salud', href: ROUTES.TIPS },
  { label: 'Profesionales', href: ROUTES.PROFESSIONALS },
  { label: 'Casos', href: ROUTES.CASES },
  { label: 'Contactos', href: ROUTES.CONTACT },
]
