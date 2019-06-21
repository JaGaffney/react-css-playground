import React, { useState } from 'react'
import Lottie from 'react-lottie';

import './Monopoly.css'
import gitHubLogo from './animations/github.json'
import linkedInLogo from './animations/linkedin.json'

export default function Monopoly() {

    const [playerGo, setPlayerGo] = useState(true) // ture for player 1
    const [player1Color, setPlayer1Color] = useState('yellow')
    const [player2Color, setPlayer2Color] = useState('skyblue')
    const [player1Location, setPlayer1Location] = useState([1, 1, 1])
    const [player2Location, setPlayer2Location] = useState([1, 1, 1])
    const [currentRoll, setCurrentRoll] = useState('click me')
    const [tiles, setCurrentTiles] = useState({
        tile1: {cost: "", location: [1, 1], owner: "Start", color: "orange"},
        tile2: {cost: "$20", location: [2, 1], owner: "", color: "white"},
        tile3: {cost: "$20", location: [3, 1], owner: "", color: "white"},
        tile4: {cost: "$20", location: [4, 1], owner: "", color: "white"},
        tile5: {cost: "", location: [5, 1], owner: "Free", color: "orange"},
        tile6: {cost: "$40", location: [5, 2], owner: "", color: "white"},
        tile7: {cost: "$40", location: [5, 3], owner: "", color: "white"},
        tile8: {cost: "$40", location: [5, 4], owner: "", color: "white"},
        tile9: {cost: "", location: [5, 5], owner: "Free", color: "orange"},
        tile10: {cost: "$60", location: [4, 5], owner: "", color: "white"},
        tile11: {cost: "$60", location: [3, 5], owner: "", color: "white"},
        tile12: {cost: "$60", location: [2, 5], owner: "", color: "white"},
        tile13: {cost: "", location: [1, 5], owner: "Free", color: "orange"},
        tile14: {cost: "$80", location: [1, 4], owner: "", color: "white"},
        tile15: {cost: "$80", location: [1, 3], owner: "", color: "white"},
        tile16: {cost: "$80", location: [1, 2], owner: "", color: "white"},
    })

    const locationChecker = (player, location, color) => {
        Object.keys(tiles).forEach( (tile, index) => {
            if (tiles[tile]['location'][0] === location[0] && tiles[tile]['location'][1] === location[1] && tiles[tile]['owner'] === ''){
                setCurrentTiles({...tiles, [tile]: {
                    owner: player, 
                    location: tiles[tile]['location'], 
                    cost: tiles[tile]['cost'], 
                    color: color}
                })
            } 
        })
    }

    const playerMovement = (player, location, setter, color) => {
        // needs to declare the roll insitaly due to delay when settings
        let roll = Math.floor(Math.random() * 3) + 1;
        setCurrentRoll(roll)

        let loc1 = 1
        let loc2 = 1
        // top side
        if (location[2] === 1) {
            console.log("top side")
            let tempLocation = location[0] + roll
            if (tempLocation >= 6) {
                let newLocation = tempLocation - 5
                loc1 = 5
                loc2 = newLocation
                setter([5, newLocation, 2])
            } else {
                loc1 = tempLocation
                loc2 = location[1]
                setter([tempLocation, location[1], location[2]])  
            }
            locationChecker(player, [loc1, loc2], color)
            return
        }
        // right side
        if (location[2] === 2) {
            console.log("right side")
            let tempLocation = location[1] + roll
            if (tempLocation >= 6) {
                let newLocation = tempLocation - 5
                loc1 = newLocation
                loc2 = 5
                setter([newLocation, 5, 3])
            } else {
                loc1 = location[0]
                loc2 = tempLocation
                setter([location[0], tempLocation, location[2]])  
            }
            locationChecker(player, [loc1, loc2], color)
            return
        }
        // bottom side
        if (location[2] === 3) {
            console.log("bottom side")
            let tempLocation = location[0] - roll
            if (tempLocation <= 1) {
                let newLocation = tempLocation + 4
                loc1 = 1
                loc2 = newLocation
                setter([1, newLocation, 4])
            } else {
                loc1 = tempLocation
                loc2 = location[1]
                setter([tempLocation, location[1], location[2]])  
            }
            locationChecker(player, [loc1, loc2], color)
            return
        }
        // left side
        if (location[2] === 4) {
            console.log('left side')
            let tempLocation = location[1] - roll
            if (tempLocation <= 1) {
                let newLocation = tempLocation + 4
                loc1 = tempLocation
                loc2 = 1
                setter([tempLocation, 1, 1])
            } else {
                loc1 = location[0]
                loc2 = tempLocation
                setter([location[0], tempLocation, location[2]])  
            }
            locationChecker(player, [loc1, loc2], color)
            return
        }   
    }
    
    const onDiceRollHandler = () => {
        // decides on which players go it is
        (playerGo ? playerMovement('player 1', player1Location, setPlayer1Location, player1Color) : playerMovement('player 2', player2Location, setPlayer2Location, player2Color))
        setPlayerGo(!playerGo)
        
    }

    // creates the initial players
    let player1 = (<li style={{"gridColumn": player1Location[0], "gridRow": player1Location[1], alignItems: "flex-start"}}>Player 1</li>)
    let player2 = (<li style={{"gridColumn": player2Location[0], "gridRow": player2Location[1], alignItems: "flex-start", paddingTop: "3rem"}}>Player 2</li>)

    let dice = (<div className="dice-container">
        <h1>Turn: <span style={{ 'background': (playerGo ? player1Color : player2Color)}}>{(playerGo ? "Player 1" : "Player 2")}</span></h1>
        <div className="dice">
            <span>{currentRoll}</span>
        </div>
    </div>
    )

    // const lottie = (animation) => {
    //     return (<div className="monopoly-owner-container">
    //         <Lottie 
    //             options={{
    //             loop: false,
    //             autoplay: true, 
    //             animationData: animation,
    //             }}
    //         height={50}
    //     />          
    //     </div>)
    // } 
    const monopolyGenerator = (item, index) => {
        return(
            <li style={{"gridColumn": tiles[item]['location'][0], "gridRow": tiles[item]['location'][1], 'background': tiles[item]['color']}} key={`title${index}`}>
                <span>{tiles[item]['cost']}</span>
                <span>{tiles[item]['owner']}</span>
            </li>
        )
    }

    return (
        <div className="monopoly-container">
           <h1>Monopoly Generator with Grid</h1> 
            <br />
            

        <ul className="monopoly-wrapper"> 
            {/* <li><span>{tiles.tile1.cost}</span>{tiles.tile1.owner}</li>
            <li><span>{tiles.tile2.cost}</span>{tiles.tile2.owner}</li>
            <li><span>{tiles.tile3.cost}</span><div className="monopoly-owner-container"><span>{tiles.tile3.owner}</span></div></li>
            <li><span>{tiles.tile4.cost}</span><div className="monopoly-owner-container">{tiles.tile4.owner}</div></li>
            <li><span>{tiles.tile5.cost}</span><div className="monopoly-owner-container">{tiles.tile5.owner}</div></li>
            <li><span>{tiles.tile6.cost}</span><div className="monopoly-owner-container">{tiles.tile6.owner}</div></li>
            <li><span>{tiles.tile7.cost}</span><div className="monopoly-owner-container">{tiles.tile7.owner}</div></li>
            <li><span>{tiles.tile8.cost}</span><div className="monopoly-owner-container">{tiles.tile8.owner}</div></li>
            <li><span>{tiles.tile9.cost}</span><div className="monopoly-owner-container">{tiles.tile9.owner}</div></li>
            <li><span>{tiles.tile10.cost}</span><div>{tiles.tile10.owner}</div></li>
            <li><span>{tiles.tile11.cost}</span><div>{tiles.tile11.owner}</div></li>
            <li><span>{tiles.tile12.cost}</span><div>{tiles.tile12.owner}</div></li>
            <li><span>{tiles.tile13.cost}</span><div>{tiles.tile13.owner}</div></li>
            <li><span>{tiles.tile14.cost}</span><div>{tiles.tile14.owner}</div></li>
            <li><span>{tiles.tile15.cost}</span><div>{tiles.tile15.owner}</div></li>
            <li><span>{tiles.tile16.cost}</span><span>{tiles.tile16.owner}</span></li> */}
            {Object.keys(tiles).map((item, index) => {
                return monopolyGenerator(item, index)
            })}
            {player1}
            {player2}
            <li className="dice-wrapper" onClick={onDiceRollHandler}>{dice}</li>
        </ul>

        </div>
    )
}


