import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <ul className="Nav__item-wrapper">
          <li className="Nav__item">
            <Link className="Nav__link" to="/">
              About
            </Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/catalogue">
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
