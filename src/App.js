import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (stateVar, func) => {
    func(stateVar + 1);
  };

  return (
    <div>
      <h1>Give Feeeback</h1>
      <Button
        handleClick={() => {
          handleClick(good, setGood);
        }}
        text="Good"
      />
      <Button
        handleClick={() => {
          handleClick(neutral, setNeutral);
        }}
        text="Neutral"
      />
      <Button
        handleClick={() => {
          handleClick(bad, setBad);
        }}
        text="Bad"
      />

      <h1>Statistics</h1>
      <Feedback text="Good" value={good} />
      <Feedback text="Neutral" value={neutral} />
      <Feedback text="Bad" value={bad} />
    </div>
  );
};

const Feedback = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
