import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import Header from './Header';
import RoklamaHeader from './RoklamaHeader';

import mondrianImg from './images/mondrian.jpg';
import monopolyImg from './images/monopoly.jpg';
import mechanoImg from './images/mechano.jpg';
import czasImg from './images/czas.jpg';
import janImg from './images/jan.jpg';


export default function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <div>
          <header>
            {(screenWidth > 1100 ? <RoklamaHeader /> : <Header/> )}
          </header>


          <div className="home-projects">

            {/* Dyanmic area */}
            <div className="home-projects-mondrian-container">

              <div className="home-projects-mondrian-content">
                <h1 className="home-projects-title">Dynamically generated <strong>CSS</strong></h1>
                <p className="home-projects-description">
                  Small projects created by the dynamic generation of <strong>CSS</strong> inside <strong>React.js</strong>. 
                  Projects have a big focus on modern <strong>CSS</strong> features such as <strong>Grid</strong>, <strong>Flexbox</strong>, <strong>Shape-x</strong> and <strong>CSS Variable (custom properties)</strong>.</p>
              </div>

              <div className="home-projects-mondrian-style-1"></div>
              <div className="home-projects-mondrian-style-2"></div>
              <div className="home-projects-mondrian-style-3"></div>

              <div className="home-projects-mondrian-image-wrapper home-projects-image-wrapper">
                <Link className="home-projects-image-container" to="mondrian">
                  <div className="home-projects-image-container-content">
                    <h1 className="home-projects-image-container-title">Mondrian</h1>
                    <p className="home-projects-image-container-description">
                      Inspired from the works of the Artist Piet Mondrian. <strong>CSS</strong> is created dynamically inside <strong>React</strong> based on the users entry criteria.
                    </p>
                  </div>
                  <img className="home-projects-image-container-image" src={mondrianImg} alt="mondrian"></img>
                </Link>
                <Link className="home-projects-image-container" to="monopoly">
                  <div className="home-projects-image-container-content">
                    <h1 className="home-projects-image-container-title">Monopoly</h1>
                    <p className="home-projects-image-container-description">A copy of the board game Monopoly which allows users to move around the board buying 'tiles' until one player wins</p>
                  </div>
                  <img className="home-projects-image-container-image" src={monopolyImg} alt="monopoly"></img>
                </Link>
              </div>

            </div>

            {/* Static area */}
            <div className="home-projects-mondrian-container">

              <div className="home-projects-mondrian-content">
                <h1 className="home-projects-title">Static <strong>CSS</strong></h1>
                <p className="home-projects-description">
                  Code snippets created in order to copy designs that would not normally be useable on the web by using <strong>Grid</strong> and <strong>Flexbox</strong>.
                  Images inspired from magazine designs with a focus on overlapping and rotated effects.
                </p>
              </div>

              <div className="home-projects-static-style-1"></div>

              <div className="home-projects-mondrian-image-wrapper home-projects-image-wrapper">
                <Link className="home-projects-image-container" to="roklama">
                  <div className="home-projects-image-container-content">
                    <h1 className="home-projects-image-container-title">Roklama-1</h1>
                    <p className="home-projects-image-container-description">
                      Can be seen as the landing image on this website if you are on a screen wider than <strong>1000px</strong>
                    </p>
                  </div>
                  <img className="home-projects-image-container-image" src={mechanoImg} alt="mechanoImg"></img>
                </Link>
                <Link className="home-projects-image-container" to="roklama">
                  <div className="home-projects-image-container-content">
                    <h1 className="home-projects-image-container-title">Roklama-2</h1>
                    <p className="home-projects-image-container-description">
                      Originally a postcard design but now brought to the web, <i>missing text around the circle due to being required to use <strong>absolute</strong> positioning which takes away from the purpose of this testing</i>
                    </p>
                  </div>
                  <img className="home-projects-image-container-image" src={czasImg} alt="czasImg"></img>
                </Link>
                <Link className="home-projects-image-container" to="roklama">
                  <div className="home-projects-image-container-content">
                    <h1 className="home-projects-image-container-title">Roklama-3</h1>
                    <p className="home-projects-image-container-description">
                     Scalable design created with a combination of <strong>max-content</strong>, <strong>min-content</strong>, <strong>minmax</strong> and <strong>auto</strong>, without using a hardcoded size
                    </p>
                  </div>
                  <img className="home-projects-image-container-image" src={janImg} alt="janImg"></img>
                </Link>


              </div>



            </div>

          </div>
      </div>
  )
}
