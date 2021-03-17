
import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';

export default class HeroSection extends React.Component {
    render() {
        return(
            
        <div>
            <div class="video-hero hero-container">
                <video poster="//cdn.shopify.com/s/files/1/2422/9487/files/Connect_EX-7s_-_Lifestyle_4-2048x1367-8d625cc_1024x768-2.jpg?v=1614883176" autoplay="true" muted="true" loop="true" playsinline="true" id="video-banner2"> 
                <source src="https://cdn.shopify.com/s/files/1/2422/9487/files/EX7S_Gym_30sec_Cut2.mp4?v=1603803063" type="video/mp4" />
                </video>
                <div class="info-container homepage-hero"> 
                    <div class="info-content"> <h1 class="hero-title">Meet your fitness goals with Echelon.</h1> 
                        <p class="credera-snippet copy-text ">Echelon Commercial Offerings</p>
                    </div>
                </div>
            </div>
         </div>
        )
    }

}