import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {DataContext} from "../App";

function ModifierProduit() {
  const [produit, setProduit] = useState({code: "", nom: "", categorie: "", prixU: ""});

  const [isEdit, setIsEdit] = useState(false);

  const dataContext = useContext(DataContext);
  const updateProduit = dataContext.fctUpdPrd;
  const rechercheProduit = dataContext.fctSearchCode;
  const navigate = useNavigate()

  function handelChange(e) {
    setProduit({...produit, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const unProduit = produit;
    if (isEdit === false) {
      const prdTrouve = rechercheProduit(produit.code);
      if (prdTrouve !== undefined) {
        setProduit(prdTrouve);
        setIsEdit(true);

      } else {
        alert("aucun produit");
        // setProduit({ ...ModifierProduit, code: "" });
        return;
      }
    } else {
      // alert("iukhkh");

      updateProduit(produit);
      setProduit({code: "", nom: "", categorie: "", prixU: ""});
      setIsEdit(false);
      navigate('/catalogue')
    }
  }
  // function handleRecherche(e) {
  //   e.preventDefault();
  //   // const unProduit = produit;
  //   rechercheProduit(produit.code);
  // }

  return (
    <>
      <h1>Modifier un produit</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">Code:</label>
          <input type="text" name="code" value={produit.code} onChange={(e) => handelChange(e)} />
        </div>
        <div>
          <label htmlFor="">Nom:</label>
          <input type="text" name="nom" value={produit.nom} onChange={(e) => handelChange(e)} />
        </div>
        <div>
          <label htmlFor="">Categorie:</label>
          {/* <input type="text" value={produit.categorie} onChange={(e) => this.handelChange(e)} /> */}
          <select name="categorie" id="" onChange={(e) => handelChange(e)}>
            <option value="sport">Sport</option>
            <option value="ordinateur">Ordinateur</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Prix Unitaire:</label>
          <input type="text" name="prixU" value={produit.prixU} onChange={(e) => handelChange(e)} />
        </div>
        <input type="submit" value={isEdit === false ? "Rechercher le produit" : "Modifier le produit"} />
      </form>
      <div></div>
    </>
  );
}

export default ModifierProduit;
