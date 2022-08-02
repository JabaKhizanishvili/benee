import React from 'react';
import { Link } from '@inertiajs/inertia-react'
// import HeroBg from "../assets/images/bg/1.png";
import { FiArrowRight } from "react-icons/fi";
import { projectLinks } from "../components/Data";
import { useRef, useState } from "react";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";
import Layout from "../Layouts/Layout";

// import img1 from "../assets/images/projects/1.png";
// import img2 from "../assets/images/projects/2.png";
// import img3 from "../assets/images/projects/3.png";
// import img4 from "../assets/images/projects/4.png";
// import img5 from "../assets/images/projects/5.png";
// import img6 from "../assets/images/projects/6.png";
// import img7 from "../assets/images/projects/7.png";
// import img8 from "../assets/images/projects/8.png";
// import img9 from "../assets/images/projects/3.png";
import TextSlide from "../components/TextSlide";

const Projects = ({ seo, projects }) => {
    console.log(projects.data, 'esaa');

    const [activeLink, setActiveLink] = useState(0);

    const [transform, setTransform] = useState("translate3d(0, 0, 0)");
    const [transformReverse, setTransformReverse] = useState(
        "translate3d(0, 0, 0)"
    );

    const bgImage = useRef();

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;

    const perspectiveFunction = (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;

        setTransform(`translate3d(-${mouseX}%, -${mouseY}%, 0)`);
        setTransformReverse(`translate3d(${mouseX}%, ${mouseY}%, 0)`);
    };

    return (
        <Layout seo={seo}>
            <>

                <section className="wrapper  pt-40 text-center min-h-screen">
                    {projectLinks.map((item, index) => {
                        return (
                            <Link
                                data-aos="fade-up"
                                key={index}
                                href={item.link}
                                className="fillup mb-2  text-zinc-500 xl:text-6xl lg:text-5xl md:text-4xl text-2xl block w-fit mx-auto uppercase transition "
                                style={{
                                    color: activeLink === index ? "#E9776D" : "",
                                }}
                                onClick={() => setActiveLink(index)}
                            >
                                <span
                                    aria-hidden="true"
                                    className={activeLink === index && "hidden"}
                                >
                                    {item.text}
                                </span>
                                {item.text}
                            </Link>
                        );
                    })}
                    <p
                        data-aos="fade-up"
                        className="text-center max-w-3xl mx-auto mt-20 regular"
                    >
                        We see every project as a chance to “leave our footprint” and explore
                        unique motion design techniques. We works with agencies and direct
                        clients: furthermore our experienced team can manage any stage of
                        production. We see every project as a chance to “leave our footprint”
                        and explore unique motion design techniques.
                    </p>
                </section>

                <MouseParallaxContainer
                    enableCSSTransition
                    useWindowMouseEvents
                    className="parallax py-20  relative"
                >
                    <div className="absolute left-0  w-full -z-10" style={{ top: "20%" }}>
                        <TextSlide />
                    </div>




                    <MouseParallaxChild
                        className="projectWrapper"
                        factorX={0.07}
                        factorY={0.05}
                    >
                        <Link to="/">
                            <div className="opacity-50 text-lg mb-2">Project Name</div>
                            <div
                                data-aos="zoom-in-up"
                                className="w-full overflow-hidden relative perspectiveImageContainer"
                                style={{ height: "728px" }}
                            >
                                <div
                                    className=" perspectiveImage bg-no-repeat bg-cover bg-right "
                                    ref={bgImage}
                                    onMouseMove={perspectiveFunction}
                                    style={{
                                        transform: transform,
                                        backgroundImage: `url('/assets/images/projects/1.png')`,
                                    }}
                                ></div>
                            </div>
                        </Link>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        className="projectWrapper flex flex-col lg:flex-row  justify-between items-start lg:my-20"
                        factorX={0.05}
                        factorY={0.07}
                    >
                        <MouseParallaxChild
                            className="lg:w-2/3 w-full lg:mr-10 "
                            factorX={0.06}
                            factorY={0.9}
                        >
                            <Link className="lg:w-2/3 w-full lg:mr-10 " to="/">
                                <div className="opacity-50 text-lg mb-2">Project Name</div>
                                <div
                                    data-aos="zoom-in"
                                    className="w-full overflow-hidden relative perspectiveImageContainer"
                                    style={{ height: "411px" }}
                                >
                                    <div
                                        className=" perspectiveImage reverse bg-no-repeat bg-cover bg-right "
                                        ref={bgImage}
                                        onMouseMove={perspectiveFunction}
                                        style={{
                                            transform: transformReverse,
                                            backgroundImage: `url('/assets/images/projects/2.png)`,
                                        }}
                                    ></div>
                                </div>
                            </Link>
                        </MouseParallaxChild>
                        <MouseParallaxChild
                            className="lg:w-1/2 w-full "
                            factorX={0.08}
                            factorY={0.7}
                        >
                            <Link className="lg:w-1/2 w-full " to="/">
                                <div className="opacity-50 text-lg mb-2">Project Name</div>
                                <div
                                    data-aos="zoom-out"
                                    className="w-full overflow-hidden relative perspectiveImageContainer"
                                    style={{ height: "411px" }}
                                >
                                    <div
                                        className=" perspectiveImage  bg-no-repeat bg-cover bg-right "
                                        ref={bgImage}
                                        onMouseMove={perspectiveFunction}
                                        style={{
                                            transform: transform,
                                            backgroundImage: `url('/assets/images/projects/2.png')`,
                                        }}
                                    ></div>
                                </div>
                            </Link>
                        </MouseParallaxChild>
                    </MouseParallaxChild>
                    <MouseParallaxChild
                        className="projectWrapper"
                        factorX={0.1}
                        factorY={0.1}
                    >
                        <Link to="/">
                            <div className="opacity-50 text-lg mb-2">Project Name</div>
                            <div
                                data-aos="fade-up"
                                className="w-full overflow-hidden relative perspectiveImageContainer"
                                style={{ height: "800px" }}
                            >
                                <div
                                    className=" perspectiveImage bg-no-repeat bg-cover bg-right "
                                    ref={bgImage}
                                    onMouseMove={perspectiveFunction}
                                    style={{
                                        transform: transform,
                                        backgroundImage: `url(${'/assets/images/projects/4.png'})`,
                                    }}
                                ></div>
                            </div>
                        </Link>
                    </MouseParallaxChild>

                </MouseParallaxContainer>



                <div className="wrapper flex items-center justify-center pb-20">
                    <button className="text-custom-pink-500 mx-3 p-2 text-3xl">1</button>
                    <button className=" mx-5 text-3xl">2</button>
                    <button className=" mx-5 text-3xl">3</button>
                </div>
            </>
        </Layout >
    );
};

export default Projects;
