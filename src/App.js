import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);

  const handleClick = (stateVar, func, value) => {
    func(stateVar + 1);
    setAll(all + 1);
    setAvg(avg + value);
  };

  return (
    <div>
      <h1>Give Feeeback</h1>
      <Button
        handleClick={() => {
          handleClick(good, setGood, 1);
        }}
        text="Good"
      />
      <Button
        handleClick={() => {
          handleClick(neutral, setNeutral, 0);
        }}
        text="Neutral"
      />
      <Button
        handleClick={() => {
          handleClick(bad, setBad, -1);
        }}
        text="Bad"
      />

      <h1>Statistics</h1>
      <Feedback text="Good" value={good} />
      <Feedback text="Neutral" value={neutral} />
      <Feedback text="Bad" value={bad} />
      <Feedback text="All" value={all} />
      <Feedback text="Average" value={avg / all || 0} />
      <Feedback text="Positive" value={(good / all) * 100 || 0} extra="%" />
    </div>
  );
};

const Feedback = ({ text, value, extra = "" }) => {
  return (
    <p>
      {text}: {value} {extra}
    </p>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
