import Image from "next/image";
import demo from "../../public/demo.gif"
const Docs = () => {
    return (
        <div className="grid grid-cols-5">
        <nav className='bg-colorHunt-secondary border-r-colorHunt-primary basis-1/5 flex flex-col grow-0 border-r-2 col-span-1'>
            <h1 className='text-start font-medium text-lg pt-7 pl-4'>Getting Started</h1>
            <ul className='text-start text-bold text-sm pt-2 pb-4 pl-6'>
                
                <li className="py-2 hover:border-b ">
                    <a href="#basic-usage">Basic Usage</a>
                </li>
                {/* <li className="py-2 hover:border-b ">
                    Core Concepts
                </li> */}
                {/* <li className="py-2 hover:border-b ">
                    <a href="#demo">Demo</a>
                </li> */}
                <li>
                    <a href="https://medium.com/@info.stitchql/rest-apis-to-graphql-switch-with-stitch-7c83ade0eb2a" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200 py-2 hover:border-b" target="_blank">  Read Article →</a>
                </li>
            </ul>
            </nav>
            <section className="col-start-2 col-end-7 py-6">
                <div className="py-4">
                <h1 id="basic-usage" className="font-semibold text-lg px-8"> Adding Endpoints</h1>
            <b/>
            <p className="px-20 pt-4"> - <span className="font-semibold text-rose-500">Copy & Paste</span> any endpoint that provides a JSON response into the input field and click <span className="font-semibold text-rose-500">Add</span>. Your endpoint will populate in the Endpoints view, and the data associated with the endpoint will appear within the JSON Response view.
            <br/> 
            <span className="font-semibold text-rose-500"> * </span>You can add multiple endpoints to the application, and clicking on the endpoints in the Endpoints view will allow you to quickly navigate between the different JSON responses.</p>    
                </div>
            <div className="py-4">
            <h2 className="font-semibold text-lg px-8">
            Adding Schema Fields   
            </h2>
            <p className="px-20 pt-4">
            - Once you’ve added endpoints, you can click the  <span className="font-semibold text-rose-500">+
            </span> button associated with each line of the JSON responses to add the desired fields to the GraphQL Schema view.    
            </p>    
            </div>
            <div className="py-4">
                <h2 className="font-semibold text-lg px-8">
            Configuring Your GraphQL Schema    
            </h2>
            <p className="px-20 pt-4">
            - As you add types to your schema, those will appear immediately in the GraphQL Schema view. The data types are initially inferred, but can be edited through the drop down menu associated with each schema line item. You can also set types to be <span className="font-semibold text-rose-500">!
            </span> required, or <span className="font-semibold text-rose-500">Delete
            </span> types that you no longer want to include in your final schema. 
            <br />  
            <div className="pt-4">
            - The <span className="font-semibold text-rose-500" >Type</span> input field allows you to name your schema. Simply type what you wish to name the schema and hit <span className="font-semibold text-rose-500">Submit
            </span>. You’ll see it reflected instantly in the schema view.   
            </div>
            
            </p>
            </div>
            <div className="py-4">
                <h2 className="font-semibold text-lg px-8">
            Exporting Your GraphQL Schema    
            </h2>
            <p className="px-20 pt-4">
            - Once you have your schema built to your liking, you can click the 
            copy icon to <span className="font-semibold text-rose-500">Copy
            </span> to clipboard and paste it directly into your schema.js file in your app.    
            </p>
            </div>
            <div className="py-4">
<h2 className="font-semibold text-lg px-8">
                Authenticating Through GitHub
            </h2>
            <p className="px-20 pt-4">
            - You can connect your Github account to unlock saving and loading views. Once authenticated, you will see extra fields that allow you to save any created schemas, as well as load any previously created and saved schema views.    
            </p>
            </div>
            <div className="py-4">
<h2 className="font-semibold text-lg px-8">
                Saving Views
            </h2>
            <p className="px-20 pt-4">
                - Add a name to your current view and click <span className="font-semibold text-rose-500">Save
            </span>. Your saved view will appear in the drop down menu next to the Save button.
            </p>
            </div>
            <div className="py-4">
<h2 className="font-semibold text-lg px-8">Loading Views
            </h2>
            <p className="px-20 pt-4"> - To select a previously saved view, simply click on the  <span className="font-semibold text-rose-500">drop down Menu
            </span> and select the desired schema view.
            </p>
            </div>
            <div className="pl-9">
            <Image
            src={demo}
            alt="Picture of contributor"
            width={800}
            height={800}
            />    
            </div>
            </section>
        </div>
    );
};

export default Docs;
