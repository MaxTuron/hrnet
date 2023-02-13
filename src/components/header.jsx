import { Link } from "react-router-dom";
import "../styles/header.css"
export default function Header() {
    return (
    <nav className="main-nav">
        <div className="header">
            <h1>HRnet</h1>
            <div className="block">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/employeelist">View employee list</Link>
            </div>          
        </div>
    </nav>
    );
  }