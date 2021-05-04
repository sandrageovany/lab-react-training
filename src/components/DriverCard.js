import React from 'react';
import Rating from './Rating';

const DriverCard=({name,rating,img,car})=>{
    return (
        <div style={{backgroundColor:'blue'}}>
            <p>{name}</p>
            <Rating/>
            <img src={img}/>
            <p>{car.model}{car.licensePlate}</p>
        </div>
    )
}

export default DriverCard;