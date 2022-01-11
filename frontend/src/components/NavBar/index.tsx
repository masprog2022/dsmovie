import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';


function NavBar() {
  return (
  <header>
  <nav className="container">
      <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/masprog2022" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                  <GithubIcon  />
                  <p className="dsmovie-contact-link">/masprog2022</p>
              </div>
          </a>
      </div>
  </nav>
</header>
);
}

export default NavBar;