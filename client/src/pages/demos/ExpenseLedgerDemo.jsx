import { useMemo, useState } from "react";
import DemoHeader from "./DemoHeader";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function ExpenseLedgerDemo() {
  const [rows, setRows] = useState([
    { desc: "Opening balance", type: "income", amount: 40000, category: "Capital" },
    { desc: "Paper supply payment", type: "expense", amount: 12000, category: "Inventory" },
    { desc: "Client billing", type: "income", amount: 22500, category: "Sales" }
  ]);
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Sales");

  const totals = useMemo(() => {
    const income = rows.filter((row) => row.type === "income").reduce((sum, row) => sum + row.amount, 0);
    const expense = rows.filter((row) => row.type === "expense").reduce((sum, row) => sum + row.amount, 0);
    const balance = income - expense;

    const categoryMap = rows.reduce((map, row) => {
      map[row.category] = (map[row.category] || 0) + row.amount;
      return map;
    }, {});

    const categories = Object.entries(categoryMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4);

    return { income, expense, balance, categories };
  }, [rows]);

  const add = () => {
    const parsedAmount = Number(amount);
    if (!desc.trim() || parsedAmount <= 0) return;

    setRows((current) => [
      { desc: desc.trim(), type, amount: parsedAmount, category },
      ...current
    ]);
    setDesc("");
    setAmount("");
    setCategory("Sales");
  };

  const balanceState = totals.balance >= 0 ? "healthy" : "risk";

  return (
    <section className="section">
      <div className="container">
        <DemoHeader
          title="BrightBooks Control"
          subtitle="A mini accounting dashboard with live totals, categories, and finance visibility."
        />

        <div className="detail-card">
          <div className="tool-form-grid">
            <input value={desc} onChange={(event) => setDesc(event.target.value)} placeholder="Entry description" />
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option>Sales</option>
              <option>Inventory</option>
              <option>Operations</option>
              <option>Capital</option>
            </select>
            <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" placeholder="Amount" />
          </div>
          <button className="cta-btn" style={{ marginTop: "1rem" }} onClick={add} type="button">Add entry</button>
        </div>

        <div className="dashboard-grid">
          <article className="metric-card large-metric">
            <span>Total income</span>
            <strong>{currency.format(totals.income)}</strong>
          </article>
          <article className="metric-card large-metric">
            <span>Total expense</span>
            <strong>{currency.format(totals.expense)}</strong>
          </article>
          <article className={`metric-card large-metric ${balanceState}`}>
            <span>Current balance</span>
            <strong>{currency.format(totals.balance)}</strong>
          </article>
        </div>

        <div className="demo-showcase-grid">
          <article className="detail-card">
            <h3>Category breakdown</h3>
            <div className="category-stack">
              {totals.categories.map(([name, value]) => (
                <div className="category-row" key={name}>
                  <span>{name}</span>
                  <strong>{currency.format(value)}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h3>Status insight</h3>
            <p>
              {totals.balance >= 0
                ? "Cash flow is currently positive. This dashboard style gives quick visibility for admin and accounting use."
                : "Expenses are ahead of income. A tool like this helps surface risk quickly and supports faster review."}
            </p>
            <div className="mini-metrics">
              <span className="metric-pill">{rows.length} entries</span>
              <span className="metric-pill">{totals.categories.length} top categories</span>
            </div>
          </article>
        </div>

        <article className="detail-card" style={{ marginTop: "1rem" }}>
          <h3>Recent entries</h3>
          <div className="ledger-table">
            <div className="ledger-head">
              <span>Description</span>
              <span>Type</span>
              <span>Category</span>
              <span>Amount</span>
            </div>
            {rows.map((row, index) => (
              <div className="ledger-row" key={`${row.desc}-${index}`}>
                <span>{row.desc}</span>
                <span className={`entry-badge ${row.type}`}>{row.type}</span>
                <span>{row.category}</span>
                <span>{currency.format(row.amount)}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ExpenseLedgerDemo;
