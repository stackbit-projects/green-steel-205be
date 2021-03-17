
import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class HeroSection extends React.Component {
    render() {
        return(

<style>
    /* line 20, sass/snippets/_full-width-video-snippet.scss */
  .controls-container {
    z-index: 1;
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  
  /* line 31, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control .video-btn {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    border-radius: 40px;
    background-color: #ffffff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15) !important;
    transition: opacity 300ms ease;
  }
  
  /* line 45, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control .video-btn svg {
    height: 32px;
    width: 32px;
  }
  
  /* line 50, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control .video-btn span {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #2e2e2e;
    text-transform: uppercase;
    margin: 0;
    margin-left: 16px;
    transition: color 300ms;
  }
  
  /* line 62, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control .video-btn:hover {
    opacity: 0.85;
  }
  
  /* line 68, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control.on .unmute {
    display: none;
  }
  
  /* line 71, sass/snippets/_full-width-video-snippet.scss */
   .controls-container .video-control.on .mute {
    display: flex;
  }
  
  /* line 74, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control.on .play {
    display: none;
  }
  
  /* line 77, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control.on .pause {
    display: flex;
  }
  
  /* line 82, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control.off .unmute {
    display: flex;
  }
  
  /* line 85, sass/snippets/_full-width-video-snippet.scss */
   .controls-container .video-control.off .mute {
    display: none;
  }
  
  /* line 88, sass/snippets/_full-width-video-snippet.scss */
   .controls-container .video-control.off .play {
    display: flex;
  }
  
  /* line 91, sass/snippets/_full-width-video-snippet.scss */
  .controls-container .video-control.off .pause {
    display: none;
  }
  
  /* line 96, sass/snippets/_full-width-video-snippet.scss */
   .controls-container .video-control:hover {
    cursor: pointer;
  }
  
  @media (max-width: 850px) {
    /* line 103, sass/snippets/_full-width-video-snippet.scss */
     .controls-container .video-control.sound-icon {
      display: none;
    }
  }
  
  @media (max-width: 568px) {
    /* line 20, sass/snippets/_full-width-video-snippet.scss */
     .controls-container {
      bottom: 90px;
      right: 10px;
    }
    /* line 114, sass/snippets/_full-width-video-snippet.scss */
     .controls-container .video-control .video-btn {
      border-radius: 20px;
      padding: 12px;
      margin: 5px;
    }
    /* line 119, sass/snippets/_full-width-video-snippet.scss */
     .controls-container .video-control .video-btn svg {
      height: 16px;
      width: 16px;
    }
    /* line 124, sass/snippets/_full-width-video-snippet.scss */
     .controls-container .video-control .video-btn span {
      font-size: 10px;
      line-height: 12px;
      color: #2e2e2e;
      margin-left: 5px;
    }
    /* line 132, sass/snippets/_full-width-video-snippet.scss */
     .controls-container .video-control.sound-icon {
      display: none;
    }
  }
  </style>
        <div id="shopify-section-commerical-hero" class="shopify-section credera-section home-hero">
            <div class="video-hero hero-container">
                <video poster="//cdn.shopify.com/s/files/1/2422/9487/files/Connect_EX-7s_-_Lifestyle_4-2048x1367-8d625cc_1024x768-2.jpg?v=1614883176" autoplay="" muted="" loop="" playsinline="" id="video-banner2"> 
                <source src="https://cdn.shopify.com/s/files/1/2422/9487/files/EX7S_Gym_30sec_Cut2.mp4?v=1603803063" type="video/mp4" />
                </video>
                <div class="info-container homepage-hero" style="background-color: rgba(0, 0, 0, 0.4);"> 
                    <div class="info-content"> <h1 class="hero-title">Meet your fitness goals with Echelon.</h1> 
                        <p class="credera-snippet copy-text ">Echelon Commercial Offerings</p>
                    </div>
                </div>
            </div>
         </div>
        )
    }

}