import React, { useState } from 'react'

import Header from './Header';
import RoklamaHeader from './RoklamaHeader';

export default function Home() {
  
  const [headerType, setHeaderType ] = useState(true)

    return (
        <div>
            <header>
              {(headerType ? <RoklamaHeader /> : <Header/> )}
            </header>
            <button onClick={() => setHeaderType(!headerType)}>Toggle Header</button>
        </div>
    )
}
