import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full px-2 overflow-hidden">

            {/* background image */}
            <div className="absolute inset-0">
                <Image
                    src="/moviesBg.jpg"
                    alt="Movies Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* content layer */}
            <div className="w-full relative z-10 flex gap-3 md:gap-5 flex-col justify-center items-center h-full px-3 md:px-10 text-white">

                <h2 className='text-4xl md:text-6xl font-bold'>Unlimited movies, <br /> shows, and more</h2>

                <p className='text-lg md:text-xl font-semibold'>Starts at ₹149. Cancel at any time.</p>

                <p className='mt-2 font-semibold text-center'>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className='w-full flex justify-center items-center flex-col md:flex-row gap-4 md:gap-2'>
                    {/* email adresss input */}
                    <input
                        type="email"
                        placeholder='Email adress'
                        className='h-14 w-full md:w-96 px-4 bg-black/70 border border-zinc-600 rounded'
                    />

                    {/* get started button */}
                    <button className='h-14 w-fit px-6 text-2xl font-semibold text-white bg-red-600 hover:bg-red-700 rounded transition-all duration-300 cursor-pointer flex gap-1 items-center'>
                        Get Started
                        <ChevronRight height={30} />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Hero
