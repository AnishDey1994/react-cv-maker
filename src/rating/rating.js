import React from 'react';
import './rating.css';

const Rating = ({ value }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= value ? 'star filled' : 'star transparent-star'}>
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return <div className="rating">{renderStars()}</div>;
};

export default Rating;
