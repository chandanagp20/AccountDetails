import React from 'react';
import CardwithImage from './CardwithImage';
import CardHistory from './CardHistory';
import ContentOfCard from './ContentOfCard';
import AccountCard from './AccountCard';
import Form from './Form';



const Bottomview = () => {
  return (
    <div>
     <CardwithImage />
     <CardHistory />
      <ContentOfCard />
      <AccountCard
      CardHolderName="Chandana"
      AccountNumber="987654321"
      IFSCCode="CNN12345678"
      CVV="321"
       />
       <Form />
    </div>
    
     
       

  );
};

export default Bottomview;