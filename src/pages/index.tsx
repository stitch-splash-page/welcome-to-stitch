//next/image component uses browser native lazy loading
import Image from 'next/image'
// built-in component for appending elements to the head of the page
import Head from 'next/head';
import { NextSeo } from "next-seo";
import Hero from '../../components/Hero';
import AboutStitch from "../../components/AboutStitch"
import TextContainer from '../../components/Text-Container';

export default function Home() {
  return(
    <>
    <div className='h-full w-full'>
      {/* will render a head tag with a title and description for page.  Next SEO, we can pass SEO properties as an object and the package automatically adds the properties to the page head. delivers better SEO capability than client-side rendering. It also has an in-built head component to manage SEO meta information*/}
      <NextSeo 
      title="Home:Stitch"
      description='welcome to Stitch homepage'
      />
      <Head>
      <title>Stitch</title>
      </Head>
      <Hero/>
      <AboutStitch />
      <TextContainer />

  </div>
  </>
  )
}
