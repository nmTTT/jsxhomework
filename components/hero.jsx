const Hero = () => {
  return (
    <div className="flex justify-center w-[100vw]">
      <div className="pb-[150px] flex justify-between w-[60vw]">
        <div className="flex flex-col gap-[25px] pb-[10px] w-[350px]">
          <div className="text-[#F64B4B] text-[13px]">
            Let’s shift your business
          </div>
          <div>
            <h1>Shift your business fast with Shade Pro.</h1>
          </div>
          <div className="text-[19px] text-[#161C2D] opacity-70">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next consultancy website within few minutes.
          </div>
          <div>
            <button className=" w-[220px] h-[60px] bg-[#473BF0] flex items-center justify-center rounded-[10px] text-white">
              {" "}
              Get started a project
            </button>
          </div>
        </div>
        <img
          className="w-[26rem] h-[26rem] rounded-full"
          src="/images/Oval.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
