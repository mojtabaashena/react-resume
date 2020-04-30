import React, { Component } from 'react'
import data from "../resumeData.json";

class Skills extends Component {

    render() {
        var skillmessage = data.resume.skillmessage;
        var skills = data.resume.skills.map(function (skills) {
            // var projectImage = 'images/tech/' + skills.image;
            return <div key={skills.name} className="columns feature-item">
                <img className='skill' alt={skills.name} src= {skills.imagepath} />
                <h5>{skills.name}</h5>
                <p>{skills.description}</p>
            </div>
        })


        return (
            <section id="skills" className="section row skill" style={{backgroundColor: this.props.themeColor}} >
                <div className="three columns header-col">
                    <h1><span>Favorite Tech</span></h1>
                </div>

                <div>
                    <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>

                    <ul className="flex-container">
                        {skills}
                    </ul>
                </div>
            </section>)

    }
}
export default Skills