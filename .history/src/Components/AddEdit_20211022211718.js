import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Navbar } from "../import";
import { db as firebaseDB } from "../utils/Firebase";
import { toast } from "react-toastify";
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
  const { name, email, contact, status } = state;
  const history = useHistory();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !status) {
      toast.error("Please Enter Input!!!");
    } else {
      if (!id) {
        firebaseDB.child("contacts").push(state, (error) => {
          if (error) {
            toast.error("Add Informatio Fail!!");
          } else {
            toast.success("Add Informatio Success.");
          }
        });
      } else {
        firebaseDB.child(`contacts/${id}`).set((state, error) => {
          if (error) {
            toast.error("Edit Information Fail!!");
          } else {
            toast.success("Edit Information Success.");
          }
        });
      }

      setTimeout(() => {
        history.push("/");
      }, 500);
    }
  };
  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
      return () => {
        setState({});
      };
    });
  }, [id]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
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
            value={status}
            placeholder="Your Contact Status..."
            onChange={handleChange}
          />
          <input type="submit" value={id ? "Update" : "Save"} />
        </form>
      </div>
    </>
  );
};

export default AddEdit;
