import React,{ useState } from "react";
import MemesData from "./MemesData";

export default function Meme() {


    const [memeImage, setMemeImage] = useState (
        {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg"
        }
    );   

    const [allMemeImages, setAllMemeImages] = useState (MemesData);
    
    
    // Defining the `getMemeImage`
    function getMemeImage() {
        const memesArray = MemesData.data.memes;
        const randomNumber = Math.floor (Math.random() * memesArray.length);
        // `a` will have the random Uniform Resource Locator
        const a = memesArray[randomNumber].url;
        setMemeImage(prevMeme => (
                {
                ...prevMeme,
                randomImage : a
                }
            )
        );    
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
                <img src = {memeImage.randomImage} className = "meme--image" />
        </main>
    );
}