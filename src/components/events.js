import * as React from "react";

function Events(props) {
  return (
    <div
      id="events"
      // this following line of code is to center vertically the placeholder events (aka, those without date)
      className={`${!props.date ? "h-[150px] pt-[50px] pb-[250px]" : null} 
      inline-block align-middle mb-[50px] w-[300px] h-[300px] border-l-2 border-black pl-[20px] py-[10px] mx-[20px] text-left`}
      key={props.id}
    >
      <p className="pb-[7px] text-[#4B4B4B] font-normal text-[16px]">
        {props.date}
      </p>
      <h3 className="pb-[7px] font-medium text-[24px]">{props.title}</h3>
      <h6 className="pb-[15px] font-semibold text-[16px]">{props.location}</h6>
      <p className="pb-[20px] font-medium text-14px">
        {props.invitation.length > 139
          ? props.invitation.substring(0, 139) + "..."
          : props.invitation}
      </p>
      {!props.date ? (
        <div className="flex gap-4 mr-[15px] md:mr-[100px] lg:mr-[200px] mb-[10px]">
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
      ) : null}
      <a
        rel="noreferrer noopener"
        target="_blank"
        href={props.instaLink}
        className="inline-block text-[#6480DB] hover:underline"
      >
        Learn more &nbsp; &#10132;
      </a>
    </div>
  );
}

export default Events;
