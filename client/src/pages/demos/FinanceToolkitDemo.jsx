import { useState } from "react";
import DemoHeader from "./DemoHeader";

function FinanceToolkitDemo() {
  const [gstOut, setGstOut] = useState("");
  const [marginOut, setMarginOut] = useState("");
  const [emiOut, setEmiOut] = useState("");
  const [saveOut, setSaveOut] = useState("");

  const calcGST = (event) => {
    event.preventDefault();
    const amount = Number(event.target.amount.value);
    const rate = Number(event.target.rate.value);
    if (amount <= 0 || rate < 0) return;
    const gst = (amount * rate) / 100;
    setGstOut(`GST: ${gst.toFixed(2)} | Final amount: ${(amount + gst).toFixed(2)}`);
  };

  const calcMargin = (event) => {
    event.preventDefault();
    const cost = Number(event.target.cost.value);
    const sell = Number(event.target.sell.value);
    if (cost <= 0 || sell <= 0 || sell < cost) return;
    const profit = sell - cost;
    const margin = (profit / sell) * 100;
    setMarginOut(`Profit: ${profit.toFixed(2)} | Margin: ${margin.toFixed(2)}%`);
  };

  const calcEmi = (event) => {
    event.preventDefault();
    const p = Number(event.target.loan.value);
    const annual = Number(event.target.annual.value);
    const n = Number(event.target.months.value);
    if (p <= 0 || annual <= 0 || n <= 0) return;
    const r = annual / 12 / 100;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiOut(`Monthly EMI: ${emi.toFixed(2)}`);
  };

  const calcSaving = (event) => {
    event.preventDefault();
    const goal = Number(event.target.goal.value);
    const months = Number(event.target.saveMonths.value);
    if (goal <= 0 || months <= 0) return;
    setSaveOut(`Required monthly saving: ${(goal / months).toFixed(2)}`);
  };

  return (
    <section className="section">
      <div className="container">
        <DemoHeader
          title="Revenue Insight Lab"
          subtitle="A cleaner business calculator suite for finance, pricing, and planning workflows."
        />

        <div className="calculator-grid">
          <form className="detail-card" onSubmit={calcGST}>
            <h3>GST calculator</h3>
            <input name="amount" type="number" placeholder="Base amount" required />
            <input name="rate" type="number" defaultValue="18" placeholder="GST rate" style={{ marginTop: "0.8rem" }} required />
            <button className="cta-btn" style={{ marginTop: "0.8rem" }} type="submit">Calculate</button>
            <p className="notice">{gstOut}</p>
          </form>

          <form className="detail-card" onSubmit={calcMargin}>
            <h3>Margin tool</h3>
            <input name="cost" type="number" placeholder="Cost price" required />
            <input name="sell" type="number" placeholder="Selling price" style={{ marginTop: "0.8rem" }} required />
            <button className="cta-btn" style={{ marginTop: "0.8rem" }} type="submit">Calculate</button>
            <p className="notice">{marginOut}</p>
          </form>

          <form className="detail-card" onSubmit={calcEmi}>
            <h3>EMI planner</h3>
            <input name="loan" type="number" placeholder="Loan amount" required />
            <input name="annual" type="number" placeholder="Annual interest %" style={{ marginTop: "0.8rem" }} required />
            <input name="months" type="number" placeholder="Months" style={{ marginTop: "0.8rem" }} required />
            <button className="cta-btn" style={{ marginTop: "0.8rem" }} type="submit">Calculate</button>
            <p className="notice">{emiOut}</p>
          </form>

          <form className="detail-card" onSubmit={calcSaving}>
            <h3>Savings goal</h3>
            <input name="goal" type="number" placeholder="Target amount" required />
            <input name="saveMonths" type="number" placeholder="Months to achieve" style={{ marginTop: "0.8rem" }} required />
            <button className="cta-btn" style={{ marginTop: "0.8rem" }} type="submit">Calculate</button>
            <p className="notice">{saveOut}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FinanceToolkitDemo;
