import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { contactInfo, socialMedia } from "../components/Data";
import Layout from "../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";

const Contact = ({ seo }) => {
    const { errors, gphone, gemail, gaddress, gfacebook, ginstagram, gtwitter, gbehence, gdribbble } = usePage().props;
    const renderHTML = (rawHTML) =>
        React.createElement("div", {
            dangerouslySetInnerHTML: { __html: rawHTML },
        });
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <>
                <section className="relative overflow-hidden">
                    <div className="overlay relative ">
                        <div
                            className="map lg:absolute lg:top-0 lg:left-0 w-screen lg:h-full h-96"
                            style={{ filter: "grayscale(100%) invert(99%) contrast(99%)" }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.730590871275!2d44.76043011567813!3d41.72633198287671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472e00f27011f%3A0x6e479c2aeffe1b8!2s15%20Alexander%20Kazbegi%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1659016276718!5m2!1sen!2sge"
                                width="100%"
                                height="100%"
                                style={{ border: "0" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="right-shadow"></div>
                        <div className="wrapper flex flex-col lg:flex-row justify-between lg:items-end items-start h-full pb-20">
                            <h1
                                data-aos="fade-right"
                                className="uppercase text-5xl z-30 mb-10  lg:mb-0"
                            >
                                {__("client.navbar_contact", sharedData)}
                            </h1>
                            <form
                                data-aos="zoom-in-up"
                                className="relative z-30 w-full lg:w-auto"
                            >
                                <div className="text-3xl uppercase text-custom-pink-500 mb-5">
                                    get in touch
                                </div>
                                <div className="opacity-50 mb-5">
                                    Have some questions? <br />
                                    feel free to ask them anytime
                                </div>
                                <input
                                    className="bg-transparent border-b  block h-10 mb-7 sm:w-96 w-full placeholder:text-white regular outline-0"
                                    type="text"
                                    placeholder="Name"
                                />
                                <input
                                    className="bg-transparent border-b  block h-10 mb-7 sm:w-96 w-full placeholder:text-white regular outline-0"
                                    type="text"
                                    placeholder="Email"
                                />
                                <input
                                    className="bg-transparent border-b  block h-10 mb-7 sm:w-96 w-full placeholder:text-white regular outline-0"
                                    type="text"
                                    placeholder="Phone"
                                />
                                <textarea
                                    className="bg-transparent border-b  block h-10 mb-10 sm:w-96 w-full placeholder:text-white regular outline-0"
                                    placeholder="Message"
                                />
                                <button className="regular">
                                    Send message <FiArrowRight className="inline-block h-5 w-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 wrapper lg:gap-10 gap-5 lg:pb-32 pb-20 pt-10">
                    <div>
                        <div className="opacity-50 lg:mb-5 mb-2 regular">
                            <div className="h-px bg-white w-5 inline-block pr-2 align-middle"></div>{" "}
                            address
                        </div>
                        <div className="regular">{gaddress.value}</div>
                    </div>
                    <div>
                        <div className="opacity-50 lg:mb-5 mb-2 regular">
                            <div className="h-px bg-white w-5 inline-block pr-2 align-middle"></div>{" "}
                            phone
                        </div>
                        <div className="regular">{gphone.value}</div>
                    </div>
                    <div>
                        <div className="opacity-50 lg:mb-5 mb-2 regular">
                            <div className="h-px bg-white w-5 inline-block pr-2 align-middle"></div>{" "}
                            email
                        </div>
                        <div className="regular">{gemail.value}</div>
                    </div>
                    <div>
                        <div className="opacity-50 lg:mb-5 mb-2 regular">
                            <div className="h-px bg-white w-5 inline-block pr-2 align-middle"></div>{" "}
                            social
                        </div>
                        <div className=" flex items-center justify-start ">
                            {socialMedia.map((sm, index) => {
                                return (
                                    <a href={sm.link} key={index} className="mr-5">
                                        <img src={sm.icon} alt="" className="h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </footer>
            </>
        </Layout>
    );
};

export default Contact;
