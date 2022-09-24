function TitleSection() {
  return (
    <div className="titleSection text-white text-center h-[460px] pt-[45px] md:text-left md:pl-[110px] xl:pl-[210px] xl:pt-[95px]">
      <h1 className="uppercase pb-[15px] font-bold text-[40px] md:pb-[40px] md:text-[70px]">
        We're back.
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        // data-aos-offset="200"

        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <div className="text-[20px] font-semibold px-[25px] md:pl-[90px] md:pr-[110px] lg:text-[22px] lg:pr-[180px] xl:pl-[190px] xl:pr-[220px]">
          <p className="pb-[25px]">
            For the first time in two and a half years, your Software
            Engineering Students Association is back in action!
          </p>
          <p className="pb-[30px]">
            We're coming back with more exciting events, extra academic support
            resources, and new career growth opportunities for uOttawa software
            engineers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TitleSection;
