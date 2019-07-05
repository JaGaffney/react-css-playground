import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import Header from './Header';
import RoklamaHeader from './RoklamaHeader';

import mondrianImg from './images/mondrian.jpg';
import monopolyImg from './images/monopoly.jpg';


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


            <div className="home-projects-mondrian-container">

              <div className="home-projects-mondrian-content">
                <h1 className="home-projects-title">Mondrian</h1>
                <p className="home-projects-description">
                  Created using Grid with dynamic child generation to create a fully responsive grid display 
                  Colours could be easily be replaced with images/products to create a collage effect</p>
              </div>

              <div className="home-projects-mondrian-style"></div>

              <div className="home-projects-mondrian-image-wrapper home-projects-image-wrapper">
                <div className="home-projects-image-container-style">
                  <Link className="home-projects-image-container" to="mondrian">
                    <div className="home-projects-image-container-content">
                      <h1 className="home-projects-image-container-title">Mondrian</h1>
                      <p className="home-projects-image-container-description">Description</p>
                    </div>
                    <img className="home-projects-image-container-image" src={mondrianImg} alt="mondrian"></img>
                  </Link>
                </div>
              </div>

            </div>

            <div className="home-projects-container">
              <h1 className="home-projects-title">Monopoly</h1>
              <p className="home-projects-description">
                Created using Grid with dynamic child generation to create a fully responsive grid display 
                Colours could be easily be replaced with images/products to create a collage effect</p>


              <div className="home-projects-image-wrapper">
                <div className="home-projects-image-container-style">
                  <Link className="home-projects-image-container" to="monopoly">
                    <div className="home-projects-image-container-content">
                      <h1 className="home-projects-image-container-title">Monopoly</h1>
                      <p className="home-projects-image-container-description">A rough copy of the Monopoly game which allows two players to move around the screen inside a board.</p>
                    </div>
                    <img className="home-projects-image-container-image" src={monopolyImg} alt="monopoly"></img>
                  </Link>
                </div>
              </div>
            </div>

          </div>
      </div>
  )
}
