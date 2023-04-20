import Link from 'next/link';
// hamburger menu only shown on mobile screens. import react-icons library
import { AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //Navbar hamburger menu open with options on click 
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className='py-4 shadow-xl bg-white'>
      <div className='flex items-center justify-between font-medium pl-6 pr-10'>
        <Link href='/'>
          <h1 className='font-barlow bold text-6xl text-rose-500 pt-1'>
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
            <Link href='/contact'>
              <li className='ml-10 font-ui-sans-serif  uppercase hover:border-b text-sm'>
                Contact US
              </li>
            </Link>
            <li className='ml-10 font-ui-sans-serif uppercase hover:border-b text-sm'> 
              <a href="https://github.com/oslabs-beta/stitch">GitHub</a>
            </li>
              <li className='ml-10 font-ui-sans-serif uppercase hover:border-b text-sm'> <a href="stitch-ql.app">Start</a> </li>
          </ul>
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {menuOpen && (
        <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-50'>
          <div className='bg-white w-3/4 mx-auto mt-20 rounded-lg p-4'>
            <div className='flex justify-end'>
              <button onClick={handleNav} className='px-3 py-1 rounded-full bg-gray-300 hover:bg-gray-400'>
                X
              </button>
            </div>
            <ul className='text-center'>
              <Link href='/'>
                <li className='block my-4 font-ui-sans-serif uppercase text-lg'>Home</li>
              </Link>
              <Link href='/docs'>
                <li className='block my-4 font-ui-sans-serif uppercase text-lg'>Docs</li>
              </Link>
              <Link href='/contact-us'>
                <li className='block my-4 font-ui-sans-serif uppercase text-lg'>Contact US</li>
              </Link>
              <li className='block my-4 font-ui-sans-serif uppercase text-lg'> 
                <a href="https://github.com/oslabs-beta/stitch">GitHub</a>
              </li>
              <Link href='/npm'>
                <li className='block my-4 font-ui-sans-serif uppercase text-lg'>npm</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
