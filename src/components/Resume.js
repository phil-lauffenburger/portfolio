import React from 'react';
import SkillBar from './SkillBar';

export const Resume = () => (
  <section id="resume">
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Aerospace Engineering</h3>
          <p className="info">Bachelor of Science <span>•</span> <em className="date">May 2011</em></p>
          <p>
            Why? Because, space is cool. I learned <span className="highlight">MATLAB, analysis strategies, and how to hurl chunks of metal out of the atmosphere</span> and into a stable, geo-stationary orbit.
            Does this apply to software/web development? Sure does. Ask me how.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Self-taught Web Development</h3>
          <p className="info"><em className="date">July 2015</em></p>
          <p>
            I taught myself web development by <span className="highlight">reading books</span> about it, and building my own apps. That experience taught me that I can take any <span className="highlight">problem</span>, no matter how <span className="highlight">astronomical</span>, and <span className="highlight">break it down</span> into something that I can do <span className="highlight">now</span>.
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1 style={{ whiteSpace: 'nowrap'}}><span>Technical Experience</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Manufacturing Engineer/Production Floor Manager</h3>
          <p className="info">SNC & LHDC <span>•</span> <em className="date">May 2011 - July 2016</em></p>
          <p>
            I oversaw and planned the production of <span className="highlight">satellite components.</span> It was complicated. However, it was ultimately unsatisfying <span className="highlight">creatively</span>, and didn't give me the <span className="highlight">flexibility</span> I crave.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Meteor & React Developer</h3>
          <p className="info">Climbz<span>•</span> <em className="date">July 2016 - May 2017</em></p>
          <p>
            Climbz gave me a shot for no good reason. Thanks, Climbz. We built a prototype <span className="highlight">meteor</span> app, and then migrated it to <span className="highlight">react and react-native</span>.
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Full Stack Contractor</h3>
          <p className="info">Grio<span>•</span> <em className="date">May 2017 - Present</em></p>
          <p>
            Grio is an awesome place to work. I've been on at least six different projects, each with their own client and technical challenge.
            &nbsp; I've built <span className="highlight">react, angular, jquery</span> front-ends, using <span className="highlight">django, nodejs, and rails</span> back-ends, with <span className="highlight">mysql, psql, and redis</span> persistence layers. Not in that order.
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>My main focus has been on a fullstack <span className="highlight">react</span> frontend, with either a <span className="highlight">node/mongo/redis</span> backend or a <span className="highlight">django/SQL</span> backend.
      I'm adept at various methods of deployment including production level familiarity with <span className="highlight">docker containers</span> in <span className="highlight">AWS, pm2 in AWS, and heroku</span>.
      I'm a <span className="highlight">capable</span> one man/architect team at the full <span className="highlight">conceptualizing, designing, developing and devops</span> lifecycles of an app, but also used to working in small, agile teams.
      </p>
      <div className="bars twelve columns">
        <ul className="skills">
          {[
            {
              name: 'reactjs',
              skill: 75
            },
            {
              name: 'angular',
              skill: 45
            },
            {
              name: 'nodejs',
              skill: 65
            },
            {
              name: 'django',
              skill: 60
            },
            {
              name: 'rails',
              skill: 27
            },
            {
              name: 'mongo',
              skill: 52
            },
            {
              name: 'react-native',
              skill: 47
            },
            {
              name: 'sql',
              skill: 55
            },
            {
              name: 'redis',
              skill: 25
            }
          ].sort((a,b) => a.skill > b.skill ? -1 : 1)
          .map((e, i) => <SkillBar key={i} {...e}/>)}
        </ul>
      </div>{/* end skill-bars */}
      <div className="additional">
        <p className="responsive-headline">In addition I have implemented the following technologies in at least one project:</p>
        <ul className="square">
          {[
            "flutter",
            "docker",
            "ci/cd",
            "heroku",
            "FB Chatbot APIs",
            "RabbitMQ/Celery Async task manager",
            "Google Cloud Hosting",
            "Google Maps API",
            "chartjs",
            "Firebase"
          ].map(e => <li className="pull-left first" key={e}>{e}</li>)}
        </ul>
      </div>
    </div> {/* main-col end */}
  </div> {/* End skills */}

</section>
 );

 export default Resume;
