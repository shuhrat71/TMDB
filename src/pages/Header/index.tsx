import logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="header-logo">
              <img src={logo} alt="" />
              <div className="header_link">
                <ul>
                  <li>
                    <a href="">Movies</a>
                  </li>
                  <li>
                    <a href="">TV Shows</a>
                  </li>
                  <li>
                    <a href="">People</a>
                  </li>
                  <li>
                    <a href="">More</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-primary">
              <ul>
                <li>
                  <a href="">+</a>
                </li>
                <button>EN</button>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Join TMDB</a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon
                      className="search-icon"
                      icon={faMagnifyingGlass}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
