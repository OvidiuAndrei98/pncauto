import { useId, useState, useCallback, useRef } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faSoap } from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import { Formik, Field, Form } from "formik";
import emailjs from "@emailjs/browser";
import img1 from "./images/115_Suduraaluminiuinperetesubtire.jpg";
import img2 from "./images/Imag133.jpg";
import img3 from "./images/IMAG0577.jpg";
import img4 from "./images/imagini-cu-lucrari-reparatii-radiatoare-si-sudura-in-argon-ro_photo136_0.jpg";
import img5 from "./images/reparatie-sudura-radiator-aluminiu.jpg";
import img6 from "./images/Reparatii radiatoare Brasov sudura aluminiu.jpg";
import img7 from "./images/Reparatii radiatoare Brasov sudura.jpg";
import{ReactComponent as LogoWhite } from "./images/PNC-AUTO-logos_white.svg";
import{ReactComponent as LogoBlack } from "./images/PNC-AUTO-logos_black.svg";

function App() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const formRef = useRef();
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
      lng: 26.092456532923354,
    },
    zoom: 15,
  };

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 44.3714657195532, lng: 26.092456532923354 },
      map,
      title: "Hello World!",
    });
    return marker;
  };

  const [contact, scrollToContact] = useScrollTo();

  function useScrollTo() {
    const id = useId();
    const handleScroll = useCallback(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, [id]);

    return [id, handleScroll];
  }

  const sendEmail = (values) => {
    emailjs
      .sendForm(
        "service_4qkikaq",
        "template_ln59k3t",
        formRef.current,
        "x_NDl4TwQlsT6pBDK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            {scrollPosition ? <LogoBlack /> : <LogoWhite />}
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li onClick={scrollToContact}>Contact</li>
              <li
                onClick={() =>
                  URL("https://api.whatsapp.com/send?phone=741448739")
                }
              >
                <FontAwesomeIcon icon={["fab", "apple"]} />
                <span className={`neo-button ${scrollPosition ? 'color-change' : ''}`}>WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="front-view">
        <div className="image-container">
          <div className="hero-text">
            REPARATII <span className="text-gradient">RADIATOARE</span> ORICE
            TIP
          </div>
          <div onClick={scrollToContact} className="contact-button">
            Vezi mai multe
          </div>
        </div>
      </div>
      <div id={contact}></div>
      <div className="main">
        <span className="title">De ce sa ne alegi pe noi?</span>
        <span className="subtitle">
          Seriozitate, punctualitate, performanta, servicii de cea mai buna
          calitate
        </span>
        <div className="main-items">
          <div className="menu-item">
            <FontAwesomeIcon icon={faBriefcase} size="4x" color="#E91E62" />
            <span className="title">Experienta</span>
            <span className="subtitle">Peste 20 de ani in domeniu</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faCheck} size="4x" color="#04DD01" />
            <span className="title">Calitate</span>
            <span className="subtitle">Materiale de cea mai buna calitate</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon
              icon={faHandshakeSimple}
              size="4x"
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
        <span className="services-header">Servicii</span>
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
            <FontAwesomeIcon icon={faSoap} size="3x" color="#1285FC" />
            <span>Curatare</span>
            <span>
              Testarea presiunii sistemului de răcire pentru depistarea
              eventualelor scurgeri.
            </span>
          </div>
          <div className="service-item">
            <FontAwesomeIcon icon={faStethoscope} size="3x" color="#1285FC" />
            <span>Diagnosticare</span>
            <span>
              Diagnosticarea problemelor de funcționare ale sistemului de
              răcire.
            </span>
          </div>
        </div>
      </div>
      <div className="image-slider-container">
        <div className="carrousel" useScrollTo>
          <div className="image">
            <img src={img1} />
          </div>
          <div className="image">
            <img src={img2} />
          </div>
          <div className="image">
            <img src={img3} />
          </div>
          <div className="image">
            <img src={img4} />
          </div>
          <div className="image">
            <img src={img5} />
          </div>
          <div className="image">
            <img src={img6} />
          </div>
          <div className="image">
            <img src={img7} />
          </div>
          <div className="image">
            <img src={img7} />
          </div>
        </div>
        <div className="carrousel" useScrollTo>
          <div className="image">
            <img src={img1} />
          </div>
          <div className="image">
            <img src={img2} />
          </div>
          <div className="image">
            <img src={img3} />
          </div>
          <div className="image">
            <img src={img4} />
          </div>
          <div className="image">
            <img src={img5} />
          </div>
          <div className="image">
            <img src={img6} />
          </div>
          <div className="image">
            <img src={img7} />
          </div>
          <div className="image">
            <img src={img7} />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <div className="title">Contacteaza-ne</div>
        <div className="contact">
          <div className="contact-form">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                sendEmail(values);
              }}
            >
              <Form ref={formRef}>
                <label htmlFor="firstName">Prenume</label>
                <Field id="firstName" name="firstName" placeholder="Prenume" />

                <label htmlFor="lastName">Nume</label>
                <Field id="lastName" name="lastName" placeholder="Nume" />

                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />

                <label htmlFor="message">Mesaj</label>
                <Field
                  id="message"
                  name="message"
                  placeholder="Mesaj..."
                  as="textarea"
                />
                <button className="submit-button" type="submit">
                  Trimite
                </button>
              </Form>
            </Formik>
          </div>
          <div className="contact-details">
            <div className="contact-info">
              <ul>
                <li>
                  Adresa: <span>Intrarea Naruja 1, Sector 4, Bucuresti</span>
                </li>
                <li>
                  Telefon: <span>0741444444</span>
                </li>
                <li>
                  Email: <span>contact@pncauto.ro</span>
                </li>
                <li>
                  Program: <span>L-S 09:00 - 16:00</span>
                </li>
              </ul>
            </div>
            <div className="map-container">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyABVU1VlBjCunbzR08tvi4yFFZwCaqAgNs",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
              ></GoogleMapReact>
            </div>
          </div>
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
