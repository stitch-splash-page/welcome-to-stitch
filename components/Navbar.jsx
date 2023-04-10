import Image from 'next/image';
import Logo from '../public/stitchLogo.png';
import Link from 'next/link';
// hamburger menu only shown on mobile screens. import react-icons library
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

//fixed at the top of the screen
// on 2xl screens is doing a media query if the medium width is 1536px
//tailwind is mobile responsive first
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const HandleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='flex flex-row fixed w-full h-24 shadow-xl bg-white'>
      <div className='left-header-nav flex justify-between items-center h-full w-full px-6 2xl:px-16'>
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

        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <Link href='/'>
              <li className='ml-0 uppercase hover:border-b text-xl'>Home</li>
            </Link>
            <Link href='/about-us'>
              <li className='ml-10 uppercase hover:border-b text-xl'>
                About Us
              </li>
            </Link>
            <Link href='/github'>
              <li className='ml-10 uppercase hover:border-b text-xl'>GitHub</li>
            </Link>
            <Link href='/npm'>
              <li className='ml-10 uppercase hover:border-b text-xl'>npm</li>
            </Link>
          </ul>
        </div>
        <div onClick={HandleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
