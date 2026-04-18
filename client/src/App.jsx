import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import AIDeskDemo from "./pages/demos/AIDeskDemo";
import TaskBoardDemo from "./pages/demos/TaskBoardDemo";
import ExpenseLedgerDemo from "./pages/demos/ExpenseLedgerDemo";
import InvoiceStudioDemo from "./pages/demos/InvoiceStudioDemo";
import FinanceToolkitDemo from "./pages/demos/FinanceToolkitDemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="demos/ai-desk" element={<AIDeskDemo />} />
        <Route path="demos/task-board" element={<TaskBoardDemo />} />
        <Route path="demos/expense-ledger" element={<ExpenseLedgerDemo />} />
        <Route path="demos/invoice-studio" element={<InvoiceStudioDemo />} />
        <Route path="demos/finance-toolkit" element={<FinanceToolkitDemo />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
