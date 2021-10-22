import React, { useState } from "react";
import { useHistory } from "react-router";
import { Navbar } from "../import";
import { db as firebase } from "../utils/Firebase";
import "../Styles/AddEdit.css";
const initialState = {
  name: "",
  email: "",
  contact: "",
  status: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {};
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name 📛</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name..."
            value={name || ""}
            onChange={handleChange}
          />
          <label htmlFor="name">Email 📧</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
            value={email || ""}
            onChange={handleChange}
          />
          <label htmlFor="name">Contact Phone ☎️</label>
          <input
            type="number"
            id="contact"
            name="contact"
            placeholder="Your Contact Number..."
            value={contact || ""}
            onChange={handleChange}
          />
          <label htmlFor="name">Status 🛑 </label>
          <input
            type="text"
            id="contact"
            name="status"
            placeholder="Your Contact Status..."
            onChange={handleChange}
          />
          <input type="submit" value="save" />
        </form>
      </div>
    </>
  );
};

export default AddEdit;
