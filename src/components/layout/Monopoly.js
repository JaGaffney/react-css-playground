import React, { useState } from 'react'
import Lottie from 'react-lottie';

import './Monopoly.css'
import gitHubLogo from './animations/github.json'
import linkedInLogo from './animations/linkedinBlack.json'

export default function Monopoly() {
    const player1Color = 'yellow'
    const player2Color = 'skyblue'

    const [playerGo, setPlayerGo] = useState(true) // true for player 1
    const [player1Location, setPlayer1Location] = useState([1, 1, 1])
    const [player2Location, setPlayer2Location] = useState([1, 1, 1])
    const [currentRoll, setCurrentRoll] = useState('click me')
    const [currentCash, setCurrentCash] = useState({player1: 250, player2: 250})
    const [tiles, setCurrentTiles] = useState({
        tile1: {cost: "", location: [1, 1], owner: "Safe", color: "orange"},
        tile2: {cost: "$20", location: [2, 1], owner: "", color: "white"},
        tile3: {cost: "$20", location: [3, 1], owner: "", color: "white"},
        tile4: {cost: "$20", location: [4, 1], owner: "", color: "white"},
        tile5: {cost: "", location: [5, 1], owner: "Safe", color: "orange"},
        tile6: {cost: "$40", location: [5, 2], owner: "", color: "white"},
        tile7: {cost: "$40", location: [5, 3], owner: "", color: "white"},
        tile8: {cost: "$40", location: [5, 4], owner: "", color: "white"},
        tile9: {cost: "", location: [5, 5], owner: "Safe", color: "orange"},
        tile10: {cost: "$60", location: [4, 5], owner: "", color: "white"},
        tile11: {cost: "$60", location: [3, 5], owner: "", color: "white"},
        tile12: {cost: "$60", location: [2, 5], owner: "", color: "white"},
        tile13: {cost: "", location: [1, 5], owner: "Safe", color: "orange"},
        tile14: {cost: "$80", location: [1, 4], owner: "", color: "white"},
        tile15: {cost: "$80", location: [1, 3], owner: "", color: "white"},
        tile16: {cost: "$80", location: [1, 2], owner: "", color: "white"},
    })

    const moneyChecker = (tileCost, rentPlayer) => {
        let ownerPlayer = (playerGo ? 'player2' : 'player1')
        let newCashRenter = currentCash[rentPlayer] - tileCost
        let newCashOwner = currentCash[ownerPlayer] + tileCost
        setCurrentCash({[rentPlayer]: newCashRenter, [ownerPlayer]: newCashOwner})
    }

    const locationChecker = (player, location, color, cash) => {
        Object.keys(tiles).forEach( (tile, index) => {
            if (tiles[tile]['location'][0] === location[0] && tiles[tile]['location'][1] === location[1] && tiles[tile]['owner'] === ''){
                let tempCash = tiles[tile]['cost'].slice(1)
                let newCash = cash - parseInt(tempCash)
                if (newCash > 0) {
                    setCurrentCash({...currentCash, [player]: newCash})
                    setCurrentTiles({...tiles, [tile]: {
                        owner: player, 
                        location: tiles[tile]['location'], 
                        cost: tiles[tile]['cost'], 
                        color: color}
                    })
                }
                return
            } 
            if (tiles[tile]['location'][0] === location[0] && tiles[tile]['location'][1] === location[1]){
                let rentPlayer = player
                let tileCost = (tiles[tile]['cost'] === "" ? 0 : parseInt(tiles[tile]['cost'].slice(1)))
                moneyChecker(tileCost, rentPlayer)
                // if (location = [5, 5]){
                //     setCurrentCash({player1: currentCash['player2'], player2: currentCash['player1']})
                // }
            }
        })
    }
    // still needs work as sometimes it appears to not work out the bottom and left side correctley
    const playerMovement = (player, location, setter, color, cash) => {
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
            locationChecker(player, [loc1, loc2], color, cash)
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
            locationChecker(player, [loc1, loc2], color, cash)
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
            locationChecker(player, [loc1, loc2], color, cash)
            return
        }
        // left side
        if (location[2] === 4) {
            console.log('left side')
            let tempLocation = location[1] - roll
            if (tempLocation <= 1) {
                //let newLocation = tempLocation + 4
                loc1 = tempLocation
                loc2 = 1
                setter([tempLocation, 1, 1])
                // removed pass go as game goes on infintley 
                // let passGoCash = currentCash[player] + 200
                // setCurrentCash({...currentCash, [player]: passGoCash})
            } else {
                loc1 = location[0]
                loc2 = tempLocation
                setter([location[0], tempLocation, location[2]])  
            }
            locationChecker(player, [loc1, loc2], color, cash)
            return
        }   
    }
    
    const onDiceRollHandler = () => {
        // decides on which players go it is
        (playerGo ? playerMovement('player1', player1Location, setPlayer1Location, player1Color, currentCash['player1']) : playerMovement('player2', player2Location, setPlayer2Location, player2Color, currentCash['player2']))
        setPlayerGo(!playerGo)
        
    }

    // creates the initial players
    let player1 = (<li style={{"gridColumn": player1Location[0], "gridRow": player1Location[1], alignItems: "flex-start", paddingTop: "2px", "cursor": "pointer"}}>
            <a href="https://github.com/JaGaffney">
                <Lottie 
                    options={{
                    loop: false,
                    autoplay: true, 
                    animationData: gitHubLogo,
                    }}
                    height={50}
                /> 
            </a>    
        </li>
    )
    let player2 = (<li style={{"gridColumn": player2Location[0], "gridRow": player2Location[1], alignItems: "flex-start", paddingTop: "3.5rem", "cursor": "pointer"}}>
            <a href="https://www.linkedin.com/in/jon-gaffney-13a100118/">
                <Lottie 
                    options={{
                    loop: false,
                    autoplay: true, 
                    animationData: linkedInLogo,
                    }}
                    height={50}
                />  
            </a>   
    </li>
    )

    let dice = (<div className="dice-container">
        <h1>Turn
            {(playerGo ? 
                <a href="https://github.com/JaGaffney">
                    <Lottie 
                        options={{
                        loop: false,
                        autoplay: true, 
                        animationData: gitHubLogo,
                        }}
                        height={50}
                    /> 
                </a>  
            :             
                <a href="https://www.linkedin.com/in/jon-gaffney-13a100118/">
                    <Lottie 
                        options={{
                        loop: false,
                        autoplay: true, 
                        animationData: linkedInLogo,
                        }}
                        height={50}
                    />  
                </a>  
            )}
            </h1>
        <div className="dice">
            <span>{currentRoll}</span>
        </div>
    </div>
    )


    const monopolyGenerator = (item, index) => {
        return(
            <li style={{"gridColumn": tiles[item]['location'][0], "gridRow": tiles[item]['location'][1], 'background': tiles[item]['color']}} key={`title${index}`}>
                <span>{tiles[item]['cost']}</span>
                <span>{(tiles[item]['owner'] === "player1" || tiles[item]['owner'] === "player2" ? "" : tiles[item]['owner'])}</span>
            </li>
        )
    }

    return (
        <div className="monopoly-container">

            <div className="monopoly-title-container">
                <h1>Monopoly Generator with Grid</h1> 
                <p>A real world application of this program could be for dynamic adverts/products that move around the page without effecting
                    the flow of the website.
                </p>
           </div>

            <div className="monopoly-rules">
                <h1>How to Play</h1>
                <ul className="monopoly-rules-list">
                    <li>Click the dice to start</li>
                    <li>When a player lands on a tile that is not owned by a previous player they buy that tile</li>
                    <li>If a player lands on a bought tile they will need to pay the fee</li>
                    <li>The game is over when a player looses all their money</li>
                    <li><i>Monopoly is a bad game, this was more for grid placement testing rather than for fun as Monopoly isn't fun</i></li>
                </ul>
            </div>


            <div className="momopoly-score">
                {(currentCash['player1'] < 0 ? alert("Player 2 has won") : "")}
                {(currentCash['player2'] < 0 ? alert("Player 1 has won") : "")}
                <h1>Score</h1>
                <table className="monopoly-table">
                    <tr>
                        <th>Icon</th>
                        <th>Cash</th>   
                    </tr>
                    <tr style={{'background': player1Color}}>
                        <td>Github</td>
                        <td>${currentCash['player1']}</td>
                    </tr>
                    <tr style={{'background': player2Color}}>
                        <td>LinkedIn</td>
                        <td>${currentCash['player2']}</td>
                    </tr>
                </table>
            </div>
            
        <ul className="monopoly-wrapper"> 
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


