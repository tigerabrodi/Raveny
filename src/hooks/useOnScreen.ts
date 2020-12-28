import { useState, useEffect } from 'react'

export const useOnScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [
    intersectingElement,
    setIntersectingElement,
  ] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })

    if (intersectingElement !== null) {
      observer.observe(intersectingElement)
    }

    return () => {
      if (intersectingElement !== null) {
        observer.unobserve(intersectingElement)
      }
    }
  }, [intersectingElement])

  return { isVisible, setIntersectingElement }
}
