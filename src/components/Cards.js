import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC resources!</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItem 
                            src='assets/images/img-1.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                        <CardItem 
                            src='assets/images/img-2.jpg' 
                            text='Check out these amazing mixing tools.' 
                            label='Modern' 
                            path='/products'
                        />
                    </ul>
                    <ul className='cards-items'>
                        <CardItem 
                            src='assets/images/img-3.jpg' 
                            text='Learning an instrument from early childhood.' 
                            label='Instruments' 
                            path='/products'
                        />
                        <CardItem 
                            src='assets/images/img-4.jpg' 
                            text='Our event at Radio City Music Hall, New York' 
                            label='Events' 
                            path='/services'
                        />
                        <CardItem 
                            src='assets/images/img-5.jpg' 
                            text='Check out our upcoming events.' 
                            label='Events' 
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
