"use client"

import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show preloader for minimum 2 seconds, then check if page is fully loaded
    const minimumLoadTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        setIsLoading(false)
      }
    }, 2000)

    // Hide preloader when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false)
    }

    window.addEventListener('load', handleLoad)

    return () => {
      clearTimeout(minimumLoadTime)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className={styles.preloaderContainer}>
      <div className={styles.preloaderContent}>
        {/* Animated spinner */}
        <div className={styles.spinner}>
          <div className={styles.spinnerInner}></div>
        </div>

        {/* Text */}
        <h1 className={styles.text}>Baraka Joshua</h1>
        <p className={styles.subtitle}>Full Stack Developer</p>

        {/* Loading bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </div>
  )
}
