
import Button from 'react-bootstrap/Button';
import { getStudentData, writeStudentData } from './controller';
import Navbar from './Navbar/Navbar';
import Bottomview from './Bottomview/Bottomview';
import CreditCard from './Bottomview/CreditCard';
import CardwithImage from './Bottomview/CardwithImage';
import CardHistory from './Bottomview/CardHistory';

import PaymentForm from './Bottomview/CardHistory';
import DebitCard from './Bottomview/DebitCard';
import CardSlider from './Bottomview/CardSlider';
import CreditCardForm from './Bottomview/CreditCardForm';


const Home = () => {
  return (
    <>


      <Navbar />

      {/* <DebitCard /> */}
      <CardSlider />
      <CreditCardForm />




    </>
  );
};

export default Home;