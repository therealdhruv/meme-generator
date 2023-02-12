import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={ require("../images/troll-face.png") } 
                className="header--image"
                alt="nope"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project"> Dhruv's OG Company </h4>
        </header>
    )
}