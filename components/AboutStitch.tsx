import React from "react";
import Image from "next/image";
import mediumLogo from "../public/mediumLogo.png"

const About = () => {
    return (
    <section className="font-sans px-5 py-20 border-solid border-9 border-amber-100 bg-white ">
        <div className=" container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="about-info">
            <h1 className="text-7xl font-bold mb-5 border-b-[5px]border-rose-500 pb-2">
            About Stitch
            </h1>
            <p className="pb-5 text-2xl">
                Looking to migrate from RESTful API architecture to GraphQL but don&apos;t want to deal with the complexity and tedium of implementation? 
            </p>
            <p className="pb-5 text-2xl">
                This is where  <span className="font-bold">Stitch</span>  comes into play. 
            </p>
        </div>
        <div className="about-img flex justify-end">
    <div className="max-w-xl mx-auto">
    <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    
    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <Image
            src={mediumLogo}
            alt="Picture of contributor"
            width={50}
            height={50}
            />
        <div className="space-y-2"> 
        <p className="text-slate-800">Medium</p>
        <a href="https://medium.com/@info.stitchql/rest-apis-to-graphql-switch-with-stitch-7c83ade0eb2a" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">  Read Article →</a>
    </div>
    </div>
    
</div>
</div>
        </div>
        </div>
    </section>
    );
};
export default About;