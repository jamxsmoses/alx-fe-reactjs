import React from "react";

function Home() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "92vh",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ margin: "0" }}>Welcome to Our Company</h1>
      <p style={{ margin: "0" }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;
