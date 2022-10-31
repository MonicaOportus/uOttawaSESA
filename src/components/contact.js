function Contact() {
  return (
    <div
      className="contact font-medium text-[18px] mt-[50px] py-[70px] px-[40px] text-white md:pl-[110px] xl:pr-[200px] 
         lg:grid lg:grid-cols-2 lg:gap-24 xl:pl-[210px]"
    >
      <div>
        <h1 className="font-bold text-[48px]">Partnerships</h1>
        <p className="font-semibold pb-[15px]">
          SESA is looking for sponsors and partners!
        </p>
        <p>
          If your company is interested in sponsoring SESA or in partnering with
          us for an event, please reach out via email to{" "}
          <span className="font-bold">uottawa.sesa@gmail.com</span> or through
          any of our social media platforms.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-[48px]">Contact</h1>
        <p className="pb-[15px]">
          Email us at{" "}
          <a
            href="mailto:uottawa.sesa@gmail.com"
            className="hover:underline font-bold"
          >
            uottawa.sesa@gmail.com
          </a>
        </p>
        <p>Or find us on:</p>
        <div className="flex gap-4 mr-[15px] pt-[10px] md:mr-[100px] lg:mr-[200px]">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/uottawasesa/"
            className="hover:scale-[1.05]"
          >
            <i className="fa-xl fa-brands fa-instagram"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/software-engineering-student-association/"
            className="hover:scale-[1.05]"
          >
            <i className="fa-xl fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/xaQwdX8gyx"
            className="hover:scale-[1.05]"
          >
            <i className="fa-xl fa-brands fa-discord"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/UOttawaSESA"
            className="hover:scale-[1.05]"
          >
            <i className="fa-xl fa-brands fa-square-facebook"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/DemianOportus/SESA"
            className="hover:scale-[1.05]"
          >
            <i className="fa-xl fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
