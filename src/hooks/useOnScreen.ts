import { useState, useEffect, useRef } from 'react'

export const useOnScreen = () => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const intersectingElementRef = useRef({} as HTMLDivElement)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } else {
          setIsIntersecting(false)
        }
      })
    })

    observer.observe(intersectingElementRef.current)
  }, [])

  return { isIntersecting, intersectingElementRef }
}
