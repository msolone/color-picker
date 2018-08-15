import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";


class App extends Component {
  
  render() {
    return (
      <section className='body'>
      <div className="App" >
        <h1>Color Picker</h1>
          
            <Slider />

      </div>
      </section>
    );
  }
}

export default App;
