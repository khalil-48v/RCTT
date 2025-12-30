import { crateStore } from "redux";
const initialState = [];
function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
        const newState = [...state];
        newState.push(action.payload);
        return newState;
    case "DELETE_PRODUCT":
        const copyState = [...state];
        const deleted_state = copyState.filter(
            (prd) => prd.id.code.tolowerCase() !== action.payload.code.tolowerCase()
        );

      return deleted_state;
    case "UPDATE_PRODUCT":
        const copy_updated_State = [...state];
        let produitAModifier =   state.find( (p)=>p.code.toLowerCase() ===action.payload.code.toLowerCase() );

    produitAModifier.code=action.payload.code ;
    produitAModifier.nom=action.payload.nom ;
    produitAModifier.categorie =action.payload.categorie ;
    produitAModifier.prixU = action.payload.prixU;
    return copy_updated_State;

    case "GET_PRODUCT_BY_ID":
      return state
    default:
      return state;
  }
}
export const store = crateStore(ProductReducer);
console.log(store.getState());
store.subscribe(function(){
    console.log( store.getState());
})
const action1 ={
    type: "ADD_PRODUCT",
    payload: {code: "P001", nom: "Produit 1", categorie: "Cat1", prixU: 100}

}
store.dispatch(action1);