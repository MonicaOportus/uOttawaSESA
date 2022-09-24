import logo from "../images/logo.png";
// import { Menu } from '@headlessui/react';

function Navbar () {

    // function MyDropdown() {
    //   return (
    //     <Menu>
    //         <div className="absolute lg:hidden w-[100%]">
    //             <Menu.Button><i className="fa-solid fa-2xl fa-bars absolute right-[50px]"></i></Menu.Button>
    //             <Menu.Items className="list-none flex flex-col bg-white mt-[25px]">
    //                 <Menu.Item className="py-4 navItem">
    //                 {({ active }) => (
    //                     <a
    //                     className={`${active}`}
    //                     href="/about"
    //                     >
    //                     About
    //                     </a>
    //                 )}
    //                 </Menu.Item>
    //                 <Menu.Item className="py-4 navItem">
    //                 {({ active }) => (
    //                     <a
    //                     className={`${active}`}
    //                     href="#events"
    //                     >
    //                     Events
    //                     </a>
    //                 )}
    //                 </Menu.Item>
    //                 <Menu.Item className="py-4 navItem">
    //                 {({ active }) => (
    //                     <a
    //                     className={`${active}`}
    //                     href="/resources"
    //                     >
    //                     Resources
    //                     </a>
    //                 )}
    //                 </Menu.Item>
    //                 <Menu.Item className="py-4 navItem">
    //                 {({ active }) => (
    //                     <a
    //                     className={`${active}`}
    //                     href="/partners"
    //                     >
    //                     Partners
    //                     </a>
    //                 )}
    //                 </Menu.Item>
    //                 <Menu.Item className="py-4 navItem">
    //                 {({ active }) => (
    //                     <a
    //                     className={`${active}`}
    //                     href="/contact"
    //                     >
    //                     Contact
    //                     </a>
    //                 )}
    //                 </Menu.Item>
    //             </Menu.Items>
    //         </div>
    //     </Menu>
    //   )
    // }

    return (
        <div className="pb-5">

            <div className="flex items-center justify-between pt-7 sticky"> {/* When you remove the icons and 
            add unecomment the pages change "flex" to "md:flex" and remove ... */}
                {/* <MyDropdown/> */}
                <a href="/">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-[110px] ml-[25px] md:ml-[110px] md:w-[151px] xl:ml-[210px]"
                    />
                </a>
                <div className="flex gap-4 mr-[15px] md:mr-[100px] lg:mr-[200px]">
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
                        href="/"
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
                        href="/"
                        className="hover:scale-[1.05]"
                    >
                        <i className="fa-xl fa-brands fa-github"></i>
                    </a>
                </div> 
                {/* <div 
                    className="hidden myNav flex-shrink mx-4 lg:flex list-none">
                    <a href="/about">
                        <li className="navItem">
                            About
                        </li>
                    </a>
                    <a href="#events">
                        <li className="navItem">
                            Events
                        </li>
                    </a>
                    <a href="/resources">
                        <li className="navItem">
                            Resources
                        </li>
                    </a>
                    <a href="/partners">
                        <li className="navItem">
                            Partners
                        </li>
                    </a>
                    <a href="/contact" className="pr-[50px] xl:pr-[170px]">
                        <li className="navItem">
                            Contact
                        </li>
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;