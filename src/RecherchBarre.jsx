import React, { useState } from 'react'


export default function RecherchBarre() {
    const lst = [

        { Nom: "Pc", Type: "Electros" },
        { Nom: "Machine a laver", Type: "Electros" },
        { Nom: "Apple", Type: "Fruits" },
        { Nom: "Cartable", Type: "School" }

    ]


    const [typ, SetType] = useState()
    const [Resultat, SetResultat] = useState([])
  
    const handleInput = (e) => {
        SetType(e.target.value)
        console.log(e.target.value)

    }
    const hanldeSubmit = (e) => {
        e.preventDefault()
        const Chercher = lst.filter((elm) => elm.Type.toLowerCase() === typ.toLowerCase())
        SetResultat(Chercher)
        console.log(Resultat)

    }


    return (
        <>

            <h1>Componant de Recherche</h1>
            <form >
                <input type="text" name="" id="tp" onChange={handleInput} />
                <input type="submit" value="Chercher" onClick={hanldeSubmit} />
            </form>
            <ul>
                { Resultat.map((ls ,key) => (
                    <li key={key}>{ls.Nom}</li>
                    ))}
            </ul>


        </>
    )

}