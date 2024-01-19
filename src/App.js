import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [scrollPosition, setScrollPosition] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setScrollPosition(true);
    } else {
        setScrollPosition(false);
    }
};
window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <header className="header">
        <div className={
                    scrollPosition
                        ? "header-container colorChange"
                        : "header-container"
                }>
          <div className='logo-container'>
            <span>PNC AUTO</span>
          </div>
          <div className='menu-container'>
            <ul className='menu-list'>
              <li>Telefon</li>
              <li>Mail</li>
              <li> <FontAwesomeIcon icon={['fab', 'apple']} />Whataspp</li>
            </ul>
          </div>
        </div>
      </header>
      <div className='front-view'>
        <div className='image-container'></div>
      </div>
      <div className="main">
        <span className='title'>De ce sa ne alegi pe noi?</span>
        <span className='subtitle'>Seriozitate, punctualitate, performanta, servicii de cea mai buna calitate</span>
        <div className='main-items'>
          <div className='menu-item'>
               <FontAwesomeIcon icon={faBriefcase} size='5x' color='#E91E62'/>
            <span className='title'>Experienta</span>
            <span className='subtitle'>Peste 20 de ani in domeniu</span>
          </div>
          <div className='menu-item'>
          <FontAwesomeIcon icon={faCheck} size='5x' color='#04DD01'/>
          <span className='title'>Calitate</span>
          <span className='subtitle'>Materiale de cea mai buna calitate</span>
          </div>
          <div className='menu-item'>
            <FontAwesomeIcon icon={faHandshakeSimple} size='5x' color='#5F5CD6'/>
            <span className='title'>Seriozitate</span>
            <span className='subtitle'>Te poti baza pe noi</span>
          </div>
        `</div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
