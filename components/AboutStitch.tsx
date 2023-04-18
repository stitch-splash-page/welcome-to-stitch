import React from "react";
import Image from "next/image";
import AboutImg from "../public/stitchImg.png";

const About = () => {
    return (
    <section className=" font-sans px-5 py-20 border-solid border-9 border-amber-100  bg-white ">
        <div className=" container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="about-info">
            <h1 className="text-7xl font-bold mb-5 border-b-[5px]border-rose-500 pb-2">
            About Stitch
            </h1>
            <p className="pb-5 text-2xl">
                Looking to migrate from a traditional REST API to GraphQL but don't want to deal with the complexity and tedium of implementation? 
            </p>
            <p className="pb-5 text-2xl">
                This is where  <span className="font-bold">Stich</span>  comes into play. 
            </p>
        </div>

        <div className="about-img flex justify-end">
            <Image
        src={AboutImg}
        alt="Picture of the author"
        width={500}
        height={500}
    />
        </div>
        </div>
    </section>
    );
};

export default About;