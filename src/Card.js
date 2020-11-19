import React from 'react';
import './Cards.css'
const Card = ({ id, name, email, price }) => {

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 container'>
            {/* <img alt = 'photo' src={`https://robohash.org/${id}?200x200`} /> */}
            <img alt='photo' src={email[0]} style={{ height: '200px', width: '200px' }} />
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Card;