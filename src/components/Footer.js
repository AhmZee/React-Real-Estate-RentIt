import footerHomeIcon from '../icons/home-icon.svg';
import facebookLogo from '../icons/facebook.svg';
import instagramLogo from '../icons/instagram.svg';
import linInLogo from '../icons/linkedin.svg';

const Footer = () => {
  return ( 
    <div className="footer">
        <div className="sub-section">
          <div className="footer-home-con">
            <h3 className="footer-rent-it">Rent<span className="footer-it">It</span></h3>
            <img src={footerHomeIcon} alt="home" className="footer-home-icon" />
          </div>
          <div className="email-contact">
            <p className="email">info@rentit.com</p>
            <p className="contact">+234(0) 805555 555</p>
          </div>

          <div className="buy">
            <p className='buy-heading'>Buy Rent & Sell</p>
            <p>Buy, Sell & Properties</p>
            <p>Rent home</p>
            <p>Finance</p>
          </div>
          <div className="about">
            <p className='about-heading'>About</p>
            <p>How it works</p>
            <p>Contact</p>
            <p>Company</p>
          </div>
          <div className="terms">
            <p className='terms-heading'>Terms & Privacy</p>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Trust & Security</p>
          </div>
          <div className="resources">
            <p className='resources-heading'>Resources</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Guides</p>
          </div>
        </div>
        <p className="copyright">© 2023 RentIt. All Rights Reserved</p>
        <div className="social">
          <img src={facebookLogo} alt="" className="facebook-logo" />
          <img src={instagramLogo} alt="" className="instagram-logo" />
          <img src={linInLogo} alt="" className="linkin-logo" />
        </div>
      </div>
   );
}
 
export default Footer;