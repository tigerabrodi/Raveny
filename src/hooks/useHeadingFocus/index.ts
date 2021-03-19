import * as React from 'react'

export const useHeadingFocus = () => {
  const headingToBeFocusedRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    if (headingToBeFocusedRef.current) {
      headingToBeFocusedRef.current.focus()
    }
  }, [])
  return headingToBeFocusedRef
}
