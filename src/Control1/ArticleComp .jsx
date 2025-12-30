import React, { useState } from 'react'

export default function ArticleComp({ code, nom, categorie, prixU }) {




    return (
        <p>
            {code} --
            {nom} --
            {categorie} --
            {prixU}
        </p>

    )
}
