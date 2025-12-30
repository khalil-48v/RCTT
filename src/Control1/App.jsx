import React, { createContext, useContext, useState } from 'react'
import ArticleComp from './ArticleComp '
import CatalogueComp from './CatalogueComp '
import OrdinateursCategorieClsComp from './OrdinateursCategorieClsComp'
import MoyennePrixArticles from './MoyennePrixArticles '
import AddArticleCls from './AddArticleCls '
import Remmove from './Remmove'
import './Style.css'

export const CatalogContext = createContext()

export default function App() {
    const catalog = [
        { code: "D300", nom: 'DellInspiron300', categorie: 'Ordinateur', prixU: 11000 },
        { code: "BA25", nom: 'BallonAdidas25ml', categorie: 'Sport', prixU: 600 },
        { code: "RQT", nom: 'Raquette', categorie: "Sport", prixU: 260 },
    ]

    const [res, setRes] = useState(catalog)
    const search = (cat) => {
        const resu = catalog.filter((ls) =>
            ls.categorie.toLocaleLowerCase() === cat.toLocaleLowerCase()

        )
        setRes(resu)

    }



    const calculeMo = (lst) => {
        return lst.reduce((Acc, item) => { return Acc + item.prixU }, 0)

    }
    const Add = (obj) => {
        setRes([...res, obj])

    }

    const remo = (code) => {
        const Undelete = res.filter(rs => rs.code.toLocaleLowerCase() !== code.toLocaleLowerCase())
        setRes(Undelete)
        console.log(Undelete)
    }
    const Modifier = (code, nom, categorie, prixU) => {
        const updated = res.map((rs) => rs.code.toLocaleLowerCase() === code.toLocaleLowerCase() ?
            {
                code: code.toUpperCase(),
                nom: nom,
                categorie: categorie,
                prixU: prixU
            } : rs


        )

        setRes(updated)
    }



    return (
        <div >

            <p>#------------Nom-----------Categorie--------Prix </p>

            <CatalogContext.Provider value={{ res, Add, remo, Modifier, search, calculeMo }}>
                <CatalogueComp />
                <OrdinateursCategorieClsComp />
                <ArticleComp />
                <MoyennePrixArticles />
                <Remmove />
            </CatalogContext.Provider>
            <AddArticleCls Add={Add} />
            <hr />
            <ArticleComp code="D30fd0" nom="DellInspiron300" categorie="Ordinateur" prixU="11000" />



         
        </div>
    )
}
