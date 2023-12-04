import homeIcon from '../icons/Home.svg';
import hamburgerIcon from '../icons/Group 1.svg';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-home-con">
        <h3 className="rent-it">Rent<span className="it">It</span></h3>
        <img src={homeIcon} alt="home" className="home-icon" />
      </div>
      <div className="navbar-pages">
        <img src={hamburgerIcon} alt="hamburger" className="hamburger-icon" />
        <ul className="pages">
          <li className="blog">Blog</li>
          <li className="listings">Listings</li>
          <li className="login">Log in</li>
          <li className="posting">Make a posting</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;