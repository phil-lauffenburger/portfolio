import React from 'react';

// <p className="address">
//   <span>{me.first} {me.last}</span><br />
//   <span>{me.address}<br />
//     {me.address2}
//   </span><br />
//   <span>{me.phone}</span><br />
//   <span>{me.email}</span>
// </p>

export class About extends React.Component{
  state = {showGerman: false}

  render() {
    const { me } = this.props;
    const {showGerman} = this.state;
    return (
      <section id="about">
      <div className="row">
        <div className="three columns">
          <div className="profile-pic" />
        </div>
        <div className="three columns contact-details">

        </div>
        <div className="six columns main-col">
          <h2>About Me</h2>
          <div className="follow-mountain"/>
          <br/><a
          className="smoothscroll text-right" href="#contact"
          onMouseEnter = {() => this.setState({ showGerman: true })}
          onMouseLeave = {() => this.setState({ showGerman: false })}
          >{showGerman ? 'Lass uns reden' : "Let's Talk"}</a>

          <div
            className="trigger"
            onMouseEnter = {() => this.setState({ showGerman: true })}
            onMouseLeave = {() => this.setState({ showGerman: false })}
          >

                          <p className="hide">
                            I'm a web developer. I'm a rock climber. I live in Innsbruck. I can work, and have worked, with teams around the world.
                            <br/> I <i className="fa fa-heart"/> full stack web development.
                            <br/>I want to know about your unique problem.
                        </p>

                        <p className="hide">
                          Ich bin ein Webentwickler. Ich bin ein Kletterer. Ich wohne in Innsbruck. Ich kann mit Teams auf der ganzen Welt zusammenarbeiten.
                          <br/> Ich <i className="fa fa-heart"/> komplette Webentwicklung.
                          <br/>Ich möchte über Ihr Problem Bescheid wissen.

                        </p>
          </div>
            <p className={`text-right ${showGerman ? 'hidden' : ''}`}>
              I'm a web developer. I'm a rock climber. I live in Innsbruck. I can work, and have worked, with teams around the world.
              <br/> I <i className="fa fa-heart"/> full stack web development.
              <br/>I want to know about your unique problem.

          </p>

          <p className={`text-right ${showGerman ? '' : 'hidden'}`}>
            Ich bin ein Webentwickler. Ich bin ein Kletterer. Ich wohne in Innsbruck. Ich kann mit Teams auf der ganzen Welt zusammenarbeiten.
            <br/> Ich <i className="fa fa-heart"/> komplette Webentwicklung.
            <br/>Ich möchte über Ihr Problem Bescheid wissen.

          </p>
        </div>

        </div> {/* end .main-col */}
    </section>
    )
  }
}

export default About;
