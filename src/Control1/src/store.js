import { createStore } from "redux";

const initialState = [
  { code: "D300",nom: "DellInspiron300", categorie: "Ordinateur",  prixU: 11000},
  { code: "BA25", nom: "BallonAdidas25ml", categorie: "Sport", prixU: 600 },
  { code: "RQT", nom: "Raquette", categorie: "Sport", prixU: 260 },
];

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const new_state =  [...state];
      new_state.push(action.payload);
      return new_state;

    case "DELETE_PRODUCT":
      const copy_state = [...state];
      const deleted_state = copy_state.filter(
        (prd) => prd.code.toLowerCase() !== action.payload.code.toLowerCase()
      );
      return deleted_state;

    case "UPDDATE_PRODUCT":
      const copy_upddated_state = [...state];
      let produitAModifier = copy_upddated_state.find(
        (p) => p.code.toLowerCase() === action.payload.code.toLowerCase()
      );

      // produitAModifier.code = action.payload.code;
      produitAModifier.nom = action.payload.nom;
      produitAModifier.categorie = action.payload.categorie;
      produitAModifier.prixU = action.payload.prixU;

      return copy_upddated_state;

    case "GET_PRODUCT_BY_CATEGORY":
      return state;

    default:
      return state;
  }
}

export const store = createStore(ProductReducer);

console.log(store.getState());

store.subscribe(function(){
    console.log(store.getState());
})

const action1 = {
    type: "ADD_PRODUCT",
    payload : { code: "AB555", nom: "ProduitAB555", categorie: "Sport", prixU: 999 },
}
store.dispatch(action1);
// console.log(store.getState());