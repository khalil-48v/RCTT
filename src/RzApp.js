
import RechercheBarre from './comp/RecherchRz';
import ResultatList from './comp/RzResultat';
import { useState } from 'react';

function App() {
const [type, setType]=useState();
const [resultat, setResultat] = useState([]);
  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];
//fonction à passer au fils
 function RechercherApp(typeRech) {
  setType(typeRech)
    const tabRes = list.filter((elm) => elm.type === typeRech);
    setResultat(tabRes);
  }

//
  return (
    <div style={{backgroundColor:"green"}}>
    <h1>Composant App</h1>
    <RechercheBarre fctRech ={RechercherApp} att="unechaine"/>
   <div style={{backgroundColor:'cyan', border:'2px solid blue', marginTop:'5px', }}>
     le type: <label >{type}</label>
   </div>
    <ResultatList listRes={resultat}/>
    </div>
  );
}

export default App;
