'use client';

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleExploreCars = () => {
    // Logic to navigate to the car exploration page or perform any action
  };
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 px-16'>
        <h1 className='text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px]'>
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className='mt-5 text-[27px] font-light text-gray-700'>
          Streamline your car rental experience with our easy-to-use platform.
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='mt-10 bg-blue-700 text-white rounded-full px-10 py-3 hover:bg-blue-800 transition duration-300'
          handleClick={handleExploreCars}
        />
      </div>
      <div className='flex w-full items-end justify-end xl:flex-[1.5] xl:h-screen'>
        <div className='relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full'>
          <Image
            src='/hero.png'
            alt='Hero Image'
            fill
            className='object-contain'
          />

          <div className='absolute -right-1/4 -z-10 h-[590px] w-full overflow-hidden bg-linear-to-br from-[#223a73] via-[#344d86] to-white xl:-top-24 xl:-right-1/2 xl:h-screen rounded-tl-[12rem]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
