import React from "react";

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
            {/* <Image
        src={AboutImg}
        alt="Picture of the author"
        width={500}
        height={500}
    /> */}
     <div className="max-w-7xl mx-auto">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg>
        <div className="space-y-2">
          <p className="text-slate-800">Medium</p>
          <a href="/" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a>
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