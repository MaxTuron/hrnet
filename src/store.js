import { configureStore, combineReducers  } from "@reduxjs/toolkit";

//Creation du state de base
const initialState = {
    userArr : []
};

//Définition des actions
export const userArr = (userArr) => ({
    type: "userArr",
    payload: { userArr: userArr },
  });


//Définition des reducers

function userArr_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "userArr") {
        return {
            ...state,
            userArr: [...state.userArr, res.userArr]
        };
    } 
    return state;
}


const reducer = combineReducers({
    userArr: userArr_reducer
    });

//Export du store
export const store = configureStore({
    reducer : reducer
  })
