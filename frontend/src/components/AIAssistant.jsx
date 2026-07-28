function AIAssistant({ analysis }) {
  return (
    <div>
      <h3>AI Complaint Intake Assistant</h3>

      {analysis ? (
        <div>
          <p><strong>Summary:</strong> {analysis.summary}</p>
          <p><strong>Root Cause:</strong> {analysis.root_cause}</p>
          <p><strong>Recommendation:</strong> {analysis.recommendation}</p>
        </div>
      ) : (
        <p>Waiting for document...</p>
      )}
    </div>
  );
}

export default AIAssistant;