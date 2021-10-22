import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitial } from "../Redux/Actions";
import "../Styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.user);
  const handleChange = () => {};
  cont handleReset=()=>{}
  return (
    <>
      <Navbar />

      <div className="App">
        <h1>home</h1>
        <h3>hi,{current.displayName}</h3>
      </div>
      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <td style={{ textAlign: "center" }}>No.</td>
              <td style={{ textAlign: "center" }}>Name</td>
              <td style={{ textAlign: "center" }}>Email</td>
              <td style={{ textAlign: "center" }}>Contact</td>
              <td style={{ textAlign: "center" }}>Status</td>
              {!sort && <td style={{ textAlign: "center" }}>Action</td>}
            </tr>
          </thead>
          {!sort && (
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].contact}</td>
                    <td>{data[id].status}</td>
                    <td>
                      <Link to={`/update/${id}`}>
                        <button className="bttn btn-edit">Edit</button>
                      </Link>
                      <button
                        className="bttn btn-delete"
                        onClick={() => onDelete(id)}
                      >
                        Delete
                      </button>
                      <Link to={`/view/${id}`}>
                        <button className="bttn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {sort && (
            <tbody>
              {sortedData.map((id, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{id.name}</td>
                    <td>{id.email}</td>
                    <td>{id.contact}</td>
                    <td>{id.status}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        <label>Sort By</label>
        <select className="dropdown" name="colValue" onChange={handleChange}>
          <option value="">Please Select</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="contact">Contact</option>
          <option value="status">Status</option>
        </select>
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
        <br />
        <label htmlFor="">Status:</label>
        <button className="btn btn-active" onClick={() => filterData("Online")}>
          Online
        </button>
        <button
          className="btn btn-inactive"
          onClick={() => filterData("Offline")}
        >
          Offline
        </button>
      </div>
    </>
  );
};

export default Home;
