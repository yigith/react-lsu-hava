import './HavaDurumu.css';
import React, { Component } from 'react';
import Kutu from './Kutu';
import axios from 'axios';

class HavaDurumu extends Component {

  constructor(props) {
    super(props);
    this.state = { yer: "ankara", hava: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.yerDegisti = this.yerDegisti.bind(this);
  }

  yerDegisti(event) {
    this.setState({ yer: event.target.value });
  }

  handleSubmit(event) {
    event?.preventDefault();
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: this.state.yer,
        appid: "a57ff31813aadd18480feae635befdc5",
        units: "metric",
        lang: "tr"
      }
    }).then((response) => {
      this.setState({
        hava: {
          ad: response.data.name,
          sicaklik: response.data.main.temp,
          aciklama: response.data.weather[0].description,
          resim: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png"
        }
      });
    });
  }

  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    return (
      <Kutu>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.yerDegisti} value={this.state.yer}
            type="text" placeholder="Yer adı" required />{" "}
          <button>Hava Durumunu Öğren</button>
        </form>
        <div>
          {this.state.hava && 
            <div className="HavaDurumu-sonuc">
              <img src={this.state.hava.resim} alt={this.state.hava.aciklama} />
              <div>{this.state.hava.sicaklik.toFixed(0)}°</div>
              <div>{this.state.hava.ad}</div>
              <div>{this.state.hava.aciklama}</div>
            </div>
          }
        </div>
      </Kutu>
    );
  }
}

export default HavaDurumu