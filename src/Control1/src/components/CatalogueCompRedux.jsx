import React from "react";
import ArticleComp from "./ArticleComp";
import { store } from "../store";


function CatalogueCompRedux() {
  const tab = store.getState();
  return (
    <div>
      <h1>CATALOGUE DES PRODUITS:</h1>

      {tab.map((prod, index) => (
        <ArticleComp key={index} donnees={prod} />
      ))}
    </div>
  );
}

export default CatalogueCompRedux;
