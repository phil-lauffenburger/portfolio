import React from 'react';

export const About = ({ me }) => (
  <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/phil.png" alt />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>Hey. I'm glad you're still reading.
      Who am I? I am very few things: 1) Developer; 2) Climber; 3) Explorer. At the end of the day though, what matters is that no matter the job, requirements,
      or tools handed to me, I get the job done. I bring a broad swathe of technical skills to the table, without compromising on depth. Get in contact with me about your tough job.
      <br/><a className="smoothscroll" href="#contact">Let's Talk</a>
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>{me.first} {me.last}</span><br />
            <span>{me.address}<br />
              {me.address2}
            </span><br />
            <span>{me.phone}</span><br />
            <span>{me.email}</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section>
);

export default About;
