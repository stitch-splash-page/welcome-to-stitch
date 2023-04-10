import Image from 'next/image';
import Logo from '../public/stitchLogo.jpg';
import Link from 'next/link';

//fixed at the top of the screen
// on 2xl screens is doing a media query if the medium width is 1536px
//tailwind is mobile responsive first
const Navbar = () => {
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-white'>
      <ul class='left-header-nav flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href='/'>
          <Image
            //importing the logo
            src={Logo}
            alt='Stitch Logo'
            width='205'
            height='75'
            className='cursor-pointer'
            priority
          />
        </Link>
      </ul>
      <div>
        <ul class='right-header-nav'>
          <a href='/about-us'>About Us</a>
          <a href=''>Version</a>
          <a href='/'>Home</a>
          <a href='/github'>GitHub</a>
          <a href='npm'>npm</a>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
