import React, { Component } from "react";
import styled from "styled-components";
export default class Home extends Component {
  render() {
    return (
      <TitleWrapper>
        <div className="container">
          <div class="box">
            <div class="title">
              <span class="block"></span>
              <h1>
                Akim Ruslanov<span></span>
              </h1>
            </div>

            <div class="role">
              <div class="block"></div>
              <p>software developer based in vancouver</p>
            </div>
          </div>
        </div>
      </TitleWrapper>
    );
  }
}

const TitleWrapper = styled.div`
  * {
    // margin: 0;
    padding: 0;
  }
  body, html {
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
         animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
         display: flex;
       }
 
       h1 {
         font-family: 'Poppins';
         color: #fff;
         font-size: 64px;
         -webkit-animation: mainFadeIn 2s forwards;
         -o-animation: mainFadeIn 2s forwards;
         animation: mainFadeIn 2s forwards;
         animation-delay: 1.6s;
         opacity: 0;
         display: flex;
         align-items: baseline;
         position: relative;
 
         span {
           width:0px;
           height: 0px;
           -webkit-border-radius: 50%;
           -moz-border-radius: 50%;
           border-radius: 50%;
 
           background: #ffb510;
           -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
           animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
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
         animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
         animation-delay: 2s;
         display: flex;
       }
 
       p {
        //  width: 80%;
         animation: secFadeIn 2s forwards;
         animation-delay: 3.5s;
         opacity: 0;
          font-weight: 400;
         font-family: 'Lato';
         color: #ffffff;
         font-size: 24px;
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
        width: 15px
     }
     80% {
        width: 10px;
      height: 10px;
        bottom: 20px
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
