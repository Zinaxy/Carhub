import { CustomFilter, Hero, SearchBar } from '@/components';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl'>Car Catalog</h1>
          <p>Explore our collection of premium cars</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='Fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
      </div>
    </main>
  );
}
