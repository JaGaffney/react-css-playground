import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from 'react-lottie';
import gitHubLogo from './animations/github.json'
import linkedInLogo from './animations/linkedinBlack.json'


import './RoklamaHeader.css'

export default function RoklamaHeader() {

    const [gitHubAnimation, setGitHubAnimation] = useState(true)
    const [linkedInAnimation, setLinkedInAnimation] = useState(true)

    return (
            <div className="roklama__header">
                <div className="roklama__header-container">

                    <h1 className="title-letter">Frontend</h1>
                    <h1 className="title-word"><span>Web</span><span> Dev</span></h1>
                    {/* <h1 className="heading-letter">J</h1> */}
                    <h1 className="heading-word">Jon</h1>
                    <h1 className="nav-word">CSS:Labs</h1>
                    <h1 className="name-letter"><span>G</span></h1>
                    <h1 className="name-word">affney</h1>

                    <div className="roklama-nav">
                        <ul>
                            <NavLink to="/mondrian"><li>Mondrian</li></NavLink>
                            <NavLink to="/monpoly"><li>Monopoly</li></NavLink>
                            <NavLink to="/roklama"><li>Roklama</li></NavLink>
                            <NavLink to="/"><li>Soon</li></NavLink>
                        </ul>
                    </div>

                    <div className="roklama__header-square">
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
                                height={100}
                                isStopped={gitHubAnimation}
                            />
                        </a> 
                    </div>
                    <div className="roklama__header-circle">
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
                                height={100}
                                isStopped={linkedInAnimation}
                                
                            />
                        </a>
                    </div>

                </div>
            </div>
    )
}
