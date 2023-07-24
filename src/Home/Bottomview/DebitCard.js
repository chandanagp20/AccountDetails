import React from 'react';
import './DebitCard.css';

const DebitCard = () => {
    return (
        <div className="box">
            <div className="header">
                <div className="logo">
                    <img src="clipart2155655.png" width="180px" height="60px" alt="Your Image" />
                </div>
            </div>
            <div className="chippart">
             
                <div className="wifi">
                    <i className="fa-solid fa-wifi"></i>
                </div>
            </div>
            <div className="cardno">
                <h4>5000 2000 3000 0000</h4>
            </div>
            <div className="footer">
                <div className="left">
                    <h5>Valid Thru : 11/26</h5>
                    <h4>CHANDANA G P</h4>
                </div>
              
            </div>

        </div>
    );
};

export default DebitCard;
