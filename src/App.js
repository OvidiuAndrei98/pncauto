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

function URL(url) {
  window.location.href = url;
}

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
              <li onClick={() => URL('https://api.whatsapp.com/send?phone=0741307779')}> <FontAwesomeIcon icon={['fab', 'apple']} />Whataspp</li>
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
        </div>
      </div>
      <div className='main-about'>
        <div className='main-about-text'>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Non odio euismod lacinia at quis. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Id leo in vitae turpis massa sed elementum tempus egestas. At augue eget arcu dictum. Gravida neque convallis a cras. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Turpis massa sed elementum tempus egestas sed. Dictum at tempor commodo ullamcorper a lacus. Mauris a diam maecenas sed enim. Rhoncus urna neque viverra justo nec ultrices dui. Suscipit tellus mauris a diam maecenas sed enim. Turpis massa tincidunt dui ut ornare lectus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Enim ut tellus elementum sagittis vitae et. Viverra nibh cras pulvinar mattis nunc.

Venenatis tellus in metus vulputate eu scelerisque felis. At lectus urna duis convallis. Amet consectetur adipiscing elit duis tristique. </span>
        </div>
      </div>
      <div className='section'>
        <span className='title'>De ce să lucrati cu noi</span>
        <span className='subtitle'>Pentru serviciile, calitatea produselor, competenta tehnica si inovativa si pentru seriozitate. Fiecare client e indrumat pas cu pas pe tot parcursul executiei si poate conta intotdeauna pe sfaturi si idei si mai ales ca avem foarte multa experienta in domeniu si multe lucrari in portofoliu.</span>
      </div>
      <footer className='footer'>
        <div className='main-container'>
          <div>Legal</div>
          <div>Text</div>
          <div>Text</div>
          <div>Text</div>
        </div>
        <span className='credits'>Made by @andreipenica</span>
      </footer>
    </>
  );
}

export default App;
