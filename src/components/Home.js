import priceIcon from '../icons/entypo_price-tag.svg';
import locationIcon from '../icons/ep_location.svg';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import trusted1 from '../icons/image 3.svg';
import trusted2 from '../icons/image 5.svg';
import trusted3 from '../icons/image 9.svg';
import trusted4 from '../icons/image 13.svg';
import trusted5 from '../icons/image 15.svg';
import verifiedIcon from '../icons/verified-icon.svg';
import bathroomIcon from '../icons/bathroom-icon.svg';
import bedroomIcon from '../icons/bedroom-icon.svg';
import arrowIcon from '../icons/ci_chevron-duo-right.svg';
import dotedMap from '../images/doted map.jpg';
import mapImage from '../images/map-image.png';
import danfoImage from '../images/danfo-image.png';
import dotedMapIcon from '../icons/map_location.svg';
import footerHomeIcon from '../icons/home-icon.svg';
import facebookLogo from '../icons/facebook.svg';
import instagramLogo from '../icons/instagram.svg';
import linInLogo from '../icons/linkedin.svg';



const Home = () => {
  return (
    <div className="home">
      <div className="section-1">
        <h1 className="heading">Discover Your Next Home:</h1>
        <p className="welcome">Welcome to our apartment rental website!
          We are dedicated to helping you find the
          perfect place to call home. Our selection
          of properties includes a wide range
          of options to suit every need and budget.
        </p>
        <form className="price-location-form">
          <div>
            <img src={priceIcon} alt="price" className="price-icon" />
            <p className="price-label">Price Range</p>
          </div>
          <select value="" className="select-price">
            <option name="" id="" className="price-placeholder">Select Price Range</option>
          </select>
          <div>
            <img src={locationIcon} alt="price" className="price-icon" />
            <p className="price-label">Location</p>
          </div>
          <select value="" className="select-location">
            <option name="" id="" className="price-placeholder">Search Location</option>
          </select>
        </form>
        <img src={image1} alt="house" className="image1" />
      </div>

      <div className="section-2">
        <h4 className="trusted">Trusted by:</h4>
        <div className="trusted-logos">
          <img src={trusted1} alt="trusted" />
          <img src={trusted2} alt="trusted" />
          <img src={trusted3} alt="trusted" />
          <img src={trusted4} alt="trusted" />
          <img src={trusted5} alt="trusted" />
        </div>
      </div>

      <div className="section-3">
        <h4 className="explore">EXPLORE OUR PLATFORM</h4>
        <h2 className="works">How it works</h2>
        <p className="welcome">Welcome to our apartment rental website!
          We are dedicated to helping you find the
          perfect place to call home. Our selection
          of properties includes a wide range
          of options to suit every need and budget.
        </p>
        <img src={image2} alt="house" className="image2" />
        <div className="numbered-con">
          <div className="number1">
            <p className="number">1.</p>
            <p className='number-detail'>Search for property</p>
          </div>
          <div className="number1">
            <p className="number">2.</p>
            <p className='number-detail'>Select Wanted Apartment</p>
          </div>
          <div className="number1">
            <p className="number">3.</p>
            <p className='number-detail'>Schedule A Tour</p>
          </div>
          <div className="number1">
            <p className="number">4.</p>
            <p className='number-detail'>Book Your Apartment</p>
          </div>
        </div>
      </div>

      <div className="section-4">
        <h3 className="featured">FEATURED PROPERTIES</h3>
        <h2 className="provide">We provide you</h2>
        <h2 className="affordable">Affordable Living In The Heart of the Country</h2>
        <div className="houses-apart-land">
          <p className="houses">Houses</p>
          <p className="apart">Apartment</p>
          <p className="land">Land</p>
        </div>
      </div>

      <div className="section-5">
        <div className="verified-section">
          <h4 className="friendly">Family Pet Friendly</h4>
          <img src={image3} alt="" className="image3" />
          <div className="verified-sub-section">
            <div className="verified-con">
              <p className="verified">Verified</p>
              <img src={verifiedIcon} alt="" className="verify-icon" />
            </div>
            <h3 className="verified-info">#25, Somewhere in Lagos Avenue. Lagos Island.</h3>
            <div className="bathroom-bedroom">
              <img src={bathroomIcon} alt="" className="bathroom-icon" />
              <p className="bathroom">2 Bathroom</p>
              <img src={bedroomIcon} alt="" className="bathroom-icon" />
              <p className="bedroom">2 Bedroom</p>
            </div>
            <h2 className="price">N50,732,234.00</h2>
          </div>
        </div>
        <p className="welcome-left">Welcome to our apartment rental website!
          We are dedicated to helping you find the
          perfect place to call home. Our selection
          of properties includes a wide range
          of options to suit every need and budget.
        </p>
        <div className='arrow-section'>
          <img src={image4} alt="house" className="image4" />
          <img src={arrowIcon} alt="house" className="arrow-icon" />
        </div>
      </div>

      <div className="section-6">
        <div className="coming-soon-section">
          <p className="coming-soon">Coming soon</p>
          <p className="now-available">This features is now available on beta testing</p>
        </div>
        <p className="welcome-center">Welcome to our apartment rental website!
          We are dedicated to helping you find the
          perfect place to call home. Our selection
          of properties includes a wide range
          of options to suit every need and budget.
        </p>
      </div>

      <div className="section-7">
        <div className="doted-map-section">
          <img src={dotedMap} alt="" className="doted-map" />
          <div className="map-content1">
            <img src={mapImage} alt="" />
            <h6 className="map-price">N50,732,234.00</h6>
          </div>
          <div className="map-content2">
            <img src={danfoImage} alt="" />
            <h6 className="map-price">N50,732,234.00</h6>
            <div className="address">
              <img src={dotedMapIcon} alt="" />
              <p className='map-address'>8 Soundcity, Lekki, Lagos Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-8">
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
    </div>
  );
}

export default Home;