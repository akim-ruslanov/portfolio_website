import React, { Component } from "react";
import styled from "styled-components";
const http = require("http");
const nounToAdj = {"Thunderstorm":"Thunderstorm","Drizzle":"Drizzly", "Rain":"Rainy", "Snow":"Snowy", "Mist":"Misty", "Smoke":"Smoky", "Haze":"Hazy", "Dust":"Dusty", "Fog":"Foggy", "Sand":"Sandy", "Ash":"Ashy",
"Squall":"Squally", "Tornado":"Tornado", "Clear":"Clear", "Clouds":"Cloudy" }
export default class Home extends Component {

  state = {
    weather: null,
    loadedWeather: false,
  }
  

  getWeather() {
    let apiKey = "83398a467ca87021871ee033d281ce6d";
    let city = "Vancouver";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let weather = null;

    http.get(url, (res) => {
      res.setEncoding("utf-8");
      let body = "";
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        weather = JSON.parse(body);
        this.setState(()=> {
          return {weather: weather.weather[0].main, loadedWeather: true}
        })
      });
    });
  }

  componentDidMount() {
    this.getWeather();
  }
  render() {
    return (
      
      <TitleWrapper>
        <div className="container">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                Akim Ruslanov<span></span>
              </h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p>software developer based in <WeatherWrapper className="weather">{this.state.loadedWeather ? nounToAdj[this.state.weather] : ""}<span className="tooltiptext">This is a dynamic text that will change based on the weather in Vancouver. It was done using WeatherAPI.</span></WeatherWrapper> vancouver</p>
            </div>
          </div>
        </div>
      </TitleWrapper>
    );
  }
}

const WeatherWrapper = styled.mark`

/* Tooltip text */
.tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  text-transform: none;
  font-weight: 300;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0%;
}

/* Show the tooltip text when you mouse over the tooltip container */
:hover .tooltiptext {
  visibility: visible;
}
`

const TitleWrapper = styled.div`
  * {
    // margin: 0;
    padding: 0;
  }
  body,
  html {
    overflow: hidden;
  }

  .container {
    width: 100%;
    height: 80vh;
    background: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      width: 520px;
      height: 300px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .title {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 100px;

        .block {
          width: 0%;
          height: inherit;
          background: #ffb510;
          position: absolute;
          animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          display: flex;
        }

        @media (min-width:600px) {
          h1 {
            font-size: 32px;
          }
        }
        
        @media (min-width:800px) {
          h1 {
            font-size: 48px;
          }
        }
        
        @media (min-width:1000px) {
          h1 {
            /* Never get larger than this */
            font-size: 64px;
          }
        }

        

        h1 {
          font-family: "Poppins";
          color: #fff;
          -webkit-animation: mainFadeIn 2s forwards;
          -o-animation: mainFadeIn 2s forwards;
          animation: mainFadeIn 2s forwards;
          animation-delay: 1.6s;
          opacity: 0;
          display: flex;
          align-items: baseline;
          position: absolute;

          span {
            width: 0px;
            height: 0px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;

            background: #ffb510;
            -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
              forwards;
            animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
            animation-delay: 2s;
            margin-left: 5px;
            margin-top: -10px;
            margin-bottom: 2px;
            position: absolute;
            bottom: 13px;
            right: -12px;
          }
        }
      }

      .role {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 60px;
        margin-top: -5px;

        .block {
          width: 0%;
          height: inherit;
          background: #e91e63;
          position: absolute;
          animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          display: flex;
        }

        @media (min-width:600px) {
          p {
            font-size: 12px;
          }
        }
        
        @media (min-width:800px) {
          p {
            font-size: 18px;
          }
        }
        
        @media (min-width:1000px) {
          p {
            /* Never get larger than this */
            font-size: 24px;
          }
        }

        p {
          //  width: 80%;
          animation: secFadeIn 2s forwards;
          animation-delay: 3.5s;
          opacity: 0;
          font-weight: 400;
          font-family: "Lato";
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 5px;
        }
      }
    }
  }

  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes secBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes popIn {
    0% {
      width: 0px;
      height: 0px;
      background: #e9d856;
      border: 0px solid #ddd;
      opacity: 0;
    }
    50% {
      width: 10px;
      height: 10px;
      background: #e9d856;
      opacity: 1;
      bottom: 45px;
    }
    65% {
      width: 7px;
      height: 7px;
      bottom: 0px;
      width: 15px;
    }
    80% {
      width: 10px;
      height: 10px;
      bottom: 20px;
    }
    100% {
      width: 7px;
      height: 7px;
      background: #e9d856;
      border: 0px solid #222;
      bottom: 13px;
    }
  }

  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
