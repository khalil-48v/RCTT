import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../store";

function SupprimerProduitRedux() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  function handelChange(e) {
    setCode(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const p = {
      code: code,
    };
    const rep = window.confirm("Supprimer ce produit ?");
    if (rep) {
      store.dispatch({
        type: "DELETE_PRODUCT",
        payload: p,
      });
      navigate("/catalogue");
    }
  }

  return (
    <>
      <h1>Supprimer un produit</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">Code:</label>
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => handelChange(e)}
          />
        </div>

        <input type="submit" value="Supprimer produit" />
      </form>
      <div></div>
    </>
  );
}

export default SupprimerProduitRedux;
