import { useState, useEffect } from 'react'

type Options = {
  root: HTMLElement | null
  rootMargin: string
  threshold: number
}

export const useOnScreen = (
  { root = null, rootMargin = '0px', threshold = 0 } = {} as Options
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [
    intersectingElement,
    setIntersectingElement,
  ] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold, root, rootMargin }
    )

    if (intersectingElement !== null) {
      observer.observe(intersectingElement)
    }

    return () => {
      if (intersectingElement !== null) {
        observer.unobserve(intersectingElement)
      }
    }
  }, [intersectingElement, root, rootMargin, threshold])

  return { isVisible, setIntersectingElement }
}
