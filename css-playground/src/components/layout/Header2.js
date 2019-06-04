import React, { useState } from 'react'
import Lottie from 'react-lottie';
import gitHubLogo from './github.json'
import linkedInLogo from './linkedin.json'
import youtubeLogo from './youtube.json'

import './Header2.css'

export default function Header() {

    const [gitHubAnimation, setGitHubAnimation] = useState(true)
    const [linkedInAnimation, setLinkedInAnimation] = useState(true)
    const [youtubeAnimation, setYoutubeAnimation] = useState(true)



    return (
        <div className="header-wrapper">

            <h1>Frontend website developer</h1>
            <div className="link-container">
                <h1>{"\u00a0"}<a href="https://jongaffney.tech/">Jon Gaffney</a>{"\u00a0"} 
  
                </h1>
            </div>
            <div className="nav-list">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Tutorials</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="follow-links">
                <p>Software and website development created
                    with Python (<strong>Django</strong>) and 
                    Javascript (<strong>React.js</strong>)</p>
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
                </a> 
                {"\u00a0"}
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
                {"\u00a0"}
                <a href="https://www.youtube.com/channel/UC5zomM4cq6RMJSwg5MV_SBg?view_as=subscriber"
                    onMouseEnter={() => setYoutubeAnimation(false) } 
                    onMouseLeave={() => setYoutubeAnimation(true) }
                >
                    <Lottie 
                        options={{
                        loop: false,
                        autoplay: false, 
                        animationData: youtubeLogo,
                        }}
                        height={50}
                        isStopped={youtubeAnimation}
                        
                    />
                </a>
            </div>

        </div>



    )
}
