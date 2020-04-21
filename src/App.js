import React from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Menue from './Components/Menue';
import Snowfall from 'react-snowfall'

function App() {
  return (
      <div className="site" >
        <Menue />
        <Header />
        <About />
        <Snowfall
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={20}
/>
        {/* <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/> */}
      </div>
  );
}

export default App;
