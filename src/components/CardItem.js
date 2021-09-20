import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
            <li className='cards-item'>
                <Link to='/' className='cards-item-link'>
                    <figure className='cards-item-pic-wrap' data-category='Classics'>
                        <img src='assets/images/img-2.jpg' alt='Vinyl' className='cards-item-img' />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>See these hidden musical gems.</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;
