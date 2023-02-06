import "../styles/main.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export default function Accueil() {
  const userArr = useSelector(state => state.userArr.userArr)
  console.log(userArr)
  return (
    <div>
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div>{userArr.map(user => <p key={user.firstName}>{user.userFirstName} {user.userLastName} {user.userDateOfBirth} {user.userStartDate} {user.userStreet} {user.userCity} {user.userState} {user.userZipCode} {user.userDepartment}</p>)}</div>
            <table id="employee-table" className="display"></table>
            <Link className="indexRedirect" to="/">Home</Link>
        </div>
    </div>
  );
}