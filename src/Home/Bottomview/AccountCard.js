import React from 'react';

const Card = (props) => {
  console.log('Card Holder Name:', props.CardHolderName);
  console.log('Account Number:', props.AccountNumber);
  console.log('IFSC Code:', props.IFSCCode);
  console.log('CVV:', props.CVV);

  return (
    <div style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '5px', width: '350px' }}>
      <h2>{props.CardHolderName}</h2>
      <p>Account Number: {props.AccountNumber}</p>
      <p>IFSC Code: {props.IFSCCode}</p>
      <p>CVV: {props.CVV}</p>
    </div>
  );
};

export default Card;
