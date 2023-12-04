import priceIcon from '../icons/entypo_price-tag.svg';
import locationIcon from '../icons/ep_location.svg';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3M from '../images/image3.png';
import image3D from '../images/image-3.png';
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
import dotedMapM from '../images/doted map.jpg';
import dotedMapD from '../images/doted map D.jpg';
import mapImage from '../images/map-image.png';
import danfoImage from '../images/danfo-image.png';
import dotedMapIcon from '../icons/map_location.svg';
import React, { useState, useEffect } from 'react';

const Home = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="home">
      <h1 className="heading">Discover Your Next Home:</h1>
      <p className="welcome">Welcome to our apartment rental website!
        We are dedicated to helping you find the
        perfect place to call home. Our selection
        of properties includes a wide range
        of options to suit every need and budget.
      </p>
      <div className="section-1">
        <form className="price-location-form">
          <div>
            <div>
              <img src={priceIcon} alt="price" className="price-icon" />
              <p className="price-label">Price Range</p>
            </div>
            <select value="" className="select-price">
              <option name="" id="" className="price-placeholder">Select Price Range</option>
            </select>
          </div>
          <div>
            <div>
              <img src={locationIcon} alt="price" className="price-icon" />
              <p className="price-label">Location</p>
            </div>
            <select value="" className="select-location">
              <option name="" id="" className="price-placeholder">Search Location</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
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
        <div className='top-sections'>
          <div>
            <h3 className="featured">FEATURED PROPERTIES</h3>
            <h2 className="provide">We provide you</h2>
            <h2 className="affordable">Affordable Living In The Heart of the Country</h2>
          </div>
          <div className="houses-apart-land">
            <p className="houses">Houses</p>
            <p className="apart">Apartment</p>
            <p className="land">Land</p>
          </div>
        </div>

        <div className='bottom-sections'>
          <div className='bottom-left-section'>
            <div className="verified-section">
              <img src={screenWidth > 799 ? image3D : image3M} alt="" className="image3" />
              <h4 className="friendly">Family Pet Friendly</h4>
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
          </div>

          <div>
            <div className='bottom-right-section'>
              <div>
                <p className="welcome-left">Welcome to our apartment rental website!
                  We are dedicated to helping you find the
                  perfect place to call home. Our selection
                  of properties includes a wide range
                  of options to suit every need and budget.
                </p>
              </div>
              <div>
                <div className='arrow-section'>
                  <img src={image4} alt="house" className="image4" />
                  <img src={arrowIcon} alt="house" className="arrow-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="coming-soon-section">
          <p className="coming-soon">Coming soon</p>
          <p className="now-available">This features is now available on beta testing</p>
        </div>
        <h2 className='local-area'>Local Area View</h2>
        <p className="welcome-center">Welcome to our apartment rental website!
          We are dedicated to helping you find the
          perfect place to call home. Our selection
          of properties includes a wide range
          of options to suit every need and budget.
        </p>
      </div>

      <div className="section-7">
        <div className="doted-map-section">
          <img src={screenWidth > 799 ? dotedMapD : dotedMapM} alt="" className="doted-map" />
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
    </div>
  );
}

export default Home;