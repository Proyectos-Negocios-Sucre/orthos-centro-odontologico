import { Clock } from 'lucide-react'
import NumberTicker from './NumberTicker'
import { Statistic } from '@/types'

interface StatCardProps {
  stat: Statistic
}

export default function StatCard({ stat }: StatCardProps) {
  const numValue = parseInt(stat.number.toString())

  return (
    <div className="text-center p-8 bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow border dark:border-gray-700">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
          <Clock size={28} className="text-primary" />
        </div>
      </div>
      <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
        <NumberTicker value={numValue} duration={2500} suffix="+" />
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-sm uppercase tracking-wider font-medium">
        {stat.label}
      </p>
    </div>
  )
}
