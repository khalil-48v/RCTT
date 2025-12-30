import React from 'react'
import "./style.css"
export default function ShowImg({ images, css, handleImage }) {


    const rand = () => {
       return Math.floor(Math.random() * images.length)
    }
    console.log(rand)

    return (
        <div className="memory-game">
            <div className="memory-grid">
                {images.map((img) => (
                    <div className="memory-card" key={img.id}>
                        <img
                            src={img.urls.small}
                            alt={img.alt_description}
                            style={css}
                            onClick={handleImage}
                        />
                    </div>
                ))}
            </div>
        </div>



    )
}
