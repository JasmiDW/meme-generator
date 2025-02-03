import { useEffect } from "react"
import { useState } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText : "Walk into mordoor",
        imageUrl : "https://i.imgflip.com/30b1gx.jpg"
    })

    const [urlMeme, setUrlMeme] = useState([])

    useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) 
            .then(data => {
                const urls = data.data.memes.map(element => element.url)
                setUrlMeme(urls)
            })

    }, [])

    function handleMeme(){
        const randomIndex = Math.floor(Math.random() * urlMeme.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                imageUrl: urlMeme[randomIndex]
                
            } 
        } )
    }

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
                
            } 
        } )
    }

    return (
        <main>
            <div className="form">
                <label>Texte du haut
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Texte du bas
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleMeme}>Avoir un nouveau meme 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}