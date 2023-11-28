import homeIcon from '../icons/Home.svg';
import hamburgerIcon from '../icons/Group 1.svg';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-home-con">
        <h3 className="rent-it">Rent<span className="it">It</span></h3>
        <img src={homeIcon} alt="home" className="home-icon" />
      </div>
      <img src={hamburgerIcon} alt="hamburger" className="hamburger-icon" />
    </div>
  );
}

export default NavBar;