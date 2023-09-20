import { useState } from "react";

export function BillExercise() {
  const [bill, setBill] = useState("");
  // console.log(bill);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="bill-container">
      <MuhBill bill={bill} setBill={setBill}></MuhBill>
      <YourReview percentage={percentage1} setPercentage={setPercentage1}>How did you like the service?</YourReview>
      <YourReview percentage={percentage2} setPercentage={setPercentage2}>How did your friend like the service?</YourReview>
      <Pay bill={bill} tip={tip}></Pay>
      {bill > 0 && <Reset handleReset={handleReset}></Reset>}
    </div>
  );
}
function MuhBill({ bill, setBill }) {
  return (
    <div className="bill">
      <span>How much was the bill?</span>
      <input
        type="number"
        placeholder="Price..."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))} />
    </div>
  );
}
function YourReview({ children, percentage, setPercentage }) {
  return (
    <div className="you">
      <span>{children}</span>
      <select placeholder="select" value={percentage} onChange={(e) => setPercentage(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Reset({ handleReset }) {
  return (
    <button className="reset" onClick={handleReset}>
      <span>Reset</span>
    </button>
  );
}
function Pay({ bill, tip }) {
  return <div className={bill > 0 ? "pay" : "no-pay"}>
    {bill > 0 ? `You pay ${tip + bill} ($${bill}+$${tip} tip)` : `Please pay the bill`}
  </div>;
}
