import React, { useContext, useState } from 'react'
import { CatalogContext } from './App'

export default function Remmove() {
    const [inp, setInp] = useState('')
    const { remo } = useContext(CatalogContext)
    const handlein = (e) => {
        setInp(e.target.value)
    }
    const handleBtn = (e) => {
        e.preventDefault()
        remo(inp)
        console.log(inp)
    }
    return (
        <div>
            <input type="text" name='code' onChange={handlein} />
            <button onClick={handleBtn}>Delete</button>
        </div>
    )
}
