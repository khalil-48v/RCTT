import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
    const [Inputs, setInputs] = useState({
        Nom: "",
        Prenom: "",
        Age: "",
        Email: "",
        Country: "",
        Gender: ""
    });
    const [Messages, setMessages] = useState([])
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        if (type === "checkbox") {
            setInputs({ ...Inputs, [name]: checked }); // true/false
        } else if (type === "radio") {
            setInputs({ ...Inputs, [name]: value });
        } else {
            setInputs({ ...Inputs, [name]: value });   // text, number, email, select
        }
    };
    const validForm = (e) => {
        const errs = []
        const regXEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/;


        if (Inputs.Nom === "") errs.push("User Name Empty !!!");
        if (Inputs.Prenom === "") errs.push("User Prenom Empty !!!");
        if (Inputs.Age === "") errs.push("Age Empty !!!");
        if (Inputs.Email === "" || !regXEmail.test(Inputs.Email)) errs.push("Email Empty Or Invalid please Check!!!");
        if (Inputs.Country === "") errs.push("Country Empty !!!");

        setMessages(errs)




    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validForm()
        display()
    }

    const display = () => {
        return `Hello ${Inputs.Gender}`
    }

    return (
        <div className='container mx-7'>
            <form action="" onSubmit={handleSubmit}>
                <label className='form-label'>Nom</label>
                <input type="text" name="Nom" value={Inputs.Nom} onChange={handleChange} className='form-control' />

                <label className='form-label'>Prenom</label>
                <input type="text" name="Prenom" value={Inputs.Prenom} onChange={handleChange} className='form-control' />

                <label className='form-label'>Age</label>
                <input type="number" name="Age" value={Inputs.Age} onChange={handleChange} className='form-control' />

                <label className='form-label'>Email</label>
                <input type="text" name="Email" value={Inputs.Email} onChange={handleChange} className='form-control' />

                <br />

                <label className='form-label'>Country</label>
                <select name="Country" value={Inputs.Country} onChange={handleChange} className='form-select'  >
                    <option value="">-- Select Country --</option>
                    <option value="MA">Maroc</option>
                    <option value="FR">France</option>
                    <option value="US">USA</option>
                </select>

                <div className="form-check form-check-inline">
                    <input type="radio" name="Gender" value="Man" checked={Inputs.Gender === "Man"} onChange={handleChange} className="form-check-input" id="genderMan" />
                    <label className="form-check-label" htmlFor="genderMan">Man</label>
                </div>

                <div className="form-check form-check-inline">
                    <input type="radio" name="Gender" value="Woman" checked={Inputs.Gender === "Woman"} onChange={handleChange} className="form-check-input" id="genderWoman" />
                    <label className="form-check-label" htmlFor="genderWoman">Woman</label>
                </div>
                <input className='btn btn-primary d-block mt-4 ' type="submit" value="Submit" />
                <p className="mt-3">
                </p>
            </form>
            <ul className="list-group mt-3">
                {Messages.map((err, i) => (
                    <li key={i} className="list-group-item list-group-item-danger">
                        {err}
                    </li>
                ))}
            </ul>

            <div>
                {display()}
            </div>
        </div>
    );
}
