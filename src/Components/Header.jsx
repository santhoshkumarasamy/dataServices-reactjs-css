import Typed from 'react-typed';

const Header = () => {
  return (
    <header id='home' className='text-white h-screen w-full items-center grid pt-[-6rem]' >
        <div className=' max-w-[800px] text-center flex flex-col mx-auto my-auto '>
            <p className='uppercase text-green-400 font-bold text-sm mg:text-xl'>growing with data analytics</p>
            <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl ease-in-out duration-700 md:py-4'>
                Grow with Data
            </h1>
            <div className='flex justify-center items-center'>
                <p className='py-2 text-xl font-bold md:text-2xl lg:text-3xl ease-in-out duration-700'>Fast, Flexible financing for </p>
                <Typed
                strings={[
                    'BTB','BTC','SaSS'
                ]}
                typeSpeed={120}
                backSpeed={140}
                loop
                className=' text-gray-700 pl-2 py-2 text-xl font-bold md:text-2xl lg:text-4xl ease-in-out duration-700'
                />
            </div>
            <p className='p-3 font-bold text-gray-400 text-sm  md:text-2xl ease-in-out duration-700'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className=' bg-green-600 mx-auto md:mt-2 px-8 md:px-10 py-3 rounded-xl text-black font-bold text-sm md:text-lg lg:text-xl hover:text-white ease-in-out duration-500'>
                Get Started
            </button>
        </div>
    </header>
  )
}

export default Header
