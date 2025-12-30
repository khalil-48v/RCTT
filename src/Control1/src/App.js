import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {useContext, useState, createContext} from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import CatalogueComp from './components/CatalogueComp';
import ModifierProduit from './components/ModifierProduit'
import SupprimerProduit from './components/SupprimerProduit';
import OrdinateursCategorieCom from './components/OrdinateursCategorieComp'
import AjouterProduit from './components/AjouterProduit';
import Categories from './components/Categories';
import SearchCategorie from './SearchCategorie';
import AddCategorie from './components/AddCategorie';
import DelCategorie from './components/DelCategorie';
import AjouterProduitRedux from './components/AjouterProduitRedux';
import CatalogueCompRedux from './components/CatalogueCompRedux';
import SupprimerProduitRedux from './components/SupprimerProduitRedux';
import ModifierProduitRedux from './components/ModifierProduitRedux';

export const DataContext = createContext(null);

function App() {

    const catalogue = [
        {code: 'D300', nom: 'DellInspiron300', categorie: 'Ordinateur', prixU: 11000},
        {code: 'BA25', nom: 'BallonAdidas25ml', categorie: 'Sport', prixU: 600},
        {code: 'RQT', nom: 'Raquette', categorie: 'Sport', prixU: 260},
    ]
    // const obj0 = {code: 'RQT', nom: 'Raquette', categorie: 'Sport', prixU: 260};
    const [categorie, setCategorie] = useState();
    const [codeRech, setCodeRech] = useState('');
    const [resultat, setResultat] = useState(catalogue)
    const [produit, setProduit] = useState(undefined)
    //Les Actions sur catalogue
    //rechercher par categorie (filtrer par categorie)
    function rechercheparCategorie(cat) {
        if (cat === "") {
            setResultat(catalogue)

        } else {
            setCategorie(cat)
            const prdsCat = catalogue.filter((prd) => prd.categorie.toLowerCase() === cat.toLowerCase())
            setResultat(prdsCat)
        }
    }

    function rechercheparCode(code) {
        if (code === "") {
            return;

        } else {
            setCodeRech(code)
            const prdAchercher = catalogue.find((prd) => prd.code.toLowerCase() === code.toLowerCase())

            setProduit(prdAchercher)
            return prdAchercher
        }
    }

    //Ajouter un produit
    function addProduct(prd) {
        catalogue.unshift(prd)
        setResultat(catalogue)
    }

    //Supprimer un produit
    function supprimerProduit(code) {
        alert(code);
        const prdsFltres = catalogue.filter((prd) => prd.code.toLowerCase() !== code.toLowerCase())
        setResultat(prdsFltres)

    }

    //Modifier un produit
    function updateProduit(prd) {
        let produitAModifier = catalogue.find((p) => p.code.toLowerCase() === prd.code.toLowerCase());

        produitAModifier.code = prd.code;
        produitAModifier.nom = prd.nom;
        produitAModifier.categorie = prd.categorie;
        produitAModifier.prixU = prd.prixU;

        setResultat(catalogue)
    }

    const data = {
        cata: resultat,
        fctAddPrd: addProduct,
        fctUpdPrd:updateProduit,
        fctSearchCode:rechercheparCode,
        fctDelPrd:supprimerProduit,
        fonctRech:rechercheparCategorie
    }

    //
    return (
        <DataContext.Provider value={data}>

            <div className="App">
                <header className="App-header">
                    <h1>Gestion Produits</h1>
                    <ul className='row'>
                        <li className='col'><Link to='/'> Accueil </Link></li>
                        <li className='col'><Link to='/catalogue'> Produits </Link></li>
                        <li className='col'><Link to='/add'> Ajouter Produit </Link></li>
                        <li className='col'><Link to='/update'> Modifier produit </Link></li>
                        <li className='col'><Link to='/delete'> supprimer produit </Link></li>
                        <li className='col'><Link to='/find'> recherche </Link></li>

                        <li className='col'><Link to='/categories'> CATEGORIES </Link></li>
                    </ul>
                </header>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/catalogue' element={<CatalogueCompRedux />}/>
                    <Route path='/add' element={<AjouterProduitRedux />}/>
                    <Route path='/update'
                           element={<ModifierProduitRedux />}/>
                    <Route path='/delete' element={<SupprimerProduitRedux />}/>
                    <Route path='/find' element={<OrdinateursCategorieCom />}/>

                    {/* routes imbriquées */}

                    <Route path='/categories' element={<Categories/>}>
                        <Route path='rechercheCat' element={<SearchCategorie/>}/>
                        <Route path='addCat' element={<AddCategorie/>}/>
                        <Route path='delCat' element={<DelCategorie/>}/>
                    </Route>


                </Routes>

            </div>
        </DataContext.Provider>
    );
}

export default App;
