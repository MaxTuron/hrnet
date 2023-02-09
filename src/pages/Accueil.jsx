import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from "../components/modal"
import {userArr } from "../store"
import {states, departements} from "../utils/state"
import "../styles/main.css"
import Select from 'react-select';

export default function Accueil() {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({ userFirstName: "", userLastName: "", userDateOfBirth: "", userStartDate: "", userStreet: "", userCity: "",  userState: "", userZipCode: "", userDepartment: "" });
    
    const handleSubmit = async e => {
        e.preventDefault();
          if(user.userFirstName === undefined || user.userLastName === undefined || user.userDateOfBirth === undefined || user.userStartDate === undefined || user.userStreet === undefined || user.userCity === undefined || user.userState === undefined || user.userZipCode === undefined || user.userDepartment === undefined){
          alert("Veuillez remplir tous les champs")
          console.log(user)
        }else{
          setOpenModal(true)
          dispatch(userArr(user))
        }
      }
      
  return (
    <div>
    <div className="title">
        <h1>HRnet</h1>
    </div>
    <div className="container">
        <Link className="employeelistRedirect" to="employeelist">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit} id="create-employee">

            <label htmlFor="first-name">First Name</label>
            <input type="text" name='firstName' id="firstname" value={user.userFirstName} onChange={(e) => setUser(currValue => ({ ...currValue, userFirstName: e.target.value }))}/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='lastName' id="lastname" value={user.userLastName} onChange={(e) => setUser(currValue => ({ ...currValue, userLastName: e.target.value }))}/>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="date" name='dateOfBirth' id="dateOfBirth" value={user.userDateOfBirth} onChange={(e) => setUser(currValue => ({ ...currValue, userDateOfBirth: e.target.value }))}/>

            <label htmlFor="start-date">Start Date</label>
            <input type="date" name='startDate' id="startDate" value={user.userStartDate} onChange={(e) => setUser(currValue => ({ ...currValue, userStartDate: e.target.value }))}/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" name='street' type="text" value={user.userStreet} onChange={(e) => setUser(currValue => ({ ...currValue, userStreet: e.target.value }))}/>

                <label htmlFor="city">City</label>
                <input id="city" name='city' type="text" value={user.userCity} onChange={(e) => setUser(currValue => ({ ...currValue, userCity: e.target.value }))}/>

                <label htmlFor="state">State</label>
                <Select onChange={(e) => setUser(currValue => ({ ...currValue, userState: e.abbreviation }))} options={states} type="text" name='state' id="state" />
                <label htmlFor="zip-code">Zip Code</label>
                <input id="zipCode" name='zipCode' type="number" value={user.userZipCode} onChange={(e) => setUser(currValue => ({ ...currValue, userZipCode: e.target.value }))}/>
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select onChange={(e) => setUser(currValue => ({ ...currValue, userDepartment: e.label }))} options={departements} type="text" name='department' id="department" />
            <button type="submit">Save</button>
  
        </form>
        {openModal && <Modal closeModal={setOpenModal}><p>User succesfully created!</p></Modal>}
    </div>
</div>
  );
}