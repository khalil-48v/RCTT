import React, { useContext, useState } from 'react'
import { CatalogContext } from './App'
export default function ModifierComp() {
    const { Modifier } = useContext(CatalogContext)
    const [Inp, setInputs] = useState({})

    const handleIn = (e) => {
        const { name, value } = e.target
        setInputs({ ...Inp, [name]: name === "prixU" ? Number(value) : value })
    }

    const handleBtn = (e) => {
        e.preventDefault()
        Modifier(Inp.code, Inp.nom, Inp.categorie, Inp.prixU)
        console.log(Inp)
    }

    return (
        <div>
            Code :
            <input type="text" name="code" value={Inp.code} onChange={handleIn} />
            Nom :
            <input type="text" name="nom" value={Inp.nom} onChange={handleIn} />
            Categorie :
            <select name="categorie" value={Inp.categorie} onChange={handleIn}>
                <option value=""></option>
                <option value="Ordinateur">Ordinateur</option>
                <option value="Sport">Sport</option>
            </select>
            Prix Unitaire :
            <input type="number" name="prixU" value={Inp.prixU} onChange={handleIn} />
            <button onClick={handleBtn}>Modifier By code</button>

        </div>


    )
}
