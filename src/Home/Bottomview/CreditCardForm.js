import React from 'react';

const CreditCardForm = ({ currentSlide }) => {
    const hardcodedData = [
        {
            cardNumber: '1234 5678 9012 3456',
            cardHolderName: 'CHANDANA',
            expiry: '06/29',
            cvv: '123',
            branch: 'DAVANAGERE',
            place: 'DAVANAGERE',
        },
        {
            cardNumber: '0009 8765 4338 7654',
            cardHolderName: 'XYZ',
            expiry: '12/24',
            cvv: '765',
            branch: 'Banglore',
            place: 'Banglore',
        },
        {
            cardNumber: '7654 8905 3376 9054',
            cardHolderName: 'ABC',
            expiry: '11/28',
            cvv: '987',
            branch: 'Mysore',
            place: 'Banglore',
        },

    ];

    const currentData = hardcodedData[currentSlide] || {};

    return (
        <div>
            <br />

            <form style={{ backgroundColor: '#484D6E', padding: '10px', borderRadius: '5px' }}>
                <div>
                    <label style={{ color: 'white' }}>Card Number:</label>
                    <input type="text" value={currentData.cardNumber || ''} readOnly />
                </div>
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <div>
                    <label style={{ color: 'white' }}>Card Holder Name:</label>
                    <input type="text" value={currentData.cardHolderName || ''} readOnly />
                </div>
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <div>
                    <label style={{ color: 'white' }}>Expiry:</label>
                    <input type="text" value={currentData.expiry || ''} readOnly />
                </div>
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <div>
                    <label style={{ color: 'white' }}>CVV:</label>
                    <input type="text" value={currentData.cvv || ''} readOnly />
                </div>
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <div>
                    <label style={{ color: 'white' }}>Branch:</label>
                    <input type="text" value={currentData.branch || ''} readOnly />
                </div>
                <hr style={{ borderTop: '2px solid #ccc' }} />
                <div>
                    <label style={{ color: 'white' }}>Place:</label>
                    <input type="text" value={currentData.place || ''} readOnly />
                </div>
            </form>
        </div>
    );
};

export default CreditCardForm;
