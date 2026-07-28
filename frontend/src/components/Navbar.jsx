import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>AI Complaint System</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/login"
          style={{ color: "white", textDecoration: "none" }}
        >
          Login
        </Link>

        <Link
          to="/complaints"
          style={{ color: "white", textDecoration: "none" }}
        >
          Complaints
        </Link>

        <Link
          to="/complaint/new"
          style={{ color: "white", textDecoration: "none" }}
        >
          New Complaint
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;