import { useState, useEffect } from 'react'

export default function Loading({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1500
    const interval = duration / 100
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          onComplete()
          return 100
        }
        return prev + 1
      })
    }, interval)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <h1 className="tracking-tighter">
        {count}
      </h1>
    </div>
  )
}
