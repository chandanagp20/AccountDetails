import React, { useState } from 'react';
import './style.css';
import { creditcardaccount } from '../controller';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expMonth, setExpMonth] = useState('month');
  const [expYear, setExpYear] = useState('year');
  const [cvv, setCvv] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleExpYearChange = (e) => {
    setExpYear(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCvvMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleCvvMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    creditcardaccount(cardNumber, cardHolder, expMonth, expYear, cvv);

  };

  return (

    <div className="container">
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <div className="image">
            <img src="clipart2155655.png" alt="" />
          </div>
          <div className="card-number-box">{cardNumber}</div>
          <div className="flexbox">
            {/* <div className="box">
              <span>card holder</span> */}
              <div className="card-holder-name">{cardHolder}</div>
            {/* </div> */}
            {/* <div className="box">
              <span>expires</span> */}
              <div className="expiration">
                <span className="exp-month">{expMonth}</span>
                <span className="exp-year">{expYear}</span>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>cvv</span>
            <div className="cvv-box">{cvv}</div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <span>card number</span>
          <input
            type="text"
            maxLength="16"
            className="card-number-input"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="inputBox">
          <span>card holder</span>
          <input
            type="text"
            maxLength="16"
            className="card-holder-input"
            value={cardHolder}
            onChange={handleCardHolderChange}
          />
        </div>
        <div className="flexbox">
          <div className="inputBox">
            <span>expiration mm</span>
            <select
              className="month-input"
              value={expMonth}
              onChange={handleExpMonthChange}
            >
              <option value="month" disabled>
                month
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="inputBox">
            <span>expiration yy</span>
            <select
              className="year-input"
              value={expYear}
              onChange={handleExpYearChange}
            >
              <option value="year" disabled>
                year
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="inputBox">
            <span>cvv</span>
            <input
              type="text"
              maxLength="4"
              className="cvv-input"
              value={cvv}
              onChange={handleCvvChange}
              onMouseEnter={handleCvvMouseEnter}
              onMouseLeave={handleCvvMouseLeave}
            />
          </div>
        </div>
        <input type="submit" value="submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default CreditCard;