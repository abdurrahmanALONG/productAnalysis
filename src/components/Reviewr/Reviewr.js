import React from 'react';
import './Reviewr.css'

const Reviewr = (props) => {
    const {name, img, ratings,comment} = props.review;
    return (
        <div className='reviewr-style'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{comment}</p>
            <h6>Rating:{ratings}</h6>
        </div>
    );
};

export default Reviewr;