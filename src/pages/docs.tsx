
const Docs = () => {
    return (
        <div className="grid grid-cols-5">
        <nav className='bg-colorHunt-secondary border-r-colorHunt-primary basis-1/5 flex flex-col grow-0 border-r-2 col-span-1'>
            <h1 className='text-start font-medium text-md pt-7 pl-4'>Getting Started</h1>
            <ul className='text-start text-bold text-sm pt-2 pb-4 pl-6'>
                <li className="py-2 hover:border-b ">
                    Basic Usage
                </li>
                <li className="py-2 hover:border-b ">
                    Core Concepts
                </li>
                <li className="py-2 hover:border-b ">
                    Demo
                </li>
                <li className="py-2 hover:border-b ">
                    Coming Soon 
                </li>
            </ul>
            </nav>
            <section className=" col-span-">
            </section>
        </div>
    );
};

export default Docs;
