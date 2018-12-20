import React from 'react';
import PortfolioPlayground from './PortfolioPlayground';

export const Portfolio = () => (
  <section id="portfolio">
  <div className="row">

      {/* portfolio-wrapper */}
      <PortfolioPlayground key="pp" />

    <div className="three columns" />
    <div className="6 columns main-col additional">
      <p className="responsive-headline">In addition, I have worked on a variety of short projects like:</p>
      <ul className="square">
        {[
          <span>Lightform <a href='https://lightform.com'>E-commerce/Showcase Site</a></span>,
          <span>BGRoll Mobile: React-Native Mobile Application</span>,
          <span>Guidings Mobile: Native Android Application</span>,
          <span>Pablo Designs <a href='https://pablodesigns.com'>E-commerce/Showcase Site</a></span>,
          <span>moment (Grio Internal Time tracking software [angularjs, rails, mysql])</span>,
          <span>Ewoolutions static concept site <a href='https://protected-plains-5382.herokuapp.com/'>Ewoolutions</a></span>,
          <span>...and an innummerable number of personal/non-published projects (where innummerable ~= 20)</span>,
        ].map((e, i) => <li className="pull-left first" key={i}>{e}</li>)}
      </ul>
    </div>
    {/* Modal Popup
	      --------------------------------------------------------------- */}
    <div id="modal-01" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/bgroll_2.png" alt />
      <div className="description-box">
        <h4>BGRoll</h4>
        <p>Statistic tracker, die roll logger, email sender, and integrity watchdog for play by email games.</p>
        <span className="categories"><i className="fa fa-tag" />reactjs, nodejs, mongo, chartjs, mailgun, heroku</span>
      </div>
      <div className="link-box">
        <a href="https://www.bgroll.com">Check it out</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
    <div id="modal-02" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/clicc_2.png" alt />
      <div className="description-box">
        <h4>Clicc</h4>
        <p>Chemical Life Cycle Analysis, Risk Assessment, SDS, and Product Impact Analyses.</p>
        <span className="categories"><i className="fa fa-tag" />reactjs, django, psql, docker, aws</span>
      </div>
      <div className="link-box">
        <a href="https://clicc.net">Check it out</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-02 End */}
    <div id="modal-03" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/cms.png" alt />
      <div className="description-box">
        <h4>Vivibot</h4>
        <p>Chatbot and associated CMS aimed at young adult cancer survivors.</p>
        <span className="categories"><i className="fa fa-tag" />nodejs, facebook-chatbot, reactjs, aws, circleci, redis</span>
      </div>
      <div className="link-box">
        <a href="https://www.facebook.com/hiVivibot/">Chat with my Creation</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-03 End */}
    <div id="modal-04" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/guidings_2.png" alt />
      <div className="description-box">
        <h4>Guidings</h4>
        <p>Map-based video recommendation service (defunct)</p>
        <span className="categories"><i className="fa fa-tag" />reactjs, firebase, heroku, googlemaps</span>
      </div>
      <div className="link-box">
        <a href="http://guidings.herokuapp.com">Check it out</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-04 End */}
    <div id="modal-05" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/climbz.png" alt />
      <div className="description-box">
        <h4>Climbz</h4>
        <p>Gym climb tracking and competition app (defunct)</p>
        <span className="categories"><i className="fa fa-tag" />reactjs, mysql, meteorjs</span>
      </div>
      <div className="link-box">
        <a >Nothing to see anymore, sadly</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-05 End */}
    <div id="modal-06" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/rocket.png" alt />
      <div className="description-box">
        <h4>Grio</h4>
        <p>Grio client-facing homepage</p>
        <span className="categories"><i className="fa fa-tag" />CMS, jquery, greensockJS</span>
      </div>
      <div className="link-box">
        <a href="https://grio.com">Take a peek</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-06 End */}
    <div id="modal-07" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/freedirt_2.png" alt />
      <div className="description-box">
        <h4>Freedirt</h4>
        <p>Free camping finder. My first app ever. It doesn't even break.</p>
        <span className="categories"><i className="fa fa-tag" />ejs, mongo, nodejs, jquery, heroku</span>
      </div>
      <div className="link-box">
        <a href="https://freedirt.herokuapp.com/#8/40.000/-105.000">Check it out</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-07 End */}
    <div id="modal-08" className="popup-modal mfp-hide">
      <img className="scale-with-grid" src="images/portfolio/lhdc_2.png" alt />
      <div className="description-box">
        <h4>LHDC</h4>
        <p>Concept design, with jquery functionality.</p>
        <span className="categories"><i className="fa fa-tag" />jquery, nodejs, heroku, jquery</span>
      </div>
      <div className="link-box">
        <a href="https://intense-mesa-4525.herokuapp.com">Take a looksie</a>
        <a className="popup-modal-dismiss">Close</a>
      </div>
    </div>{/* modal-01 End */}
  </div> {/* row End */}

</section>
);

export default Portfolio;
