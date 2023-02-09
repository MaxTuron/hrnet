import { Link } from "react-router-dom";
import "../styles/header.css"
export default function Header({title, children}) {
    const url = window.location.href;
    return (
    <nav className="main-nav">
        <div className="header">
            <h1>HRnet</h1>
            {url === "http://localhost:3000/" ? 
            <div className="block">
                <Link  to="employeelist">{title}</Link>
                <h2>{children}</h2>
            </div>
             :
            <div className="block">
                <Link to="/">{title}</Link>
                <h2>{children}</h2>
            </div>
            }
        </div>
    </nav>
    );
  }