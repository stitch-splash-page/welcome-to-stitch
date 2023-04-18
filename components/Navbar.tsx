import Image from 'next/image';
import Logo from '../public/whiteStitchLogo.png';
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
    <header className='py-4 shadow-xl bg-white'>
      <div className=' flex items-center justify-between font-medium pl-5 pr-10'>
        <Link href='/'>
          <h1 className='font-ui-sans-serif text-6xl text-rose-500 pt-1'>
          Stitch
        </h1>
        </Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex'>
            <Link href='/'>
              <li className='ml-0 font-ui-sans-serif uppercase hover:border-b text-sm'>Home</li>
            </Link>
            <Link href='/docs'>
              <li className='ml-10 font-ui-sans-serif  uppercase hover:border-b text-sm'>
                Docs
              </li>
            </Link>
            <Link href='/contact-us'>
              <li className='ml-10 font-ui-sans-serif  uppercase hover:border-b text-sm'>
                Contact US
              </li>
            </Link>
            <div>

            </div>
              <li className='ml-10 font-ui-sans-serif uppercase hover:border-b text-sm'> <a href="https://github.com/oslabs-beta/stitch">GitHub</a></li>
        
            <Link href='/npm'>
              <li className='ml-10 font-ui-sans-serif uppercase hover:border-b text-sm'>npm</li>
            </Link>
          </ul>
        </div>
        <div onClick={HandleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
