import React from "react";

function ResultatList(props) {
  const list = props.listRes;
  return (
    <div style={{ backgroundColor: "goldenrod", border: "2px solid blue", marginTop: "5px" }}>
      <h1>Composant resultats</h1>
      <ul>
        {list.map(function (obj, index) {
          return <li key={index}> {obj.nom} </li>;
        })}
      </ul>
    </div>
  );
}

export default ResultatList;
