import React from 'react'
import Composant4 from './Composant4'



function Composant3() {
    
    return (
        <div style={{backgroundColor: "cyan", border: "2px solid blue", width: "75%", padding: "15px"}}> 
            <h1>Composant 3</h1>
            <hr></hr>
            <Composant4/>
        </div>
    )
}

export default Composant3
