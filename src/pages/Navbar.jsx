import { Link } from "react-router-dom";

function Routesnav() {
  return (
    <div className="nav-links">
      <Link to="/">Login</Link>

      <Link to="/list">list</Link>

      <Link to="/details">detais</Link>

      <Link to="/analytics">analytics</Link>
    </div>
  );
}

export default Routesnav;
