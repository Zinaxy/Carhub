'use client';
import { SearchManufacturerProps } from '@/types';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <ComboboxButton className='absolute top-3.5'>
            <Image
              src='/car-logo.svg'
              alt='car icon'
              width={20}
              height={20}
              className='ml-4'
            />
          </ComboboxButton>
          <ComboboxInput
            className={`search-manufacturer__input`}
            placeholder='Volkswagen'
          />
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
