import React, { Component } from "react";

class Menue extends Component {
  render() {
    return (
      <div>
     	<nav id="nav-wrap">

			<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
			<a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

			<ul id="nav" className="nav">
				<li className="current"><a className="smoothscroll" href="#home">Home</a></li>
				<li><a className="smoothscroll" href="#about">About</a></li>
				<li><a className="smoothscroll" href="#skills">Skills</a></li>
				<li><a className="smoothscroll" href="#skills">Skills</a></li>
			</ul>

		</nav>
	</div>)

  }
}

export default Menue;
