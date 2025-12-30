import React, { useState } from 'react'

export default function FormRev() {

    const [Inputs, setInputs] = useState({
        Nom: "",
        Prenom: "",
        Age: "",
        Email: "",
        Country: "",
        Gender: ""

    })



    const handleInputs = (e) => {

        const { name, type, value, checked } = e.target

        if (type === "checkbox") {
            setInputs({ ...Inputs, [name]: checked })
        } else {
            setInputs({ ...Inputs, [name]: value })
        }




    }


    const display = () => {
       return `    Hello ${Inputs.Nom} ${Inputs.Country} ${Inputs.Gender} 
            `

    }



    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <div className='container mx-7'>
            <form action="" onSubmit={handleSubmit}>
                <label className='form-label'>Nom</label>
                <input type="text" name="Nom" value={Inputs.Nom} onChange={handleInputs} className='form-control' />

                <label className='form-label'>Prenom</label>
                <input type="text" name="Prenom" value={Inputs.Prenom} onChange={handleInputs} className='form-control' />

                <label className='form-label'>Age</label>
                <input type="number" name="Age" value={Inputs.Age} onChange={handleInputs} className='form-control' />

                <label className='form-label'>Email</label>
                <input type="text" name="Email" value={Inputs.Email} onChange={handleInputs} className='form-control' />

                <br />

                <label className='form-label'>Country</label>
                <select name="Country" value={Inputs.Country} onChange={handleInputs} className='form-select'  >
                    <option value="">-- Select Country --</option>
                    <option value="MA">Maroc</option>
                    <option value="FR">France</option>
                    <option value="US">USA</option>
                </select>

                <div className="form-check form-check-inline">
                    <input type="radio" name="Gender" value="Man" checked={Inputs.Gender == "Man"} onChange={handleInputs} className="form-check-input" id="genderMan" />
                    <label className="form-check-label" htmlFor="genderMan">Man</label>
                </div>

                <div className="form-check form-check-inline">
                    <input type="radio" name="Gender" value="Woman" checked={Inputs.Gender == "Woman"}  onChange={handleInputs} className="form-check-input" id="genderWoman" />
                    <label className="form-check-label" htmlFor="genderWoman">Woman</label>
                </div>
                <input className='btn btn-primary d-block mt-4 ' type="submit" value="Submit" />
                <p className="mt-3">
                </p>
            </form>
            <div>
                {display()}
            </div>
        </div>
    )
}
