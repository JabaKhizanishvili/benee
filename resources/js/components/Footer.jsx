// import Logo from "../assets/images/logo/1.png";
import React from "react";
import { socialMedia } from "./Data";
// import { Link, useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";

const Footer = ({ seo, page, }) => {
    const { pathname } = usePage().props;
    // const { errors, gphone, gemail, gaddress } = usePage().props;
    const { errors, gphone, gemail, gaddress, gfacebook, ginstagram, gtwitter, gbehence, gdribbble } = usePage().props;
    const contactInfo = {
        email: gemail.value,
        tel: gphone.value,
        location: gaddress.value,
    };

    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;
    return (
        <div
            className="wrapper py-10 text-center "
            style={{ display: pathname === route("client.contact.index") && "none" }}
        >
            <Link href="/">
                <img src={'/assets/images/logo/1.png'} alt="" className="mx-auto mb-10" />
            </Link>
            <div className="uppercase sm:text-4xl text-2xl mb-10">{__("client.footer_getintouch", sharedData)}</div>

            <div className=" flex items-center justify-center mb-8">
                {socialMedia.map((sm, index) => {
                    return (
                        <a href={sm.link} key={index} className={` mx-3  `}>
                            <img src={sm.icon} alt="" className="h-5" />
                        </a>
                    );
                })}
            </div>
            <a className="mb-2 block regular" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
            </a>
            <a className="mb-2 block regular" href={`tel:${contactInfo.tel}`}>
                {contactInfo.tel}
            </a>
            <a
                className="mb-2 block regular"
                href="https://www.google.com/maps/place/15+Alexander+Kazbegi+Ave,+T'bilisi/@41.726332,44.7604301,17z/data=!3m1!4b1!4m5!3m4!1s0x404472e00f27011f:0x6e479c2aeffe1b8!8m2!3d41.726328!4d44.7626188"
            >
                {contactInfo.location}
            </a>
        </div>
    );
};

export default Footer;
