import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hue: 180,
      saturation: 50,
      lightness: 50, 
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
      <div className="console"  style={{
        backgroundColor: `hsla(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%,${this.state.alpha})`
      }}>
        {/* <section
          className="color-box"
          style={{
            backgroundColor: `hsla(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%,${this.state.alpha})`
          }}
        /> */}
        <section>
          <section className="sliders">
            <p>Hue: {this.state.hue}</p>
            <input
              type="range"
              min="1"
              max="360"
              name="hue"
              onInput={this.hueUpdated}
              value={this.state.hue}
            />
             <p>Saturation: {this.state.saturation}</p>
            <input
              type="range"
              min="1"
              max="100"
              name="saturation"
              onInput={this.saturationUpdated}
            />
             <p>Lightness: {this.state.lightness}</p>
            <input
              type="range"
              min="1"
              max="100"
              name="lightness"
              onInput={this.lightnessUpdated}
            />
             <p>Alpha: {this.state.alpha}</p>
            <input
              type="range"
              min="1"
              max="100"
              name="alpha"
              onInput={this.alphaUpdated}
            />
          </section>
          <section className="rsla">
          <h5>CSS Color Code</h5>
          <p>hsla({this.state.hue},{this.state.saturation},{this.state.lightness},{this.state.alpha})</p>
          </section>
        </section>
      </div>
    );
  }
}

export default Slider;
