import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'> 
            <video src='assets/videos/vid-1.mp4' type='video/mp4' autoPlay loop muted />
            <h1>MUSIC AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={console.log('Get Started')}>
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
