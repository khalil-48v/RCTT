import React, { useState } from "react";

function RechercheBarre(props) {
  const [texteRecherche, setTexteRecherche] = useState("");

  const maFonction = props.fctRech;

  function Rechercher(typeRech) {
    // const tabRes = list.filter((elm) => elm.type === typeRech);
    setTexteRecherche(typeRech);
    maFonction(typeRech);
  }
  function handleChange(e) {
    setTexteRecherche(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    Rechercher(texteRecherche);
  }
  return (
    <div style={{ border: "2px solid Green", backgroundColor: "greenyellow" }}>
      <h1>Composant ChercheBar</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Entrer le mot clé de recherche:</label>
        <input type="text" id="inpCh" value={texteRecherche} onChange={handleChange} />

        <input type="submit" value="Chercher" />
      </form>
      {/* <ResultatList listeR={}/> */}
    </div>
  );
}

export default RechercheBarre;
