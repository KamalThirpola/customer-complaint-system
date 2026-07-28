import "./App.css";
import ComplaintChat from "./components/ComplaintChat";
import { useState } from "react";

import ComplaintForm from "./pages/ComplaintForm";
import UploadPanel from "./components/UploadPanel";
import AIAssistant from "./components/AIAssistant";
import RiskAssessment from "./components/RiskAssessment";

function App() {
  const [analysis, setAnalysis] = useState(null);
const [complaint, setComplaint] = useState("");
  return (
    <div className="container">
      <div className="left-panel">
        <ComplaintForm setComplaint={setComplaint} />
      </div>

      <div className="right-panel">
        <UploadPanel
  complaint={complaint}
  setAnalysis={setAnalysis}
/>

        <AIAssistant analysis={analysis} />

        <RiskAssessment analysis={analysis} />

        <ComplaintChat complaint={complaint} />
      </div>
    </div>
  );
}

export default App;