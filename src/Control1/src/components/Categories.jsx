import React from 'react'
import {Outlet, Link} from 'react-router'

function Categories() {
    return (
        <div>
            <h1>Composant Categories: Gestion Categories</h1>
            <ul>
                <li><Link to='delCat'> Supprimer Cat </Link></li>
                <li><Link to='addCat'> Ajouter Cat </Link></li>
                <li><Link to='rechercheCat'> Rechercher Cat </Link></li>
            </ul>

            <Outlet />
        </div>
    )
}

export default Categories
