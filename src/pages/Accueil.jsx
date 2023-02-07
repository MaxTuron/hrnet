import { Link } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from "../components/modal"
import {userArr } from "../store"
import states from "../utils/state"
import "../styles/main.css"

export default function Accueil() {
    const dispatch = useDispatch();
    let user = {}
    const [openModal, setOpenModal] = useState(false);
    const [values, setValues] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        user = {userFirstName : values.firstName, userLastName: values.lastName, userDateOfBirth: values.dateOfBirth, userStartDate: values.startDate, userStreet: values.street, userCity: values.city, userState: values.state, userZipCode: values.zipCode, userDepartment: values.department}
        if(user.userFirstName === undefined || user.userLastName === undefined || user.userDateOfBirth === undefined || user.userStartDate === undefined || user.userStreet === undefined || user.userCity === undefined || user.userState === undefined || user.userZipCode === undefined || user.userDepartment === undefined){
          alert("Veuillez remplir tous les champs")
          console.log(user)
        }else{
          setOpenModal(true)
          dispatch(userArr(user))
        }
        
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

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
            <input type="text" name='firstName' id="firstname" onChange={handleChange}/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='lastName' id="lastname" onChange={handleChange}/>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="date" name='dateOfBirth' id="dateOfBirth" onChange={handleChange}/>

            <label htmlFor="start-date">Start Date</label>
            <input type="date" name='startDate' id="startDate" onChange={handleChange}/>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" name='street' type="text" onChange={handleChange}/>

                <label htmlFor="city">City</label>
                <input id="city" name='city' type="text" onChange={handleChange}/>

                <label htmlFor="state">State</label>
                <select onChange={handleChange} id="state" name="state" type="text">
                    {states.map(state =>
                    <option key={state.abbreviation} value={state.abbreviation}>{state.name}, {state.abbreviation}</option>
                    )};
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zipCode" name='zipCode' type="number" onChange={handleChange}/>
            </fieldset>

            <label htmlFor="department">Department</label>
            <select onChange={handleChange} type="text" name='department' id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            <button type="submit">Save</button>
           
        </form>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
</div>
  );
}