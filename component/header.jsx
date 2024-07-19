const Header = () => {
  return (
    <header
      id="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 150px 150px 150px",
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Brainwave.io
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <p>Demos</p>
          <p>Page</p>
          <p>Support</p>
          <p>Contact</p>
        </div>
      </div>
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: "#473BF0",
          color: "white",
          padding: "10px 30px",
        }}
      >
        {" "}
        Get started a project{" "}
      </div>
    </header>
  );
};

export default Header;
