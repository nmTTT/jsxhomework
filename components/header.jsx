const Header = () => {
  return (
    <header className="flex justify-between px-[150px] pt-[20px] pb-[150px]">
      <div className="w-1/2 flex justify-between items-center">
        <p
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Brainwave.io
        </p>
        <div className="flex gap-7 text-center ">
          <p>Demos</p>
          <p>Page</p>
          <p>Support</p>
          <p>Contact</p>
        </div>
      </div>
      <button className="rounded-lg bg-[#473BF0] px-[30px] py-[10px] text-white">
        {" "}
        Get started a project{" "}
      </button>
    </header>
  );
};

export default Header;
