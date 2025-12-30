import React, { useState } from 'react'

export default function FormulC() {

    const [Show, setShow] = useState(false)
    const [Inp, setInp] = useState({
        Nom: "",
        Prenom: "",
        Age: "",
        Email: "",
        preferences: [] //...Inp.preferences,value
    })

    const handleInp = (e) => {
        const { type, name, value, checked } = e.target
        if (type === "checkbox") {
            if (checked) {
              setInp({...Inp,preferences:[...Inp.preferences,value]})
            } else {
                setInp({...Inp,preferences:[...Inp.preferences.filter( p => p !== value)]})
            }
        } else {
            setInp({ ...Inp, [name]: value })
        }
    }

    const dis = () => {
        return <div>
            hello {Inp.Nom} {Inp.Prenom}
            <br />
            Age: {Inp.Age}
            <br />
            Email: {Inp.Email}
            <br />
            Preferences: {Inp.preferences.join(", ")}
        </div>
    }

    const handleBtn = () => {
        setShow(true)
    }

    return (
        <div>
            Nom
            <input type="text" name='Nom' onChange={handleInp} />
            Prenom
            <input type="text" name='Prenom' onChange={handleInp} />
            Age
            <input type="number" name="Age" onChange={handleInp} />
            Email
            <input type="email" name="Email" onChange={handleInp} />
            Preferences <br />
            Football
            <input type="checkbox" value="Football" onChange={handleInp} />
            BasketBall
            <input type="checkbox" value="BasketBall" onChange={handleInp} />
            Hooky
            <input type="checkbox" value="Hooky" onChange={handleInp} />
            Gym
            <input type="checkbox" value="Gym" onChange={handleInp} />
            <button onClick={handleBtn}>Click</button>
            <div>{Show && dis()}</div>
        </div>
    )
}
