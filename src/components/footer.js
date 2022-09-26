import whiteSesaLogo from "../images/white-sesa-logo.png";

function Footer(){
    const date = new Date();
    let thisYear = date.getFullYear();

    return(
        <div className="bg-[#424242] text-white text-[16px] text-center py-[60px]">
            <img
                className="mx-auto"
                alt="sesa-logo"
                src={whiteSesaLogo}
            />
            <p className="my-[7px]">uOttawa Software Engineering Students Association {thisYear} ©</p>
            <p className="underline">uottawa.sesa@gmail.com</p>
        </div>
    )
}

export default Footer;