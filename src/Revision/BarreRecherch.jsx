import React, { useState } from 'react'

export default function BarreRecherch() {
    const list = [
        { Nom: "Yassine", Age: 19 },
        { Nom: "Khalil", Age: 29 },
        { Nom: "Ahmed", Age: 18 },
        { Nom: "Mousa", Age: 23 },
        { Nom: "Salma", Age: 33 },
        { Nom: "Yassine", Age: 59 },
    ]
    const [search, setSearch] = useState("")
    const [filtred, setFiltred] = useState(null)


    const handleInput = (e) => {
        setSearch(e.target.value)
        const value = e.target.value

        const filtredLst = list.find(ls =>
            ls.Nom.toLowerCase().includes(value.toLocaleLowerCase().trim()))



        setFiltred(filtredLst)
    }

    /*const display = (lst) => {
        return lst.map((ls, index) => (
            <div key={index}>{ls.Nom} and {ls.Age}</div>
        ));
    };*/


    return (
        <div>
            <label htmlFor="" className='form-label'>Nom</label>
            <input type="text" name="" id="" value={search} onChange={handleInput} className='form-control' />
            <div>
                {
                    filtred ? <div >{filtred.Nom} and {filtred.Age}</div>
                        : <div>  No matches</div>
                }
            </div>
        </div>
    )



}


