import logo from './logo.svg';
import './App.css';
import Composant1 from './Composant1';
import {createContext} from 'react';

const name = "IDRISSI";
const style1 = {
  color: "white",
  backgroundColor: "Magenta"
}
const test = () => {
  return "bonjour"
}
export const NameContext = createContext(null);
function App() {

  return (
    <NameContext.Provider value={
      {nom: name, unStyle: style1, fonct: test}
    }>

      <div className="App" style={{backgroundColor: "DodgerBlue", border: "2px solid red", width: "75%", padding: "15px", margin: "auto"}}>
        <header className="App-header">
          <p>
            utilisation du hook context (useContext)
          </p>

        </header>
        <h1>Nom: {name}</h1>
        <Composant1 />

      </div>

    </NameContext.Provider>

  );
}

export default App;
