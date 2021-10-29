import { useState, useEffect } from 'react'
import { Light, Dark } from '../theme'

export const useTheme = () => {
  const [theme, setTheme] = useState(Dark)

  const handlerChangeTheme = (newTheme, type) => {
    setTheme(newTheme)
    window.localStorage.setItem('theme', type)
  }

  useEffect(() => {
    const type = window.localStorage.getItem('theme')
    if (type) {
      switch (type) {
        case 'light':
          setTheme(Light)
          break
        case 'dark':
          setTheme(Dark)
          break
      }
    }
    return () => type
  }, [])

  return {
    theme,
    handlerChangeTheme
  }
}
