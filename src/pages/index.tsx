//next/image component uses browser native lazy loading
import Image from 'next/image'
// built-in component for appending elements to the head of the page
import Head from 'next/head';
import { NextSeo } from "next-seo";

export default function Home() {
  return(
    <div>
    <div className='h-full w-full'>
      {/* will render a head tag with a title and description for page.  Next SEO, we can pass SEO properties as an object and the package automatically adds the properties to the page head. delivers better SEO capability than client-side rendering. It also has an in-built head component to manage SEO meta information*/}
      <NextSeo 
      title="Home:Stitch"
      description='welcome to Stitch homepage'
      />
      <Head>
      <title>Stitch</title>
      </Head>
      <div className="flex flex-col justify-between py-12 text-xl">
        <h1 className='block'>A lightweight GraphQL schema generation tool</h1>
        <p className='block'> A full stack application that provides a visual representation of HTTP endpoints. 
          Users would be able to easily reconfigure existing REST API architecture into GraphQL schemas
          </p>
          </div>
          <div className="border rounded-lg h-80 w-80 bg-slate-400">
            <h1> image of our UI</h1>
          </div>
      </div>
      <div>
        <h2> Traditional REST API architecture is prone to over/underfetching data, and can be difficult to scale.

GraphQL simplifies client-server requests.

Once the decision has been made to migrate, implementing a GraphQL backend can be complex, tedious and error prone.

This is where Stitch comes into play.

Stitch is a lightweight graphQL schema generation tool. You can use stitch to load your RESTful HTTP endpoints and generate GraphQL schemas.</h2>
      </div>
  </div>
  )
}
