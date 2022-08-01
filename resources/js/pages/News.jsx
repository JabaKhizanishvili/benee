import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
import { news } from "../components/Data";
import { FiArrowRight } from "react-icons/fi";
import Layout from "../Layouts/Layout";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";
import { Route } from "react-router-dom";

const News = ({ seo, news }) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    let links = function (links) {
        let rows = [];
        //links.shift();
        //links.splice(-1);
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                            className={item.active ? "text-custom-pink-500 mx-3 p-2 text-3xl" : " mx-5 text-3xl"}
                        >
                            {item.label}
                        </Link>
                    );
                }
            });
        }
        return <div className="nums"> {rows.length > 1 ? rows : null} </div>;
    };

    let linksPrev = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[0].url}>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}
                <button className="arrow" style={{ transform: "rotate(-90deg)" }}>
                </button>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}

            </Link>
        ) : null;
    };
    let linksNext = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[links.length - 1].url}>
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                <button className="arrow" style={{ transform: "rotate(90deg)" }}>
                </button>
            </Link>
        ) : null;
    };

    const [hovered, setHovered] = useState(0);
    return (
        <Layout seo={seo}>
            <>
                <section className="wrapper sm:pt-52 pt-32 py-32">
                    <div className="uppercase mb-16 sm:text-5xl text-3xl">Whats new?</div>
                    <div className="flex justify-between items-center flex-col lg:flex-row">
                        <div className="lg:max-w-3xl mb-10 lg:mb-0">
                            {news.data.map((item, index) => {
                                const date = () => {
                                    let z = item.created_at.split("-");
                                    z[2] = z[2].split(":");
                                    z[2] = z[2][0].slice(0, z[2][0].search("T"));
                                    // if (z[1].length == 2 && z[1][0] == 0) {
                                    //     z[1] = z[1].slice(1);
                                    // }
                                    // else {
                                    //     return z;
                                    // }
                                    return z;
                                }


                                return (
                                    <Link
                                        href={route("client.news.show", item.id)}
                                        onMouseEnter={() => setHovered(index)}
                                        className=" w-full group "
                                        key={index}
                                    >
                                        <div
                                            className={`border-b border-white py-1 mb-2 transition-all  flex justify-between items-center  ${hovered === index && "text-custom-pink-500"
                                                }`}
                                        >
                                            <div className="regular uppercase">
                                                {item.title}{" "}
                                                <span className="regular pl-10 text-white opacity-50">
                                                    {`${date()[0]} ${date()[1]} ${date()[2]}`}
                                                </span>
                                            </div>{" "}
                                            <FiArrowRight className="inline-block h-5 w-5" />
                                        </div>
                                        <p className="opacity-50 text-justify regular mb-7">
                                            {item.short_description}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                        <MouseParallaxContainer
                            enableCSSTransition
                            useWindowMouseEvents
                            className="  h-full lg:w-1/2"
                        >
                            {news.data.map((img, index) => {
                                console.log(img.latest_image);
                                return (
                                    <MouseParallaxChild
                                        factorX={-0.05}
                                        factorY={-0.05}
                                        className={`${hovered === index ? "block" : "hidden"}`}
                                        key={index}
                                    >
                                        <img
                                            data-aos="zoom-in"
                                            src={img.latest_image != null
                                                ? "/" +
                                                img.latest_image.path +
                                                "/" +
                                                img.latest_image.title
                                                : null}
                                            alt=""
                                            className="align-middle m-auto "
                                            style={{ maxWidth: "80%" }}
                                        />

                                    </MouseParallaxChild>
                                );
                            })}
                        </MouseParallaxContainer>
                    </div>
                    {/* <div className="wrapper flex items-center justify-center pt-20">
                        <button className="text-custom-pink-500 mx-3 p-2 text-3xl">1</button>
                        <button className=" mx-5 text-3xl">2</button>
                        <button className=" mx-5 text-3xl">3</button>
                    </div> */}

                    <div className="wrapper flex items-center justify-center pt-20">
                        {linksPrev(news.links)}
                        <button className="">{links(news.links)}</button>
                        {linksNext(news.links)}
                    </div>
                </section>
            </>
        </Layout>
    );
};

export default News;
