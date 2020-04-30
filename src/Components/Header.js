import React, { Component } from "react";
import data from "../resumeData.json";
import { SocialIcon } from 'react-social-icons';

class Header extends Component {
  render() {
    var name = data.main.name;
    var occupation = data.main.occupation;
    var description = data.main.description;
    var city = data.main.address.city;
    var networks = data.main.social.map(function (network) {
        return (
            <SocialIcon id={network.name} url={network.url}/>
      );
    });
      
    return (
      <section id="home" className="hero">
        <h1>I'm {name}.</h1>
        <h2>
          {occupation} in {city}
        </h2>
            <p>{description}.</p>
            <hr />
            <ul className="social">
                {networks}
            </ul>
      </section>
    );
  }
}

export default Header;
