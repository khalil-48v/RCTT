import React from "react";

function ArticleComp(props) {
  const { code, nom, categorie, prixU } = props.donnees;
  return (
    <p className="border border-2 bg-info my-4">
      code:{code}
      <br></br>
      nom:{nom}
      <br></br>
      categorie:{categorie}
      <br></br>
      prix:{prixU}
      <br></br>
    </p>
  );
}

export default ArticleComp;
