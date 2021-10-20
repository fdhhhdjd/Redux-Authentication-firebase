import React from "react";
import "./App.css";
import Login from "./Components/Login";
const [flag, setFlag] = useState(false);
const handleFlag = () => {
  setFlag(!flag);
};
function App() {
  return (
    <>
      <div className="container sign-up-mode">
        <div className="forms-container">
          <Login />
        </div>
      </div>
    </>
  );
}

export default App;
