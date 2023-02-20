import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal} from "modaleplugin"
import Header from "../components/header"
import {userArr } from "../store"
import {states, departements} from "../utils/state"
import "../styles/main.css"
import Select from 'react-select';

export default function Accueil() {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState({ userFirstName: "", userLastName: "", userDateOfBirth: "", userStartDate: "", userStreet: "", userCity: "",  userState: "", userZipCode: "", userDepartment: "" });
    
    const handleSubmit = async e => {
      console.log(e)
      console.log(user)
      e.preventDefault();
        if(user.userFirstName === "" || user.userLastName === "" || user.userDateOfBirth === "" || user.userStartDate === "" || user.userStreet === "" || user.userCity === "" || user.userState === "" || user.userZipCode === "" || user.userDepartment === ""){
          alert("Veuillez remplir tous les champs")
          console.log(user)
        }else{
          setOpenModal(true)
          dispatch(userArr(user))
        }
      }
      
  return (
    <div className='userForm'>
      <Header/>
      <h2>Create employee</h2>
      <div>
        <form onSubmit={handleSubmit} id="create-employee">

            <label htmlFor="firstname">First Name</label>
            <input type="text" name='firstName' id="firstname" value={user.userFirstName} onChange={(e) => setUser(currValue => ({ ...currValue, userFirstName: e.target.value }))}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name='lastName' id="lastname" value={user.userLastName} onChange={(e) => setUser(currValue => ({ ...currValue, userLastName: e.target.value }))}/>

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" name='dateOfBirth' id="dateOfBirth" value={user.userDateOfBirth} onChange={(e) => setUser(currValue => ({ ...currValue, userDateOfBirth: e.target.value }))}/>

            <label htmlFor="startDate">Start Date</label>
            <input type="date" name='startDate' id="startDate" value={user.userStartDate} onChange={(e) => setUser(currValue => ({ ...currValue, userStartDate: e.target.value }))}/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" name='street' type="text" value={user.userStreet} onChange={(e) => setUser(currValue => ({ ...currValue, userStreet: e.target.value }))}/>

                <label htmlFor="city">City</label>
                <input id="city" name='city' type="text" value={user.userCity} onChange={(e) => setUser(currValue => ({ ...currValue, userCity: e.target.value }))}/>

                <label htmlFor="state">State</label>
                <Select inputId="state" getOptionValue={(option) => option.label} onChange={(e) => setUser(currValue => ({ ...currValue, userState: e.abbreviation }))} options={states} type="text" name='state'  />
                
                <label htmlFor="zipCode">Zip Code</label>
                <input className='paddingZip' min="0" id="zipCode" name='zipCode' type="number" value={user.userZipCode} onChange={(e) => setUser(currValue => ({ ...currValue, userZipCode: e.target.value }))}/>
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select getOptionValue={(option) => option.label} onChange={(e) => setUser(currValue => ({ ...currValue, userDepartment: e.label }))} options={departements} type="text" name='department' inputId="department" />
            <button className="field btn" type="submit">Save</button>
  
        </form>
        {openModal && <Modal closeModal={setOpenModal}>User succesfully created!</Modal>}
    </div>
</div>
  );
}