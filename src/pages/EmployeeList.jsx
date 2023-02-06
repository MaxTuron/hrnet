import "../styles/main.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function Accueil() {
  const firstName = useSelector(state => state.firstName.firstName)
  const lastName = useSelector(state => state.lastName.lastName)
  const dateOfBirth = useSelector(state => state.dateOfBirth.dateOfBirth)
  const startDate = useSelector(state => state.startDate.startDate)
  const street = useSelector(state => state.street.street)
  const city = useSelector(state => state.city.city)
  const state = useSelector(state => state.state.state)
  const zipCode = useSelector(state => state.zipCode.zipCode)
  const department = useSelector(state => state.department.department)
  return (
    <div>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <p>{firstName} {lastName} {dateOfBirth} {startDate} {street} {city} {state} {zipCode} {department}</p>
            <table id="employee-table" className="display"></table>
            <Link className="indexRedirect" to="/">Home</Link>
        </div>
    </div>
  );
}