import React from 'react';
// <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>

const Header = ({ me }) => (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
          <h2 className="responsive-headline" style={{color: 'var(--fire-yellow)'}}>My name is {me.firstshort} {me.last}</h2>
            <h3 style={{ color: 'var(--star)'}}>I'm a <span>{me.role}</span> based in Innsbruck. I create engaging web applications for companies and individuals.
            &nbsp;<a className="smoothscroll" href="#about" style={{color: 'var(--fire-yellow)'}}>Scroll Down </a>
              and learn more <a className="smoothscroll" href="#about">about me</a> and <a className="smoothscroll" href="#portfolio">my work</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/phil.lauffenburger"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://www.linkedin.com/in/philip-lauffenburger-80380a32/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/old_man_lauffen/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );

export default Header;
