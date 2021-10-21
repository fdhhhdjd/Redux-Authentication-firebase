import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
const About = () => {
  return (
    <div style={{ marginTop: "150px" }}>
      <h2>
        <div style={{ paddingTop: "3rem", margin: "auto 0", fontSize: "30px" }}>
          I am a
          <span
            style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}
          >
            <Typewriter
              loop
              cursor
              cursorStyle={"_"}
              delaySpeed={20}
              deleteSpeed={1000}
              words={["developer", "Front-End Full Stack ReactJs 😍"]}
            />
          </span>
        </div>
      </h2>
    </div>
  );
};

export default About;
