import React, { useState } from 'react';
import DebitCard from './DebitCard';
import CreditCardForm from './CreditCardForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
    };
    let accountDetails = [
        {
            name:'Chandana',
            accNumber:'1234569'
            
        },
        {
            name:'Chandana',
            accNumber:'1234569'
            
        },
        {
            name:'Chandana',
            accNumber:'1234569'
            
        },
        {
            name:'Chandana',
            accNumber:'1234569'
            
        },
    ];

    return (
        <div>
            <Slider {...settings}>
                {
                    accountDetails.map((item,index)=> {
                        return <DebitCard data={item} />;
                    })
                }
            </Slider>

            <CreditCardForm currentSlide={currentSlide} />
        </div>
    );
};

export default CardSlider;
