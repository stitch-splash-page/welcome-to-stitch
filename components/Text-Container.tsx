import React from "react";
import Link from "next/link";

const TextContainer = () => {
    return (
        <section className="px-5 py-20 bg-gradient-to-r from-rose-400 to-red-500" id="Text-Container">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-5xl font-bold mb-5 border-b-[5px] mx-auto border-rose-500  pb-2">
          Simple and Customizable
        </h2>
        <p className="pb-5 text-2xl"> This lightweight tool allows you to quickly and easily generate GraphQL schemas from your existing RESTful endpoints, simplifying the process of creating a GraphQL backend and saving you time and effort.</p>
        <div className="pt-5">
            <Link className="bg-accent rounded border-2 border-white font-ui-sans-serif text-white px-6 py-3 hover:bg-transparent " href='/docs'>
            Learn More
        </Link>
        </div>
      </div>
      
    </section>
    )
}

export default TextContainer;