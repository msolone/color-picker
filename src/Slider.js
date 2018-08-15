import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 180,
      saturation: 50,
      brightness: 50, 
      alpha: 1,
  
    };
  }

  hueUpdated = event => {
    console.log(event.target.value);
    const newHue = event.target.value;
    this.setState({
      hue: newHue
    });
  };

  saturationUpdated = event => {
    console.log("Saturation works", event.target.value);
    const newSaturation = event.target.value;
    this.setState({
      saturation: newSaturation
    });
  };

  lightnessUpdated = event => {
    console.log("Lightness works", event.target.value);
    const newlightness = event.target.value;
    this.setState({
      lightness: newlightness
    });
  };

  alphaUpdated = event => {
    console.log("Alpha works", event.target.value);
    const newAlpha = event.target.value;
    this.setState({
      alpha: newAlpha / 100
    });
  };

  render() {
    return (
      <div className="console">
        <section
          className="color-box"
          style={{
            backgroundColor: `hsla(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%,${this.state.alpha})`
          }}
        />
        <section>
          <section className="sliders">
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
            <input
              type="range"
              min="1"
              max="100"
              name="alpha"
              onInput={this.alphaUpdated}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default Slider;
