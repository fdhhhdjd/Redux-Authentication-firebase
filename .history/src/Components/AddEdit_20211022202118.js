import React, { useState } from "react";
import { useHistory } from "react-router";
import { Navbar } from "../import";
import { db as firebase } from "../utils/Firebase";
import "../Styles/AddEdit.css";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <h1>Add edit</h1>
    </>
  );
};

export default AddEdit;
