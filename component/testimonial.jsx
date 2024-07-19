const Testimonial = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#473BF0",
        color: "white",
        gap: "50px",
      }}
    >
      <div
        style={{
          color: "#68D585",
          fontSize: "13px",
          textTransform: "uppercase",
        }}
      >
        Testimonial
      </div>
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          width: "700px",
        }}
      >
        <h1>
          {" "}
          “Simply the best. Better than all the rest. I’d recommend this product
          to beginners and advanced users.”
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s"
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            fontSize: "13px",
          }}
        >
          {" "}
          <p>Ian Klein</p>
          <p style={{ opacity: "0.65" }}>Digital Marketer</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
