"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";
import { PAGINATION } from "@/utils/constants";
import articles from "@/data/articles.json";

const CATEGORIES = [
  "Todos",
  "Higiene Dental",
  "Ortodoncia",
  "Salud Bucal",
  "Consejos",
  "Estética",
];

export default function TipsSaludPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory,
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(
    filteredArticles.length / PAGINATION.ARTICLES_PER_PAGE,
  );
  const startIdx = (currentPage - 1) * PAGINATION.ARTICLES_PER_PAGE;
  const endIdx = startIdx + PAGINATION.ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIdx, endIdx);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-block bg-secondary/10 border border-secondary text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase">
              Educación Bucal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Tips & Salud
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Explora nuestra guía experta para el cuidado dental. Descubre
              secretos para una sonrisa radiante y mantente al día con las
              últimas tendencias en odontología moderna.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 max-w-md">
            <div className="relative">
              <FaSearch
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar tips..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-text-light dark:text-white hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentArticles.length > 0 ? (
              currentArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onReadMore={setSelectedArticle}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No hay artículos disponibles en esta categoría
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredArticles.length > PAGINATION.ARTICLES_PER_PAGE && (
            <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
              >
                Anterior
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "border border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 transition-all"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      <Modal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title}
      >
        {selectedArticle && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Image */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-start space-y-4">
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase w-fit">
                {selectedArticle.category}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {selectedArticle.excerpt}
              </p>
              <div className="bg-light-bg dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {selectedArticle.content ||
                    "Contenido completo del artículo..."}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

