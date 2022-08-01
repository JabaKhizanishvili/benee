// import Bg from "../assets/images/bg/2.png";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { partners, team } from "../components/Data";
import { projectLinks } from "../components/Data";
import Layout from "../Layouts/Layout";

const About = ({ seo, partners, team }) => {

    console.log(team);

    const [activeLink, setActiveLink] = useState(0);
    return (
        <Layout seo={seo}>
            <>
                <section className="relative">
                    <div data-aos="zoom-in-up">
                        {" "}
                        <img
                            src={'/assets/images/bg/2.png'}
                            className="absolute left-1/2 -translate-x-1/2 top-24 -z-10 "
                            alt=""
                        />
                    </div>

                    <div className="wrapper min-h-screen flex flex-col justify-end items-start pb-20 pt-40">
                        <div data-aos="fade-down" className="text-3xl">
                            About us
                        </div>
                        <div
                            data-aos="fade-right"
                            className="lg:text-6xl  text-4xl mt-4 mb-8   opacity-50"
                        >
                            We work on delivering unique <br />
                            visual solutions to your company
                        </div>
                        <p
                            data-aos="fade-up"
                            className="regular max-w-2xl text-justify lg:text-base text-sm"
                        >
                            We see every project as a chance to “leave our footprint” and
                            explore unique motion design techniques. We works with agencies and
                            direct clients: furthermore our experienced team can manage any
                            stage of production. We see every project as a chance to “leave our
                            footprint” and explore unique motion design techniques.
                            <br />
                            <br />
                            Our work encompasses graphics and identity, strategy and
                            positioning, products and packaging, exhibitions and installations,
                            websites and digital experiences, advertising and communications,
                            data visualizations and typefaces, sound and motion.
                        </p>
                    </div>
                </section>
                <section className="py-20">
                    <div className="wrapper">
                        <div className="opacity-50 text-lg mb-10">Our partners</div>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                        }}
                        slidesPerView="8"
                        speed={10000}
                        mousewheelControl={true}
                        keyboardControl={true}
                        spaceBetween={20}
                        className="flex items-center"
                        breakpoints={{
                            200: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                            1100: {
                                slidesPerView: 6,
                            },
                            1200: {
                                slidesPerView: 7,
                            },
                            1300: {
                                slidesPerView: 8,
                            },
                        }}
                    >
                        {partners.map((partner, index) => {
                            return (
                                <SwiperSlide
                                    className="opacity-50 hover:opacity-100 transition-all duration-300"
                                    key={index}
                                >
                                    <img src={
                                        partner.latest_image != null
                                            ? "/" +
                                            partner.latest_image
                                                .path +
                                            "/" +
                                            partner.latest_image
                                                .title
                                            : null
                                    } className="max-h-12 m-auto" alt="err" />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </section>
                <section className="wrapper py-24 text-center">
                    <Link
                        data-aos="fade-up"
                        to="/"
                        className="fillup mb-2  text-zinc-500 xl:text-6xl lg:text-5xl md:text-4xl text-2xl block w-fit mx-auto uppercase transition !text-custom-pink-500"
                    >
                        WHAT WE DO
                    </Link>
                    {projectLinks.map((item, index) => {
                        return (
                            <Link
                                data-aos="fade-up"
                                key={index}
                                to={item.link}
                                className="fillup mb-2  text-zinc-500 xl:text-6xl lg:text-5xl md:text-4xl text-2xl block w-fit mx-auto uppercase transition "
                                onClick={() => setActiveLink(index)}
                            >
                                <span aria-hidden="true">{item.text}</span>
                                {item.text}
                            </Link>
                        );
                    })}
                </section>
                <section className="wrapper ">
                    <div className="text-3xl mb-10">Meet our team</div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mb-20">
                        {team.map((item, index) => {
                            return (
                                <div
                                    data-aos="flip-left"
                                    data-aos-duration="5000"
                                    key={index}
                                    className="w-full group "
                                >
                                    <div className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 mb-5 h-5/6">
                                        <img
                                            src={
                                                item.latest_image != null
                                                    ? "/" +
                                                    item.latest_image
                                                        .path +
                                                    "/" +
                                                    item.latest_image
                                                        .title
                                                    : null
                                            }
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="opacity-50  text-lg">{item.name}</div>
                                    <p className="regular">{item.position}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="wrapper flex items-center justify-center pb-20">
                        <button className="text-custom-pink-500 mx-3 p-2 text-3xl">1</button>
                        <button className=" mx-5 text-3xl">2</button>
                        <button className=" mx-5 text-3xl">3</button>
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default About;
