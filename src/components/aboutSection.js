function AboutSection() {
  return (
    <div
      className="aboutSection font-medium text-[22px] py-[70px] px-[40px] text-white md:pl-[110px] xl:pr-[200px] 
            lg:grid lg:grid-cols-2 lg:gap-24 xl:pl-[210px]"
    >
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="text-[48px] font-bold">What is SESA?</h2>

        <p className="font-bold py-[20px]">
          SESA is the University of Ottawa Software Engineering Students
          Association!{" "}
        </p>
        <p>
          We’re an informally and independently run student organization with
          the mission of enriching SEG student life, promoting software
          engineering as a field, and supporting students academically and
          professionally as they begin their careers.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="pt-[50px] lg:pt-[93px]"
      >
        <p className="font-bold">Our services include:</p>
        <ul className="list-disc pl-[35px]">
          <li>
            Professional development workshops and networking events for
            students
          </li>
          <li>Academic support and exam review sessions</li>
          <li>Social events and community building</li>
          <li>Student outreach</li>
          <li>Advocacy and messaging for the SEG community at uOttawa</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSection;
