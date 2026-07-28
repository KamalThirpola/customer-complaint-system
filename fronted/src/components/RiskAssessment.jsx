function RiskAssessment({ analysis }) {
  return (
    <div>
      <h3>AI Risk Assessment</h3>

      {analysis ? (
        <div>
          <p><strong>Risk Level:</strong> {analysis.risk}</p>
          <p><strong>Recommendation:</strong> {analysis.recommendation}</p>
        </div>
      ) : (
        <p>No analysis yet.</p>
      )}
    </div>
  );
}

export default RiskAssessment;