import React from "react";
import Image from "next/image";
import cookieMonster from "../public/cookieMonster.png";
import jenny from "../public/jenny.png";
import nicole from "../public/nicole.png";
import harrison from "../public/harrison.png";

const ContactUs = () => {
    return (
    <div>
        <section className="text-center md:w-[60%] mx-auto mt-5 mb-5 pt-4">
         <h1 className='font-ui-sans-serif text-6xl text-rose-500 mb-6 pb-9'>Creators</h1>
        <div className="bio-container font-ui-sans-serif items-center grid grid-cols-6 gap-4 pb-8"> 
            <div className="single-contributor col-span-2 flex flex-col  items-center">
            <Image
            className="rounded-full"
            src={harrison}
            alt="Picture of contributor"
            width={100}
            height={100}
            />
            <p className="pt-3 pb-1">
                <a href="https://www.linkedin.com/in/harrison-shih-8a021578/" className=" underline decoration-rose-500 text-gray">Harrison Shih</a>
            </p>
             <div className="flex items-center">
            <a href="https://github.com/LatteBoy" className="text-neutral-800 dark:text-neutral-200 pl-2 pr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
            {" "}
            <a href="https://www.linkedin.com/in/harrison-shih-8a021578/" className="linkedIn text-gray pl-1 pr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
            </div>
                </div>
                <div className="single-contributor col-span-2 flex flex-col  items-center">
            <Image
            className="rounded-full"
            src={cookieMonster}
            alt="Picture of contributor"
            width={100}
            height={100}
            />
              <p className="pt-3 pb-1">
                 <a href="https://www.linkedin.com/in/keith-falcon-2750934a/" className="underline decoration-rose-500 text-gray">Keith Falcon</a>
            </p>
            <div className="flex items-center">
            <a href="https://github.com/falc0neye" className="text-neutral-800 dark:text-neutral-200 pl-2 pr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
            {" "}
            <a href="https://www.linkedin.com/in/keith-falcon-2750934a/" className="text-gray pl-1 pr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
            </div>
                </div>
                <div className="single-contributor col-span-2 flex flex-col  items-center">
            <Image
            className="rounded-full"
            src={cookieMonster}
            alt="Picture of contributor"
            width={100}
            height={100}
            />
            <p className="pt-3 pb-1">
                <a href="https://www.linkedin.com/in/nate-toll-a761a611a/" className="underline decoration-rose-500 text-gray">Nate Toll</a>
            </p>
            <div className="flex items-center">
            <a href="https://github.com/monster-truck" className="text-neutral-800 dark:text-neutral-200 pl-2 pr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
            {" "}
            <a href="https://www.linkedin.com/in/nate-toll-a761a611a/" className="text-gray pl-1 pr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
            </div>
                </div>
                <div className="single-contributor col-start-2 col-end-4 flex  flex-col  items-center">
            <Image
            className="rounded-full"
            src={nicole}
            alt="Picture of contributor"
            width={100}
            height={100}
            />
             <p className="pt-3 pb-1">
                 <a href="https://www.linkedin.com/in/nicoleyoung7501" className="underline decoration-rose-500 text-gray">Nicole Young</a>
            </p>
            <div className="flex items-center">
            <a href="https://github.com/nyoung19" className="text-neutral-800 dark:text-neutral-200 pl-2 pr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
            {" "}
            <a href="https://www.linkedin.com/in/nicoleyoung7501" className="text-gray pl-1 pr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
            </div>
                </div>
                <div className="single-contributor col-start-4 col-end-6 flex flex-col items-center">
            <Image
            className="rounded-full"
            src={jenny}
            alt="Picture of contributor"
            width={100}
            height={100}
            />
               <p className="pt-3 pb-1">
                 <a href="https://www.linkedin.com/in/jennyjennyoh/" className="underline decoration-rose-500 text-gray">Jenny Oh</a>
            </p>
            <div className="flex items-center">
            <a href="https://github.com/jennyjennyoh" className="text-neutral-800 dark:text-neutral-200 pl-2 pr-1">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        </a>
            {" "}
            <a href="https://www.linkedin.com/in/jennyjennyoh/" className="text-gray pl-1 pr-2">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="gray"
            viewBox="0 0 24 24">
            <path
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
        </a>
            </div>
                </div>
                </div>
            </section>
        </div>
);
};
export default ContactUs;