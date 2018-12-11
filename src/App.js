import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import data from './data';
const components = [
  <Header />,
  <About />,
  <Resume />,
  <Portfolio />,
  // <Testimonials />,
  <ContactUs />,
  <Footer />,
];

const props = { ...data }

class App extends Component {
  render() {
    const hydratedComponents = components.map(c => React.cloneElement(c, data))
    return (
      <div className="App">
        {hydratedComponents}
      </div>
    );
  }
}

export default App;
