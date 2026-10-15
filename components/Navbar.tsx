import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440x] mx-auto flex justify-between items-center sm:px-16 px-6 py-6'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Car Rental Logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='min-w-[130px] text-blue-700 rounded-full bg-white min-w-[130px]'
        />
      </nav>
    </header>
  );
};

export default Navbar;
