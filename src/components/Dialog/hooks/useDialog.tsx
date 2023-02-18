import { useState } from 'react'

export function useDialog(): [boolean, () => void] {
  const [open, setOpened] = useState(false)

  function toggleDialog() {
    setOpened(!open)
  }

  return [open, toggleDialog]
}
