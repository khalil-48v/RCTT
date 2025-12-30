import React from 'react'
import Composant3 from './Composant3'


function Composant2() {
   
    return (
        <div style={{backgroundColor: "lime", border: "2px solid maroon", width: "75%", padding: "15px"}}>
            <h1>Composant 2</h1>
            <hr></hr>
            <Composant3 />
        </div>
    )
}

export default Composant2
