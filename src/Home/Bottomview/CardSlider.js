import React, { useState } from 'react';
import DebitCard from './DebitCard';
import CreditCardForm from './CreditCardForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';
import { get, ref } from 'firebase/database';
import database from '../../Services/firebase-util';


const CardSlider = () => {
    const [accountDetails, setAccountDetails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    let getAccountDetails = () => {

        let query = ref(database, 'card/');
        get(query).then((snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (data) {
                setAccountDetails(Object.values(data));

            }

        });
    }
    getAccountDetails();
   

    return (
        <div>
            <Slider {...settings}>
                {
                    accountDetails.map((item) => {
                        return <DebitCard data={item} />;
                    })
                }
            </Slider>

             {
                accountDetails.length > 0 &&    <CreditCardForm currentData={accountDetails[currentSlide]} />
             }
        </div>


    );
};

export default CardSlider;
