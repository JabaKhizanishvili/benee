import React from "react";
// import img1 from "../assets/images/projects/3.png";
import { Link } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";
import { FiArrowLeft } from "react-icons/fi";

const SingleNews = ({ seo, news }) => {
    console.log(news);
    const date = () => {
        let z = news.created_at.split("-");
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
        <layout seo={seo}>
            <>
                <section className="py-32 relative wrapper">
                    <img
                        style={{ width: "60%" }}
                        src={'/assets/images/projects/3.png'}
                        alt=""
                        className="fixed left-1/2 -translate-x-1/2 top-40 -z-10 blur-xl  opacity-50"
                    />
                    <div className="text-center uppercase mb-5 text-3xl">
                        {news.title}
                    </div>
                    <div className="text-center opacity-50 regular">date: {`${date()[0]} ${date()[1]} ${date()[2]}`}</div>
                    <div className="max-w-lg mt-10 mx-auto text-justify">
                        {/* <p className="mb-5 regular">
                            Design thinking: Adding a single letter creates 92NY, a new
                            shorthand name that shifts the identity away from the world of YMCAs
                            and recommits the institution to the energy of New York. We drew the
                            new abbreviation in a proprietary typeface that will be used across
                            92NY’s offerings.
                        </p> */}
                        <p className="mb-5 regular">
                            {" "}
                            {news.short_description}
                        </p>
                        <p className="mb-5 regular">
                            {" "}
                            <img className="w-full" src={news.latest_image != null
                                ? "/" +
                                news.latest_image.path +
                                "/" +
                                news.latest_image.title
                                : null} alt="err" />
                        </p>
                        <p className="mb-5 regular">
                            {news.description}
                        </p>
                        {/* <p className="mb-5 regular">
                            New lessons: You can rent rooms at 92NY, and Harry Connick Jr. lived
                            there when he first moved to New York at age eighteen.
                        </p> */}
                    </div>
                    <div className="text-center mt-20">
                        <Link href={route("client.news.index")} className="regular text-center mx-auto">
                            Back to news <FiArrowLeft className="inline-block h-5 w-5" />
                        </Link>
                    </div>
                </section>
            </>
        </layout>
    );
};

export default SingleNews;
