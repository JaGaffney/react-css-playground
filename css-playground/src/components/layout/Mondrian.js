import React, { useState } from 'react'

import './Mondrian.css'

let cssColorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]

export default function Mondrian() {
    const [totalSquares, setTotalSquares] = useState(20)
    const [maxSize, setMaxSize] = useState(4)
    const [refresher, setRefersher] = useState(true)
    const [imgCreator, setImageCreator] = useState(false)

    // creates the squares with styles and size
    const imageGenerator = () => {
        return <img src={`https://unsplash.it/2000/10` + Math.floor(Math.random() * 9) + 1} style={{height: "100%", width: "100%", objectFit: "cover"}} alt=""></img>
    }

    const mondrianGenerator = (index) => {
        let column = Math.floor(Math.random() * maxSize) + 1
        let row = Math.floor(Math.random() * maxSize) + 1

        let imgSRC
        if (imgCreator){
            imgSRC = imageGenerator()
        }
        
        return (<li style={{gridColumn: `span ${column}`, gridRow: `span ${row}`}} key={index}>
                    <div style={{backgroundColor: cssColorArray[Math.floor(Math.random()*cssColorArray.length)], height: '100%', width: '100%'}}>{imgSRC}</div>
                </li>
        )
    }

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const itemCreation = range(1, totalSquares)

    const onShapeHandlerIncrease = (e) => {
        e.preventDefault()
        let size
        (maxSize <= 15 ? size = maxSize + 1 : size = 15)
        setMaxSize(size)
    }
    const onShapeHandlerDecrease = (e) => {
        e.preventDefault()
        let size
        (maxSize >= 1 ? size = maxSize - 1 : size = 0)
        setMaxSize(size)
    }

    const onBoxHandlerIncrease = (e) => {
        e.preventDefault()
        let size
        (totalSquares <= 50 ? size = totalSquares + 1 : size = 50)
        setTotalSquares(size)
    }
    const onBoxHandlerDecrease = (e) => {
        e.preventDefault()
        let size
        (totalSquares >= 1 ? size = totalSquares - 1 : size = 0)
        setTotalSquares(size)
    }

    const onColourHandler = () => {
        // forces a refresh of the colours by setting a new state
        (refresher ? setRefersher(false) : setRefersher(true))
    }

    const onImageHandler = () => {
        // forces a refresh of the colours by setting a new state
        (imgCreator ? setImageCreator(false) : setImageCreator(true))
    }

    return (
        <div className="mondrian-container">

            <h1>Mondrian Generator</h1>
            <h4>Created using grid with dynamic child generation to create a fully responsive grid display</h4>
            <h4>Colours could be easily be replaced with images/products to create a collage effect</h4>

        <div className="mondrian-button-container">
            <div className="mondrian-buttons">
                <button onClick={onShapeHandlerDecrease}>-</button>
                <h1>Change Size</h1>
                <button onClick={onShapeHandlerIncrease}>+</button>
            </div>

            <div className="mondrian-buttons">
                <button onClick={onBoxHandlerDecrease}>-</button>
                <h1>Change Ammount</h1>
                <button onClick={onBoxHandlerIncrease}>+</button>
            </div>
   
            <button onClick={onColourHandler}>Randomize colours</button>
            <button onClick={onImageHandler}>{(!imgCreator ? "Turn into images" : "Turn back to colours")}</button>

        </div>

        <ul className="mondrian-wrapper">
            {itemCreation.map((item, index) => {
                return mondrianGenerator(index)
            })}
        </ul>

        </div>
    )
}
