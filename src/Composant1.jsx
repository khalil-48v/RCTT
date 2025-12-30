import React from 'react'
import Composant2 from './Composant2'

function Composant1() {
    
    return (
        <div style={{backgroundColor: "yellow", border: "2px solid blue", width: "75%", padding: "15px"} }>
            <h1>Composant1</h1>
            <hr></hr>
            <Composant2 />

        </div>
    )
}

export default Composant1
