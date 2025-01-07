import React from "react";

function About() {
  return (
    <div
      style={{
        padding: "20px",
        width: "80%",
        margin: "auto",
        textAlign: "center",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "92vh",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0" }}>About Us</h1>
      <p style={{ margin: "0" }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
