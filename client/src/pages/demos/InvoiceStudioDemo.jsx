import { useMemo, useState } from "react";
import DemoHeader from "./DemoHeader";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

function InvoiceStudioDemo() {
  const [client, setClient] = useState("Bright Paper Products");
  const [invoiceNo, setInvoiceNo] = useState("INV-2026-041");
  const [gst, setGst] = useState(18);
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [lines, setLines] = useState([
    { item: "Website maintenance", qty: 1, price: 14000 },
    { item: "Dashboard customization", qty: 1, price: 9000 }
  ]);
  const [message, setMessage] = useState("");

  const totals = useMemo(() => {
    const subtotal = lines.reduce((sum, line) => sum + line.qty * line.price, 0);
    const gstValue = (subtotal * Number(gst || 0)) / 100;
    return { subtotal, gstValue, grand: subtotal + gstValue };
  }, [lines, gst]);

  const add = () => {
    const parsedQty = Number(qty);
    const parsedPrice = Number(price);
    if (!item.trim() || parsedQty <= 0 || parsedPrice <= 0) return;

    setLines((current) => [...current, { item: item.trim(), qty: parsedQty, price: parsedPrice }]);
    setItem("");
    setQty("");
    setPrice("");
  };

  const invoiceText = [
    `Invoice No: ${invoiceNo}`,
    `Client: ${client}`,
    ...lines.map((line) => `${line.item} | Qty ${line.qty} | Rate ${line.price} | Total ${line.qty * line.price}`),
    `Subtotal: ${totals.subtotal}`,
    `GST: ${totals.gstValue}`,
    `Grand Total: ${totals.grand}`
  ].join("\n");

  const copyInvoice = async () => {
    try {
      await navigator.clipboard.writeText(invoiceText);
      setMessage("Invoice summary copied to clipboard.");
    } catch {
      setMessage("Clipboard is unavailable in this browser.");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <DemoHeader
          title="Invoice Studio Pro"
          subtitle="A cleaner billing interface with GST, line items, and export-friendly content."
        />

        <div className="detail-card">
          <div className="tool-form-grid">
            <input value={client} onChange={(event) => setClient(event.target.value)} placeholder="Client name" />
            <input value={invoiceNo} onChange={(event) => setInvoiceNo(event.target.value)} placeholder="Invoice number" />
            <input value={gst} onChange={(event) => setGst(event.target.value)} type="number" placeholder="GST %" />
            <button className="cta-btn" onClick={copyInvoice} type="button">Copy summary</button>
          </div>

          <div className="tool-form-grid" style={{ marginTop: "1rem" }}>
            <input value={item} onChange={(event) => setItem(event.target.value)} placeholder="Item name" />
            <input value={qty} onChange={(event) => setQty(event.target.value)} type="number" placeholder="Quantity" />
            <input value={price} onChange={(event) => setPrice(event.target.value)} type="number" placeholder="Rate" />
            <button className="outline-btn" onClick={add} type="button">Add line</button>
          </div>
        </div>

        <div className="invoice-layout">
          <article className="invoice-panel">
            <div className="invoice-head">
              <div>
                <p className="eyebrow">Invoice preview</p>
                <h3>{invoiceNo}</h3>
              </div>
              <div className="invoice-meta">
                <span>Client</span>
                <strong>{client}</strong>
              </div>
            </div>

            <div className="ledger-table">
              <div className="ledger-head">
                <span>Item</span>
                <span>Qty</span>
                <span>Rate</span>
                <span>Total</span>
              </div>
              {lines.map((line, index) => (
                <div className="ledger-row" key={`${line.item}-${index}`}>
                  <span>{line.item}</span>
                  <span>{line.qty}</span>
                  <span>{currency.format(line.price)}</span>
                  <span>{currency.format(line.qty * line.price)}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-card">
            <h3>Billing totals</h3>
            <div className="category-stack">
              <div className="category-row">
                <span>Subtotal</span>
                <strong>{currency.format(totals.subtotal)}</strong>
              </div>
              <div className="category-row">
                <span>GST</span>
                <strong>{currency.format(totals.gstValue)}</strong>
              </div>
              <div className="category-row total-row">
                <span>Grand total</span>
                <strong>{currency.format(totals.grand)}</strong>
              </div>
            </div>
            <p className="notice">{message}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default InvoiceStudioDemo;
