import React from 'react'

import './Roklama.css'

export default function Roklama() {
    return (
        <div className="roklama-container">
            <h1>Roklama - old knowledge vs new</h1>
            <p>Link to magazine: <a href="http://www.historygraphicdesign.com/the-modernist-era/a-new-language-of-form/723-roklama-mechano">Roklama Mechano</a></p>

            <div>
                <h3>Original image</h3>
                <img src="http://www.historygraphicdesign.com/images/004/l6.jpg" alt="roklama"></img>

            </div>
            
            <div className="roklama-div">
                <h3>My Responsive design</h3>
                <div className="roklama-wrapper">

                    <h1>P</h1>
                    <h1>rospekt</h1>
                    <div><h1>B</h1></div>
                    <h1>iura</h1>
                    <h1>Reklama</h1>
                    <h1><span>M</span></h1>
                    <div><h1>echano</h1></div>

                    <div className="roklama-square"></div>
                    <div className="roklama-circle"></div>
                    <div className="roklama-line"></div>

                </div>
            </div>

            {/* <div className="roklama-div">
                <h3>My Responsive design tester</h3>
                <div className="roklama-wrapper">

                    <h1>F</h1>
                    <h1>ront end</h1>
                    <div><h1>D</h1></div>
                    <h1>eveloper</h1>
                    <h1>Jon</h1>
                    <h1><span>G</span></h1>
                    <div><h1>affney</h1></div>

                    <div className="roklama-square"></div>
                    <div className="roklama-circle"></div>
                    <div className="roklama-line"></div>

                </div>
            </div> */}

            <div className="typographie-div">
                <div className="typographie-container">
                    <h1>Jan Tschichold</h1>
                    <h3>
                        <span className="span-1">Lictbildervortrag</span>
                        <span className="span-2">Die Neue Typographie</span>
                    </h3>
                    <p>am mittwoch, 11.mai 1927, abends 8 uhr, in der aula der graphischen berufsschule, pranckhstraße 2, am marsfel, straßenbahnlinien: 3 (haltestelle hackerbrücke), 1, 4 und 11 (haltestelle pappenheimstraße) der vortrag wird von über hundert größtenteils mehrfarbigen lichtbildern begleitet, eine diskussion findet nicht statt</p>
                    <div className="price">freier eintritt</div>
                    <div className="location">veranstaler: bildungsverband der deutschen buchdrucker ortsgruppe müchen vorsitzender: j. lehnacker münchen frøottmaninger­straße 14c </div>
                    <div className="empty-box"></div>
                </div>
            </div>


        </div>
    )
}
