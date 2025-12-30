import React, {useContext} from 'react'
import {NameContext} from './App'

function Composant4() {
    const {nom, unStyle, fonct} = useContext(NameContext)
  
    return (
        <div style={{backgroundColor: "gold", border: "2px solid blue", width: "75%", padding: "15px"}}>
            <h1>Composant 4</h1>
            <p style={unStyle}>SALUT : {nom} <br></br> {fonct()}</p>
        </div>
    )
}

export default Composant4
