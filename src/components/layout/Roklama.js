import React from 'react';

import './Roklama.css';
import image3 from './images/image3.jpg';

export default function Roklama() {
    return (
        <div className="roklama-container">
            <h1>Roklama - Magazine Designs</h1>
            <p>Attempting to recreate 1920's magazine inside CSS, this magazine has a big focus on Grid elements
                such as white space, overlapping and columns/rows at differents shapes and sizes.
            </p>
            <p>Link to 1920's magazine: <a href="http://www.historygraphicdesign.com/the-modernist-era/a-new-language-of-form/723-roklama-mechano">Roklama Mechano</a></p>

            <div className="roklama-div-container">
                <div>
                    <h3>Image 1 - Original </h3>
                    <img src="http://www.historygraphicdesign.com/images/004/l6.jpg" alt="roklama"></img>
                </div>
            
                <div className="roklama-div">
                    <h3>Image 1 - My Web Design</h3>
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

                <div className="roklama-div">
                    <h3>Image 1 - My Responsive design tester</h3>
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
                </div>
            </div>

            

            <div className="roklama-div-container">
                <div>
                    <h3>Image 2 - Original </h3>
                    <img src="http://www.historygraphicdesign.com/images/004/l8.jpg" alt="roklama2"></img>
                </div>

                <div className="roklama-div">
                    <h3>Image 2 - My Web Design</h3>
                    <div className="roklama2-wrapper">

                    </div>

                </div>

            </div>
            
            
            

            <div className="typographie-div">
                <div>
                    <h3>Image 3 - Original </h3>
                    <img style={{width: "100%"}} src={image3} alt="roklama2"></img>
                </div>

                
                <h3>Image 3 - My Web Design</h3>
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
