import { Link } from "react-router-dom";

const Expenses = () => {
    return (
      <div style={{ padding: "1rem 0", textAlign: "center" }}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Link to="/" style={{textAlign: "center", display: "block", marginRight: "10px"}}>Home</Link> {" "}
            <Link to="/users" style={{textAlign: "center", display: "block" }}>Users</Link>
        </div>
        <h2>Expenses</h2>
        <p>It`s testing page. Don`t pay attention :)</p>
      </div>
    )
  }
  
export default Expenses;