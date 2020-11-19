import React from 'react';
import Card from './Card';



const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].Item_ID} 
                        name={robots[i].Item_Name} 
                        email ={robots[i].Item_Pictures}
                        price={robots[i].Item_Price} />);
                })
            }
        </div>
    );
}

export default CardList;