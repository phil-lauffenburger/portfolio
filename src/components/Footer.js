import React from 'react';

export const Footer = () => (
  <footer>
  <div className="row">
    <div className="twelve columns">
    <ul className="social">
      <li><a href="https://www.facebook.com/phil.lauffenburger"><i className="fa fa-facebook" /></a></li>
      <li><a href="https://www.linkedin.com/in/philip-lauffenburger-80380a32/"><i className="fa fa-linkedin" /></a></li>
      <li><a href="https://www.instagram.com/old_man_lauffen/"><i className="fa fa-instagram" /></a></li>
    </ul>
      <ul className="copyright">
        <li>© Copyright 2014 CeeVee</li>
        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
      </ul>
    </div>
    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
  </div>
</footer>
);

export default Footer;
