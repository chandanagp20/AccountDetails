import React, { useState } from 'react';
import { addNewAccount } from '../controller';

const Form = () => {
  const [accountholdername, setAccountholdername] = useState('');
  const [accountnumber, setAccountnumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [ifsccode, setIfsccode] = useState('');
  const [branch, setBranch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    addNewAccount(accountnumber,accountholdername,ifsccode,cvv,branch);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Account Holder Name:
          <input
            type="text"
            value={accountholdername}
            onChange={(e) => setAccountholdername(e.target.value)}
          />
        </label>
        <br />
        <label>
        Account Number:
          <input
            type="text"
            value={accountnumber}
            onChange={(e) => setAccountnumber(e.target.value)}
          />
        </label>
        <br />
        <label>
        IFSC Code:
          <input
            type="text"
            value={ifsccode}
            onChange={(e) => setIfsccode(e.target.value)}
          />
        </label>
        <br />
        <label>
        CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <br />
        <label>
        Branch:
          <input
            type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </label>
        <br />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
