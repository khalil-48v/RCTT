import React, { useEffect, useState } from 'react'
import ShowImg from './ShowImg'
import './style.css'

export default function Flipp() {

    const [images, SetImages] = useState([])
    const copy = [...images]
    const [checker,setChecker] =useState({
        id1 : "",
        id2 : ""
    })
    const [css, SetCss] = useState({
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        filter: "brightness(0)"
    })

    useEffect(() => {
        fetch("https://api.unsplash.com/search/photos?query=cat&client_id=1d_QB1lL9TFeOeMUmdTf3o9vuhx1ToJpQ_d1VFyu5fs")
            .then(res => res.json())
            .then(data => {
                SetImages(data.results)
            });
    }, [])






    const handleImage = (e) => {
        console.log(images.map((img) => img.id))

        e.preventDefault()
        e.target.style.filter = "brightness(1)"   // reveal
        setTimeout(() => {
            e.target.style.filter = "brightness(0)"
        }, 1500)

        
    }
   const handleImage1  = () => {
    setChecker({id1 : images.id})
   }

    return (
        <>
            <ShowImg images={images} css={css} handleImage={handleImage} />
            <ShowImg images={copy} css={css} handleImage={handleImage} />

        </>
    )
}
