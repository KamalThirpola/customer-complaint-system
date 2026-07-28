function ComplaintDetails() {
  return (
    <div className="card">
      <h2>Complaint Details</h2>

      <input placeholder="Customer Name" /><br /><br />
      <input placeholder="Product Name" /><br /><br />
      <input placeholder="Batch Number" /><br /><br />

      <textarea
        rows="6"
        placeholder="Complaint Description"
      ></textarea>
    </div>
  );
}

export default ComplaintDetails;