import React from 'react';

export class About extends React.Component{
  state = {showImg: false}
  render() {
    const { me } = this.props;
    const {showImg} = this.state;
    return (
      <section id="about">
      <div className="row">
        <div className="three columns">
          <div className="profile-pic" />
        </div>
        <div className="three columns contact-details">
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
        <div className="six columns main-col">
          <h2>About Me</h2>
          <div className="follow-mountain"/>
          <ul>
            <li><a href="#resume">Developer</a></li>
            <li onClick = {() => this.setState({ showImg: !showImg })}><a>Climber</a></li>
          </ul>
          <br/><a className="smoothscroll" href="#contact">Let's Talk</a>
          <p className="text-right" style={{pointerEvents: 'none'}}>
              I am an American living in Innsbruck with my wonderful Norwegian wife. I feel as though I have found paradise. I like finding interesting problems and solving them whether in my personal or professional life.
              This translates easily to both web development problems, as well as rock climbing. I believe in challenging myself every day.
          </p>
        </div>

        </div> {/* end .main-col */}
        <p className="scrolldown">
          <a className="smoothscroll" href="#resume"><i className="icon-down-circle" /></a>
        </p>
    </section>
    )
  }
}

// <div className="row">
//
//   <div className="columns download">
//     <p>
//       <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
//     </p>
//   </div>
// </div> {/* end row */}

// <div id="modal-09" className={`popup-modal ${showImg ? '' : "mfp-hide"}`} height="550px">
//   <img className="scale-with-grid" src="images/climbing.jpg" alt />
//   <div className="link-box">
//     <a className="popup-modal-dismiss" onClick={() => this.setState({ showImg: false })}>Close</a>
//   </div>
// </div>{/* modal-03 End */}

export default About;
