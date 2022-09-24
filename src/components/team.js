import * as React from "react";

function Team(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className={`${props.color} inline-block text-center text-white rounded-2xl w-[230px] h-[285px] pt-[15px] m-[15px]`}
    >
      <img
        src={props.img}
        alt="member"
        className="mx-auto mb-[10px] w-[130px] h-[130px] object-cover rounded-full border-2"
      />
      <p>{props.name}</p>
      <p>{props.position}</p>
      <p>{props.email}</p>
      <div className="flex gap-3 justify-center pt-[10px]">
        <a
          target="_blank"
          rel="noreferrer"
          href={`mailto:${props.email}`}
          className="hover:scale-[1.07]"
        >
          <i className="fa-lg fa-regular fa-envelope"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${props.linkedIn}`}
          className="hover:scale-[1.07]"
        >
          <i className="fa-lg fa-brands fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={`${props.instagram}`}
          className="hover:scale-[1.07]"
        >
          <i className="fa-lg fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default Team;
