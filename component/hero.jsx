const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          paddingBottom: "150px",
          display: "flex",
          justifyContent: "space-between",
          width: "70vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            paddingTop: "10px",
            width: "350px",
          }}
        >
          <div
            style={{
              color: "#F64B4B",
              fontSize: "13px",
            }}
          >
            Let’s shift your business
          </div>
          <div>
            <h1>Shift your business fast with Shade Pro.</h1>
          </div>
          <div
            style={{
              fontSize: "19px",
              color: "#161C2D",
              opacity: "70%",
            }}
          >
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </div>
          <div>
            <p
              style={{
                width: "220px",
                height: "60px",
                backgroundColor: "#473BF0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                color: "white",
              }}
            >
              {" "}
              Get started a project
            </p>
          </div>
        </div>
        <img
          style={{
            width: "403px",
            height: "403px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
          }}
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
