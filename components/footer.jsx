const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#161C2D] text-white h-[70vh] w-[100vw]">
      <div className="flex justify-between w-[69vw]">
        <div className="flex flex-col gap-6">
          <p className="text-3xl">Ready to launch your next project?</p>
          <span className="opacFooter">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </span>
        </div>
        <button className="w-[220px] h-[60px] bg-[#473BF0] flex items-center justify-center rounded-[10px] text-white">
          Get started a project
        </button>
      </div>
      <div></div>
      <div>
        <div>
          <p>Brainwave.io</p>
          <span className="opacFooter">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </span>
        </div>
        <div>
          <div>
            <span className="opacFooter">Company</span>
            <p>About us</p>
            <p>Contact us</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
          <div>
            <span className="opacFooter">Product</span>
            <p>Features</p>
            <p>Pricing</p>
            <p>News</p>
            <p>Help desk</p>
            <p>Support</p>
          </div>
          <div>
            <span className="opacFooter">Services</span>
            <p>Digital Marketing</p>
            <p>Content Writing</p>
            <p>SEO for Business</p>
            <p>UI Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
