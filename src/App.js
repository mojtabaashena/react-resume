import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Menue from './Components/Menue';
import Skills from './Components/Skills'
import Snowfall from 'react-snowfall'
import RandomColor from 'randomcolor'

class App extends Component {
  constructor(){
    super();

    this.state = {
       themeColor: "#282c34" 
    }
}

changeColor(){
   this.setState({themeColor: RandomColor.call()})
   console.log(this.state.themeColor)
}
render(){  
return (

      <div className="site" >
        <Snowfall snowflakeCount={200} color={this.state.themeColor}/>
        <Menue />
        <img className="changestylebtn" onClick={()=>this.changeColor()}  src="https://mojtabaashena.github.io/react-resume/images/magicwand.png"/>
        <Header />
        <About themeColor={this.state.themeColor} />
        <Skills themeColor={this.state.themeColor} />
      </div>
  );

}  
}

export default App;
