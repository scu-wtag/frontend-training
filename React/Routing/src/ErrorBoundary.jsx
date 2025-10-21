import { Link } from "react-router-dom";
import "./App.css";

function ErrorBoundary() {
    return (
        <div>
            <h1>Sorry, I cannot find the page you are looking for</h1>
            <Link to="/">
                <button>Go back Home</button>
            </Link>
        </div>
    );
}

export default ErrorBoundary;