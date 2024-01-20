import { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from 'google-map-react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrollPosition(true);
    } else {
      setScrollPosition(false);        
    }
  };

  function URL(url) {
    window.location.href = url;
  }

  window.addEventListener("scroll", changeNavbarColor);

  const defaultProps = {
    center: {
      lat: 44.3714657195532,
      lng: 26.092456532923354
    },
    zoom: 15
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: 44.3714657195532, lng: 26.092456532923354 },
    map,
    title: 'Hello World!'
    });
    return marker;
   };

  return (
    <>
      <header className="header">
        <div
          className={
            scrollPosition ? "header-container colorChange" : "header-container"
          }
        >
          <div className="logo-container">
            <span>PNC AUTO</span>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li onClick={() =>
                  URL("#contact")}>Contact</li>
              <li
                onClick={() =>
                  URL("https://api.whatsapp.com/send?phone=741448739")
                }
              >
                <FontAwesomeIcon icon={["fab", "apple"]} />
                Whataspp
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="front-view">
        <div className="image-container"></div>
      </div>
      <div className="main">
        <span className="title">De ce sa ne alegi pe noi?</span>
        <span className="subtitle">
          Seriozitate, punctualitate, performanta, servicii de cea mai buna
          calitate
        </span>
        <div className="main-items">
          <div className="menu-item">
            <FontAwesomeIcon icon={faBriefcase} size="5x" color="#E91E62" />
            <span className="title">Experienta</span>
            <span className="subtitle">Peste 20 de ani in domeniu</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faCheck} size="5x" color="#04DD01" />
            <span className="title">Calitate</span>
            <span className="subtitle">Materiale de cea mai buna calitate</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon
              icon={faHandshakeSimple}
              size="5x"
              color="#5F5CD6"
            />
            <span className="title">Seriozitate</span>
            <span className="subtitle">Te poti baza pe noi</span>
          </div>
        </div>
      </div>
      <div className="main-about">
        <div className="main-about-text">
          <span>
            PENICA IMPEX reprezintă partenerul de încredere pentru clienții ce
            își doresc servicii profesioniste de sudură auto și reparatii
            radiatoare. Cu o echipă experimentată și dedicată, ne-am impus pe
            piața auto prin abordarea atentă a nevoilor clienților și oferirea
            de soluții eficiente în domeniul sudurii.
          </span>
        </div>
      </div>
      <div className="services">
        <span className="services-header">Servicii:</span>
        <div className="services-section">
          <div className="service-item">
            <FontAwesomeIcon icon={faFire} size="3x" color="#1285FC" />
            <span>Sudura</span>
            <span>Executăm lucrări de sudură auto de înaltă calitate,</span>
          </div>
          <div className="service-item">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="3x"
              color="#1285FC"
            />
            <span>Reparatii</span>
            <span>
              Suntem specializați în diagnosticarea și repararea eficientă a
              sistemelor de răcire.
            </span>
          </div>
          <div className="service-item">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="3x"
              color="#1285FC"
            />
            <span>Curatare</span>
            <span>
              Testarea presiunii sistemului de răcire pentru depistarea
              eventualelor scurgeri.
            </span>
          </div>
          <div className="service-item">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="3x"
              color="#1285FC"
            />
            <span>Diagnosticare</span>
            <span>
              Diagnosticarea problemelor de funcționare ale sistemului de
              răcire.
            </span>
          </div>
        </div>
      </div>
      <div id="contact" className="contact-container">
        <div className="title">Contact:</div>
        <div className="contact">
          <div className="contact-info">
            <ul>
              <li>Adresa: <span>Intrarea naruja 1, Sector 4</span></li>
              <li>Telefon: <span>0741444444</span></li>
              <li>Email: <span>contact@pncauto.ro</span></li>
              <li>Program: <span>L-S 09:00 - 16:00</span></li>
            </ul>
          </div>
          <div className="map-container"><GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyABVU1VlBjCunbzR08tvi4yFFZwCaqAgNs" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
      </GoogleMapReact></div>
        </div>
      </div>
      <footer className="footer">
        <div className="main-container">
          <div>Legal</div>
          <div>Contact</div>
          <div>Servicii</div>
          <div>About us</div>
        </div>
        <span className="credits">Made by @andreipenica</span>
      </footer>
    </>
  );
}

export default App;
