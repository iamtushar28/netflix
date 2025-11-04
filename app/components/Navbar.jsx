import React from 'react'
import { Languages } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='w-full h-fit py-2 px-2 md:px-36 flex justify-between items-center absolute top-0 left-0 right-0 z-50'>

      {/* logo */}
      <Image
        src={'/Netflix_Logo.png'}
        alt='netflix logo'
        height={100}
        width={100}
        className='h-14 md:h-20 w-fit'
      />

      {/* buttons */}
      <div className='flex gap-4'>

        <button className='px-3 py-1 text-white bg-black/60 border border-zinc-600 rounded flex gap-2'>
          <Languages size={20} />
          <span className='hidden md:block'>
            English
          </span>
        </button>
        <button className='px-3 py-1 text-white bg-red-600 hover:bg-red-700 rounded transition-all duration-300 cursor-pointer'>
          Sign In
        </button>

      </div>
    </nav>
  )
}

export default Navbar