
import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix} from '../utils';
import SectionActions from './SectionActions';


export default class HeroSection extends React.Component {
 const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    render() {
        return( 
         <div >
            <video autoPlay="autoplay" loop="loop" muted >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div >
                <div  >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div>
        </div>
        )
    }

}