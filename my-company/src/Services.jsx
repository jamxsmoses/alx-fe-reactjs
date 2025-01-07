function Services() {
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
      <h1 style={{ margin: "0" }}>Our Services</h1>
      <ul style={{ textAlign: "left" }}>
        <li style={{ margin: "0" }}>Technology Consulting</li>
        <li style={{ margin: "0" }}>Market Analysis</li>
        <li style={{ margin: "0" }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
