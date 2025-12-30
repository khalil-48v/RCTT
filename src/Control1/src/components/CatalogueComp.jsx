import React, {useContext} from "react";
import ArticleComp from "./ArticleComp";
import {DataContext} from "../App";


function CatalogueComp() {
  const dataContext = useContext(DataContext);
  const tab = dataContext.cata;
  return (
    <div>
      <h1>CATALOGUE DES PRODUITS:</h1>

      {tab.map((prod, index) => (
        <ArticleComp key={index} donnees={prod} />
      ))}
    </div>
  );
}

export default CatalogueComp;
