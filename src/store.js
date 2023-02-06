import { configureStore, combineReducers  } from "@reduxjs/toolkit";

//Creation du state de base
const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
    isModalOpen : false,
};

//Définition des actions
export const userFirstName = (firstName) => ({ 
    type: 'firstName',
    payload: {firstName: firstName},
});
export const userLastName = (lastName) => ({ 
    type: 'lastName',
    payload: {lastName: lastName},
});
export const userDateOfBirth = (dateOfBirth) => ({
    type: "dateOfBirth",
    payload: { dateOfBirth: dateOfBirth },
  });
export const userStartDate = (startDate) => ({
    type: "startDate",
    payload: { startDate: startDate },
  });
export const userStreet = (street) => ({
    type: "street",
    payload: { street: street },
  });
export const userCity = (city) => ({
    type: "city",
    payload: { city: city },
  });
export const userState = (state) => ({
    type: "state",
    payload: { state: state },
  });
export const userZipCode = (zipCode) => ({
    type: "zipCode",
    payload: { zipCode: zipCode },
  });
export const userDepartment = (department) => ({
    type: "department",
    payload: { department: department },
  });


//Définition des reducers
function firstName_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "firstName") {
        return {
            firstName: res.firstName
        };
    } 
    return state;
}

function lastName_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "lastName") {
        return {
            lastName: res.lastName
        };
    } 
    return state;
}

function dateOfBirth_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "dateOfBirth") {
        return {
            dateOfBirth: res.dateOfBirth
        };
    } 
    return state;
}

function startDate_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "startDate") {
        return {
            startDate: res.startDate
        };
    } 
    return state;
}

function street_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "street") {
        return {
            street: res.street
        };
    } 
    return state;
}

function city_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "city") {
        return {
            city: res.city
        };
    } 
    return state;
}

function state_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "state") {
        return {
            state: res.state
        };
    } 
    return state;
}

function zipCode_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "zipCode") {
        return {
            zipCode: res.zipCode
        };
    } 
    return state;
}

function department_reducer(state = initialState, action) {
    let res = action.payload
    if (action.type === "department") {
        return {
            department: res.department
        };
    } 
    return state;
}


const reducer = combineReducers({
    firstName: firstName_reducer,
    lastName: lastName_reducer,
    dateOfBirth: dateOfBirth_reducer,
    startDate: startDate_reducer,
    street: street_reducer,
    city: city_reducer,
    state: state_reducer,
    zipCode: zipCode_reducer,
    department: department_reducer,
    });

//Export du store
export const store = configureStore({
    reducer : reducer
  })
