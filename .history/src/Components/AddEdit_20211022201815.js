import React from "react";
import { Navbar } from "../import";
import { db as firebase } from "../utils/Firebase";
const initialState = {
  name: "",
  email: "",
  contact: "",
};
const AddEdit = () => {
  return (
    <>
      <Navbar />
      <h1>Add edit</h1>
    </>
  );
};

export default AddEdit;
