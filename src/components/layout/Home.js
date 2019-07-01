import React, { useState, useEffect } from 'react'

import Header from './Header';
import RoklamaHeader from './RoklamaHeader';

export default function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [headerType, setHeaderType ] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
      <div>
          <header>
            {(screenWidth > 1000 ? <RoklamaHeader /> : <Header/> )}
          </header>
      </div>
  )
}
