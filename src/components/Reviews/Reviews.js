import React from 'react';
import CustomHook from '../CustomHooks/CustomHook';
import Reviewr from '../Reviewr/Reviewr';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = CustomHook();

    return (
        <div className='review-section-card'>
            {
                reviews.map(review => <Reviewr
                    key={review.id}
                    review={review}
                ></Reviewr>)
            }
        </div>
    );
};

export default Reviews;