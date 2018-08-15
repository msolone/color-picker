import React, { Component } from "react";

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hue: 0,
            saturation: 0,
            brightness: 0
        }
    }
    
  hueUpdated = event => {
    console.log(event.target.value);
    const newHue = event.target.value
    this.setState({
        hue: newHue
    })
  };

  saturationUpdated = event => {
    console.log("Saturation works", event.target.value);
    const newSaturation = event.target.value
    this.setState({
        saturation: newSaturation
    })
  };

  lightnessUpdated = event => {
    console.log("Lightness works", event.target.value);
    const newlightness = event.target.value
    this.setState({
        lightness: newlightness
    })
  };

  render() {
    return (
      <div>
        <section
          className="color-box"
          style={{ backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)` }}
        />
        <section>
          <input
            type="range"
            min="1"
            max="360"
            name="hue"
            onInput={this.hueUpdated}
            value={this.state.hue} 
          />
          <input
            type="range"
            min="1"
            max="100"
            name="saturation"
            onInput={this.saturationUpdated}
          />
          <input
            type="range"
            min="1"
            max="100"
            name="lightness"
            onInput={this.lightnessUpdated}
          />
        </section>
      </div>
    );
  }
}

export default Slider;
