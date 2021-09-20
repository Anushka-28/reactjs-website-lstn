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
                            src='assets/images/img-2.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                        <CardItem 
                            src='assets/images/img-1.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                    </ul>
                    <ul className='cards-items'>
                        <CardItem 
                            src='assets/images/img-2.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                        <CardItem 
                            src='assets/images/img-1.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                        <CardItem 
                            src='assets/images/img-3.jpg' 
                            text='See these hidden musical gems.' 
                            label='Classics' 
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
