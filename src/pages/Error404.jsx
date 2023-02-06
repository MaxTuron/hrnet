import { Link } from "react-router-dom";
import "../styles/error.css"

export default function Error() {
    return (
        <div>
            <main className="errorPage font-link">
                <div>
                    <p className="code404">404</p>
                    <p className="errorText">The requested user does not exist.</p>
                </div>
                <div>
                    <Link className="indexRedirect" to="/">Back to home page</Link>
                </div>
            </main>
        </div>
    )
}
