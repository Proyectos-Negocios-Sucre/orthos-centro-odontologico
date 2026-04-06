'use client'

import { useEffect, useState } from 'react'

interface NumberTickerProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function NumberTicker({ value, duration = 2000, prefix = '', suffix = '' }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      const easeOutQuad = 1 - Math.pow(1 - progress, 2)

      if (progress < 1) {
        setDisplayValue(Math.floor(value * easeOutQuad))
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [value, duration])

  return (
    <span>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
