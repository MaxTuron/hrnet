import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {userFirstName, userLastName, userDateOfBirth, userStartDate, userStreet, userCity, userState, userZipCode, userDepartment } from "../store"
import states from "../utils/state"
import "../styles/main.css"

export default function Accueil() {
    const dispatch = useDispatch();

    const [users, setUsers] = useState([]);

    const [values, setValues] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(userFirstName(values.firstName))
        dispatch(userLastName(values.lastName))
        dispatch(userDateOfBirth(values.dateOfBirth))
        dispatch(userStartDate(values.dateOfBirth))
        dispatch(userStreet(values.street))
        dispatch(userCity(values.city))
        dispatch(userState(values.state))
        dispatch(userZipCode(values.zipCode))
        dispatch(userDepartment(values.department))
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

        <form action="#" onSubmit={handleSubmit} id="create-employee">

            <label htmlFor="first-name">First Name</label>
            <input type="text" name='firstName' id="firstname" onChange={handleChange}/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='lastName' id="lastname" onChange={handleChange}/>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input type="text" name='dateOfBirth' id="dateOfBirth" onChange={handleChange}/>

            <label htmlFor="start-date">Start Date</label>
            <input type="text" name='startDate' id="startDate" onChange={handleChange}/>

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
    </div>
    <div id="confirmation" className="modal">Employee Created!</div>
</div>
  );
}