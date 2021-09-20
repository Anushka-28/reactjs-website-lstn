import React from 'react';
import { Button } from './Button';
import bgVid from '../assets/videos/video-4.mp4';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'> 
            <video src={bgVid} type='video/mp4' autoPlay loop muted />
            <h1>MUSIC AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('Watch Trailer')}>
                    WATCH TRAILER
                    <i className='fa fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
