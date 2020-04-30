import React, { Component } from 'react';
import data from '../resumeData.json'

class About extends Component {
  render() {

      var bio = data.main.bio;
    
    return (
      
         	<section id="about" className="section" style={{backgroundColor: this.props.themeColor}}>
		         <h2>About Me</h2>
             
		         <p>{bio}</p>
             
	         </section>
    );
  }


}

export default About;