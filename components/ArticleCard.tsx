'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
  onReadMore?: (article: Article) => void
}

export default function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <article className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border dark:border-gray-700 hover:border-primary dark:hover:border-primary">
      {/* Image */}
      {article.image && (
        <div className="relative h-40 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3">
          {article.category}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-text-light dark:text-white mb-2 line-clamp-2">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-text-light dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {article.excerpt}
        </p>



        {/* Read More Link */}
        {onReadMore ? (
          <button
            onClick={() => onReadMore(article)}
            className="text-secondary font-semibold text-sm hover:text-primary transition-colors cursor-pointer"
          >
            LEER MÁS →
          </button>
        ) : (
          <Link
            href={`#article-${article.id}`}
            className="text-secondary font-semibold text-sm hover:text-primary transition-colors"
          >
            LEER MÁS →
          </Link>
        )}
      </div>
    </article>
  )
}
