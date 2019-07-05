import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie';
import gitHubLogo from './animations/github.json'
import linkedInLogo from './animations/linkedin.json'

import './Header.css'

export default function Header() {

    const [gitHubAnimation, setGitHubAnimation] = useState(true)
    const [linkedInAnimation, setLinkedInAnimation] = useState(true)



    return (
        <div className="header-wrapper">

            <h1 className="header-title">CSS playground by</h1>
            <div className="link-container">
                <h1 className="header-link"><a href="https://jongaffney.tech/">Jon Gaffney</a> {"\u00a0"} 
                    <a href="https://github.com/JaGaffney" 
                        onMouseEnter={() => setGitHubAnimation(false) } 
                        onMouseLeave={() => setGitHubAnimation(true) }
                    >
                        <Lottie 
                            options={{
                            loop: false,
                            autoplay: false, 
                            animationData: gitHubLogo,
                            }}
                            height={50}
                            isStopped={gitHubAnimation}
                        />
                    </a> {"\u00a0"}
                    <a href="https://www.linkedin.com/in/jon-gaffney-13a100118/"
                        onMouseEnter={() => setLinkedInAnimation(false) } 
                        onMouseLeave={() => setLinkedInAnimation(true) }
                    >
                        <Lottie 
                            options={{
                            loop: false,
                            autoplay: false, 
                            animationData: linkedInLogo,
                            }}
                            height={50}
                            isStopped={linkedInAnimation}
                            
                        />
                    </a>
                </h1>
            </div>
            <div className="nav-list">
                <ul>
                    <NavLink to="/mondrian"><li>Mondrian</li></NavLink>
                    <NavLink to="/monopoly"><li>Monopoly</li></NavLink>
                    <NavLink to="/roklama"><li>Roklama</li></NavLink>
                    <NavLink to="/dribble"><li>Dribble clones</li></NavLink>
                    <NavLink to="/"><li>Soon</li></NavLink>
                </ul>
            </div>
            <p className="follow-links">
                Inspired from <a href="https://labs.jensimmons.com/"><strong>labs.jensimmons.com</strong></a>
            </p>

        </div>



    )
}
