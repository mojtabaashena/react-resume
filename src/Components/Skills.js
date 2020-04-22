import React, { Component } from 'react'
import data from "../resumeData.json";

class Skills extends Component {

    render() {
        var skillmessage = data.skillmessage;
        var skills = data.skills.map(function (skills) {
            var projectImage = 'images/tech/' + skills.image;
            return <div key={skills.name} className="columns feature-item">
                <img className='skill' alt={skills.name} src={projectImage} />
                <h5>{skills.name}</h5>
                <p>{skills.description}</p>
            </div>
        })


        return (
            <section id="skills" className="row skill" >
                <div className="three columns header-col">
                    <h1><span>Favorite Tech</span></h1>
                </div>

                <div>
                    <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
                    <ul className="bgrid-quarters s-bgrid-thirds cf">
                        {skills}
                    </ul>
                </div>
            </section>)

    }
}