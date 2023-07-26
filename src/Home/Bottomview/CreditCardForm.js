import React from 'react';

const CreditCardForm = ({ currentData }) => {




    return (
        <div style={{ padding: '20px', margin: '0 auto', maxWidth: '400px' }}>
            <br />

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>Card Number:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.cardNumber}</span>
                </div>
            </div>

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>Card Holder Name:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.cardHolder}</span>
                </div>
            </div>

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>Expiry:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.expMonth} {currentData.expYear}</span>

                </div>
            </div>

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>CVV:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.cvv}</span>
                </div>
            </div>

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>Branch:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.branch}</span>
                </div>
            </div>

            <div style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                <label><b>Place:</b></label>
                <div style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <span>{currentData.place}</span>
                </div>
            </div>
        </div>
    );
};

export default CreditCardForm;
