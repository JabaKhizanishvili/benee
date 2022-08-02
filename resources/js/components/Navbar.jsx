import React from "react";
import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../assets/images/logo/1.png";
import { Link, usePage } from "@inertiajs/inertia-react";
import { navigations, socialMedia } from "./Data";

// import img1 from "../assets/images/navbar/1.png";
// import img2 from "../assets/images/navbar/2.png";
// import img3 from "../assets/images/navbar/3.png";
// import img4 from "../assets/images/navbar/4.png";
// import img5 from "../assets/images/navbar/5.png";
// import img6 from "../assets/images/navbar/6.png";
// import img7 from "../assets/images/navbar/7.png";
// import img8 from "../assets/images/navbar/8.png";
// import img9 from "../assets/images/navbar/9.png";

const Navbar = () => {
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;

    const navigations = [
        {
            link: route("client.home.index"),
            text: __("client.navbar_home", sharedData),
        },
        {
            link: route("client.aboutus"),
            text: __("client.navbar_about_us", sharedData),
        },
        {
            link: route("client.project.index"),
            text: __("client.navbar_portfolio", sharedData),
        },
        {
            link: route("client.news.index"),
            text: __("client.navbar_news", sharedData),
        },
        {
            link: route("client.contact.index"),
            text: __("client.navbar_contact", sharedData),
        },
    ];

    const {
        errors,
        gphone,
        gemail,
        gaddress,
        locales,
        currentLocale,
        locale_urls,
        pathname
    } = usePage().props;

    // const { pathname } = usePage().props;

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIndexHovered(0);
    };

    const [indexHovered, setIndexHovered] = useState(0);


    return (
        <>
            {/* menu */}
            <div
                className={`fixed w-screen h-screen bg-black left-0 top-0 z-50 transition-all ease duration-1000  ${!showMenu && "invisible opacity-0"
                    } `}
            >
                <div className="wrapper h-full">
                    <div className=" h-full max-w-7xl mx-auto flex items-center justify-between">
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">

                                <div className="selected mr-3 text-xl regular">{currentLocale}</div>
                                {currentLocale == "ge" ? (
                                    <Link href={locale_urls["English"]}>
                                        {"en"}

                                    </Link>
                                ) : (
                                    <Link href={locale_urls["ქართული"]}>
                                        {"ge"}
                                    </Link>
                                )}
                            </div>
                            {navigations.map((nav, index) => {
                                return (
                                    <Link
                                        onMouseEnter={() => setIndexHovered(index)}
                                        onClick={() => setShowMenu(false)}
                                        href={nav.link}
                                        key={index}
                                        className={`xl:text-5xl lg:text-4xl md:text-3xl text-2xl mb-3 nav_link block transition-all ease opacity-50 hover:opacity-100 ${index === 0 && " !duration-300"
                                            } ${showMenu ? "translate-x-0" : "-translate-x-full"} ${nav.link === pathname &&
                                            "text-custom-pink-500 opacity-100"
                                            }  `}
                                        style={{ transitionDuration: (index * 1) / 2 + "s" }}
                                    >
                                        {nav.text}
                                    </Link>
                                );
                            })}
                            <div className=" flex items-center justify-start md:mt-20 mt-10">
                                {socialMedia.map((sm, index) => {
                                    return (
                                        <a
                                            href={sm.link}
                                            key={index}
                                            className={`opacity-30 hover:opacity-100 mr-5 transition-all duration-500 `}
                                        >
                                            <img src={sm.icon} alt="" className="h-6" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className={`hidden sm:block images h-full xl:w-2/3 w-1/2 relative transition-all duration-1000 overflow-hidden ${showMenu ? "translate-y-0 " : "translate-y-full"
                                }`}
                        >
                            <div
                                className={`${indexHovered === 0
                                    ? "visible opacity-100 translate-x-0"
                                    : "invisible opacity-0 translate-x-full"
                                    } flex items-center justify-center h-full transition duration-700  w-auto absolute right-0 top-0  `}
                            >
                                <img src={'/assets/images/navbar/1.png'} alt="" />
                                <img src={'/assets/images/navbar/2.png'} alt="" className="md:ml-10 ml-1 mb-10" />
                            </div>
                            <div
                                className={`${indexHovered === 1
                                    ? "visible opacity-100 -translate-y-1/2"
                                    : "invisible opacity-0 translate-y-1/2"
                                    } absolute right-0 top-1/2 -translate-y-1/2 flex items-start justify-center h-auto transition duration-700`}
                            >
                                <img src={'/assets/images/navbar/3.png'} alt="" className="md:mr-5 mr-1" />
                                <img src={'/assets/images/navbar/4.png'} alt="" />
                            </div>
                            <div
                                className={`${indexHovered === 2
                                    ? "visible opacity-100 translate-x-0"
                                    : "invisible opacity-0 -translate-x-1/2"
                                    } absolute right-0 top-0 flex items-center justify-center h-full transition duration-700  `}
                            >
                                <img src={'/assets/images/navbar/5.png'} alt="" className="-translate-y-20" />
                                <img src={'/assets/images/navbar/6.png'} alt="" className="mx-8" />
                                <img src={'/assets/images/navbar/7.png'} alt="" className="translate-y-20" />
                            </div>
                            <div
                                className={`${indexHovered === 3
                                    ? "visible opacity-100 translate-y-0"
                                    : "invisible opacity-0 -translate-y-full"
                                    } absolute right-0 top-0 flex items-center justify-center h-full transition duration-700  w-auto `}
                            >
                                <img src={'/assets/images/navbar/3.png'} alt="" />
                            </div>
                            <div
                                className={`${indexHovered === 4
                                    ? "visible opacity-100 "
                                    : "invisible opacity-0 "
                                    } fixed right-0 top-0 flex items-center justify-center w-screen h-screen transition duration-700 `}
                            >
                                <img
                                    src={'/assets/images/navbar/4.png'}
                                    alt=""
                                    className="fixed right-0 bottom-0 w-auto  -z-10 "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* header */}
            <div
                className={`${showMenu ? "fixed" : "absolute"
                    } left-0 top-0 w-full z-50`}
            >
                <div className="wrapper flex justify-between items-center py-3">
                    <Link href={route("client.home.index")}>
                        <img src={'/assets/images/logo/1.png'} alt="" />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className={`py-2 menuButton group w-10 ${showMenu && "close"}`}
                    >
                        <div
                            className="bg-white h-px w-full duration-300  origin-right group-hover:w-full transition  group-hover:!scale-x-100"
                            style={{ transform: "scaleX(0.25)" }}
                        ></div>
                        <div className="bg-white h-px w-full duration-300 scale-x-50 origin-right  my-1 group-hover:scale-x-100 transition "></div>
                        <div className="bg-white h-px w-full duration-300 transition "></div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
