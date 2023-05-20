import { useEffect, useState } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [currentDevice, setCurrentDevice] = useState('')

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)

    return () => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [])

  useEffect(() => {
    const width = windowSize.width

    if (width <= 767) {
      setCurrentDevice('isPhone')
    } else if (width >= 768 && width <= 1023) {
      setCurrentDevice('isTablet')
    } else if (width >= 1024 && width <= 1439) {
      setCurrentDevice('isLaptop')
    } else if (width >= 1440) {
      setCurrentDevice('isDesktop')
    }
  }, [windowSize.width])

  return { windowSize, currentDevice }
}

export default useWindowSize
