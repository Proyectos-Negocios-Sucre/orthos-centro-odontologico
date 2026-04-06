import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'

export const metadata: Metadata = {
  title: 'Orthos Centro Odontológico | Inicio',
  description: 'Bienvenido a Orthos Centro Odontológico. Especialistas en ortodoncia y estética dental con tecnología avanzada.',
}

export default function Home() {
  return <HomePage />
}
