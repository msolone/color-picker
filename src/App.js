import React, { Component } from "react";
import "./App.css";
import Slider from "./Slider";


class App extends Component {

  hueUpdated = (event) => {
    console.log('this works', event.target.value)
  }
  
  render() {
    return (
      <div className="App">
        <h1>Color Picker</h1>
        <section className='console'>

          <section>
          
            <Slider />
         
          </section>
        </section>
      </div>
    );
  }
}

export default App;
