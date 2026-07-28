import { useState } from "react";
import api from "../services/api";

function ComplaintForm({ setComplaint}) {
const [formData, setFormData] = useState({
  source: "",
  name: "",
  email: "",
  productName: "",
  strength: "",
  batchNumber: "",
  manufacturingDate: "",
  expiryDate: "",
  quantity: "",
  complaintDate: "",
  severity: "",
  priority: "",
  category: "",
  complaint: "",
});

  
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });

  if (name === "complaint") {
    setComplaint(value);
  }
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/complaints", formData);

      alert("Complaint Submitted Successfully!");

      console.log(response.data);

      setFormData({
  source: "",
  name: "",
  email: "",
  productName: "",
  strength: "",
  batchNumber: "",
  manufacturingDate: "",
  expiryDate: "",
  quantity: "",
  complaintDate: "",
  severity: "",
  priority: "",
  category: "",
  complaint: "",
});
    } catch (error) {
  console.error("Axios Error:", error);
  console.error("Message:", error.message);
  console.error("Response:", error.response);
  console.error("Data:", error.response?.data);

  if (error.response) {
    alert(JSON.stringify(error.response.data));
  } else {
    alert(error.message);
  }
}
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Log Customer Complaint</h2>
<p style={{ color: "#666", marginBottom: "20px" }}>
  API & FDF Quality Assurance Module
</p>
      <form onSubmit={handleSubmit}>

        <label>Customer Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          required
        />
        <label>Complaint Source</label>
<input
  type="text"
  name="source"
  value={formData.source}
  onChange={handleChange}
  style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
/>

<label>Product Name</label>
<input
  type="text"
  name="productName"
  value={formData.productName}
  onChange={handleChange}
/>

<label>Strength / Grade</label>
<input
  type="text"
  name="strength"
  value={formData.strength}
  onChange={handleChange}
/>

<label>Batch Number</label>
<input
  type="text"
  name="batchNumber"
  value={formData.batchNumber}
  onChange={handleChange}
/>

<label>Manufacturing Date</label>
<input
  type="date"
  name="manufacturingDate"
  value={formData.manufacturingDate}
  onChange={handleChange}
/>

<label>Expiry Date</label>
<input
  type="date"
  name="expiryDate"
  value={formData.expiryDate}
  onChange={handleChange}
/>

<label>Quantity Affected</label>
<input
  type="number"
  name="quantity"
  value={formData.quantity}
  onChange={handleChange}
/>

<label>Complaint Date</label>
<input
  type="date"
  name="complaintDate"
  value={formData.complaintDate}
  onChange={handleChange}
/>

<label>Initial Severity</label>
<select
  name="severity"
  value={formData.severity}
  onChange={handleChange}
  style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
>

  <option value="">Select</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>

<label>Priority</label>
<select
  name="priority"
  value={formData.priority}
  onChange={handleChange}
>
  <option value="">Select</option>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
 
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          required
        >
          <option value="">Select Category</option>
          <option value="Technical">Technical</option>
          <option value="Billing">Billing</option>
          <option value="Delivery">Delivery</option>
          <option value="Other">Other</option>
        </select>

        <label>Complaint</label>
        <textarea
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          rows="5"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          required
        />

        <button
  type="submit"
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  }}
>
  Save Complaint
</button>

      </form>
    </div>
  );
}

export default ComplaintForm;