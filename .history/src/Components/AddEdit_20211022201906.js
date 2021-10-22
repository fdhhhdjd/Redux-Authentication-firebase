import React, { useState } from "react";
import { Navbar } from "../import";
import { db as firebase } from "../utils/Firebase";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  return (
    <>
      <Navbar />
      <h1>Add edit</h1>
    </>
  );
};

export default AddEdit;
