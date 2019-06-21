import React, { useState } from 'react'
import Lottie from 'react-lottie';
import gitHubLogo from './animations/github.json'
import linkedInLogo from './animations/linkedin.json'

import './Header.css'

export default function Header() {

    const [gitHubAnimation, setGitHubAnimation] = useState(true)
    const [linkedInAnimation, setLinkedInAnimation] = useState(true)



    return (
        <div className="header-wrapper">

            <h1>CSS playground by</h1>
            <div className="link-container">
                <h1><a href="https://jongaffney.tech/">Jon Gaffney</a> {"\u00a0"} 
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
                    <li>This is a test website</li>
                    <li>Where I can add snippets</li>
                    <li>Of websites I have created</li>
                    <li>To improve my css and js skills</li>
                </ul>
            </div>
            <p className="follow-links">
                Inspired from <a href="https://labs.jensimmons.com/"><strong>labs.jensimmons.com</strong></a>
            </p>

        </div>



    )
}
