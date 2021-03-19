import * as React from 'react'

export const useHeadingFocus = (status?: string) => {
  const headingToBeFocusedRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    if (headingToBeFocusedRef.current) {
      headingToBeFocusedRef.current.focus()
    }
  }, [status])
  return headingToBeFocusedRef
}
