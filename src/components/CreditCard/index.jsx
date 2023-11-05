import './styles.css';
import React, { useState, useEffect, useRef } from 'react';

export const CreditCard = () => {
  const [inputs, setInputs] = useState(['', '', '', '']);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isBlVisible, setIsBlVisible] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '');
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    console.log(value);

    if (value.length === 4) {
      if (index < 3) {
        inputRefs[index + 1].current.focus();
      } else {
        setIsButtonVisible(true);
        e.target.blur();
      }
    } else {
      setIsButtonVisible(false);
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card-line">
          {inputs.map((value, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(e, index)}
              maxLength="4"
              className="four-digits"
            />
          ))}
        </div>
        {isButtonVisible && (
          <button className="submit" onClick={() => setIsBlVisible(true)}>
            Submit
          </button>
        )}
      </div>
      {isBlVisible && (
        <div className="image">
          <img src="/bl.PNG" className="bl"></img>
        </div>
      )}
    </>
  );
};
