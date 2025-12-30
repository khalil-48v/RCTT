import React, {useContext, useState} from 'react'
import {DataContext} from "../App";

function OrdinateursCategorieComp() {
    const [mot, setMot] = useState("");

    const dataContext = useContext(DataContext);
    const rechercherProduits = dataContext.fonctRech;

    const handelChange = (e) => {
        setMot(e.target.value);
    }
    const handelChangeCheck = (e) => {
        // if (e.target.checked) {
        //   this.setState({ ...this.state, mot: "" });
        // }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // passer mot à App
        rechercherProduits(mot);

    }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Categorie:</label>
                <input type="text" placeholder="categorie à chercher" value={mot} onChange={(e) => handelChange(e)} />
                <select name="" id="" onChange={(e) => handelChange(e)}>
                    <option value="sport">Sport</option>
                    <option value="ordinateur">Ordinateur</option>
                </select>
                {/* <input type="submit" value="afficher produits" disabled={this.state.mot===""} /> */}
                <input type="submit" value="afficher produits" />
                <input type="checkbox" name="" id="" onChange={(e) => handelChangeCheck(e)} />
                Afficher Tout
            </form>
            <div></div>
        </div>
    )
}

export default OrdinateursCategorieComp
