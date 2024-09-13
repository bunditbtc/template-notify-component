import React, { useState } from "react";

const TwoStepPopupForm = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handlePreviousStep}>
            Back
          </button>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default TwoStepPopupForm;