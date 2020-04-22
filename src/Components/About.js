import React, { Component } from 'react';
import data from '../resumeData.json'
class About extends Component {
  render() {

   
    
      var name = data.main.name;
      // var profilepic= "images/"+this.props.data.image;
      var bio = data.main.bio;
      var country = data.main.address.country;
      var city = data.main.address.city;
    

    return (
      
         	<section id="about" class="section">
		         <h2>About Me</h2>
		         <p>{bio}</p>
	         </section>
   //    <div className="row">
   //       <div className="three columns">
   //          {/* <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" /> */}
   //       </div>
   //       <div className="nine columns main-col">
   //          <h2>About Me</h2>

   //          <p>{bio}</p>
   //          <div className="row">
   //             <div className="columns contact-details">
   //                <h2>Contact Details</h2>
   //                <p className="address">
	// 					   <span>{name}</span><br />
	// 					   <span>
	// 					         {city} , {country}
   //                 </span><br />
	// 				   </p>
   //             </div>
   //          </div>
   //       </div>
   //    </div>

   // </section>
    );
  }
}

export default About;