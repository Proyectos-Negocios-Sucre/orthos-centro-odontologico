"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBullseye, FaEye, FaStar, FaHeart, FaTrophy } from "react-icons/fa";
import Button from "@/components/Button";
import StatCard from "@/components/StatCard";
import { ROUTES } from "@/utils/constants";
import statistics from "@/data/statistics.json";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Quiénes Somos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Excelencia clínica y humanismo en cada tratamiento dental
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Donde la precisión se une con la calidez humana
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
              Desde nuestra fundación en Orthos Centro Odontológico, hemos
              buscado redefinir la experiencia dental. No somos solo una
              clínica; somos un atelier de salud donde cada sonrisa cuenta una
              historia.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Nuestro compromiso es combinar la tecnología más avanzada con el
              cuidado excepcional que cada paciente merece. Cada procedimiento
              es realizado con la precisión quirúrgica de una clínica y la
              calidez de un taller de autor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-light-bg dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-3xl text-primary" />
                <h3 className="text-2xl font-bold text-primary">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Transformar la vida de nuestros pacientes a través de una
                odontología de vanguardia, contrapesada en el bimensual
                integral, la innovación constante y la construcción de la
                confianza mutua y la honestidad clínica.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-3xl text-primary" />
                <h3 className="text-2xl font-bold text-primary">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ser la referencia dentológica con excelencia clínica y calidez
                humana, integrados los últimos avances tecnológicos con un trato
                excepcional que inspire a las personas a cuidar su salud bucal
                como prioridad de vida.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-12">
            <Image
              src="/mision.jpg"
              alt="Consultorio Orthos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>

          {/* Values */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Nuestros Valores Fundamentales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaStar className="text-3xl text-primary" />
                  <h4 className="font-semibold text-lg">Integridad Ética</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Mantenemos altos estándares éticos en cada diagnóstico,
                  recomendación y tratamiento, asegurando que el paciente reciba
                  exactamente lo que necesita.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaHeart className="text-3xl text-primary" />
                  <h4 className="font-semibold text-lg">Empatía Humana</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Entendemos ampliamente y valoramos los sentimientos y
                  necesidades de cada paciente. Escuchamos atentamente para
                  ofrecer un entorno seguro, libre de ansiedad y miedo.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaTrophy className="text-3xl text-primary" />
                  <h4 className="font-semibold text-lg">Excelencia Clínica</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Buscamos constantemente combatir los límites de nuestra
                  práctica profesional. Nuestro equipo se capacita continuamente
                  en las técnicas más avanzadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 md:py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-light-bg dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-primary to-primary/80 text-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Conoce Nuestro Equipo
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  Un equipo de profesionales certificados y apasionados por
                  transformar sonrisas
                </p>
              </div>

              <div className="flex gap-3 flex-col sm:flex-row shrink-0 w-full md:w-auto">
                <Link
                  href={ROUTES.PROFESSIONALS}
                  className="px-4 py-2 border border-white/30 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-medium text-white text-center text-sm inline-block"
                >
                  Ver Profesionales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

