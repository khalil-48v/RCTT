import React, { useContext, useState } from 'react'
import { CatalogContext } from './App'
export default function MoyennePrixArticles() {
    const { calculeMo, res } = useContext(CatalogContext)
    const [rs, setRs] = useState(0)

    const dis = () => {
        return <p>{rs}</p>
    }
    const handleBtn = (e) => {
        e.preventDefault()
        setRs(calculeMo(res))

    }


    return (
        <div>

            <button onClick={handleBtn}>Total...</button>




            <div>{dis()}</div>

        </div>


    )
}
