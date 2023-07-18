
import  Button  from 'react-bootstrap/Button';
import { getStudentData, writeStudentData } from './controller';
import Navbar from './Navbar/Navbar';
import Bottomview from './Bottomview/Bottomview';


const Home = () => {
  return (
    <>
      <Navbar />
      <Bottomview /> 
    </>
  );
};

export default Home;