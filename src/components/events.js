import * as React from "react";

function Events(props) {
  return (
    <div
      id="events"
      className="inline-block mb-[50px] w-[300px] border-l-2 border-black pl-[20px] 
            py-[10px] mx-[20px] text-left"
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
