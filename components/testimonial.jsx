const Testimonial = () => {
  return (
    <div className="w-[100vw] h-[60vh] flex flex-col justify-center items-center bg-[#473BF0] text-white gap-[50px]">
      <div className="text-[#68D585] text-[13px] uppercase">Testimonial</div>
      <div className="text-bold text-center w-[40rem]">
        <h1>
          {" "}
          “Simply the best. Better than all the rest. I’d recommend this product
          to beginners and advanced users.”
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-[15px]">
        <img
          className="rounded-full w-[50px] h-[50px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s"
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-0.5 text-[13px]">
          {" "}
          <p>Ian Klein</p>
          <p className="opacity-60">Digital Marketer</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
