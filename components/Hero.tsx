import React from "react";
import HeroImg from "../public/graphQl_schema.png"
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
    return (
    <section className="flex justify-center px-5 text-gray py-32 h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-rose-500">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-evenly">
            <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl">
             Restful API to GraphQl
            </h1>
            <p className="py-5">
            A lightweight GraphQL schema generation tool
            </p>
            <Link className=" btn bg-accent border-2 border-rose-500 font-ui-sans-serif text-rose-500 px-6 py-3 hover:bg-transparent "
            href='/'>
                Get Started
            </Link>
        </div>
        <div className="hero-img flex justify-end">
            <Image
            src={HeroImg}
            alt="Picture of the author"
            width={800}
            height={800}
            />
            </div>
            </div>
            </section>
    );
};

export default Hero;