import React, { Component, useContext, useState } from 'react'
import { CatalogContext } from './App'

export default function OrdinateursCategorieClsComp() {
    const { search } = useContext(CatalogContext)
    const [inp, setInp] = useState()

    const handleInp = (e) => {
        setInp(e.target.value)

    }

    const handleBtn = () => {
        search(inp)

    }




    return (
        <div>
            <input type="text" name="categorie" onChange={handleInp} />
            <button onClick={handleBtn}>Search</button>

        </div>
    )
}

