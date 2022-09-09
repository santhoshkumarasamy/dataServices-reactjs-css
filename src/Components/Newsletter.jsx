import React from 'react'

const Newsletters = () => {
  return (
    <section className='w-full py-16 text-white'>
        <div className=' grid max-w-[1240px] mx-auto lg:grid-cols-3 grid-cols-1'>
            <div className='flex flex-col col-span-2 px-4'>
                <h1 className=' font-bold text-3xl py-1'>Want tips & tricks to optimize your flow ?</h1>
                <p className=''>Sign Up to our newsletter and stay up to date.</p>
            </div>

            <div className='col-span-1 px-4 py-1 pt-2 my-2'>
                <form action="" className='flex flex-col md:flex-row gap-4 md:w-[70%] lg:w-full'>
                    <input type="email" placeholder='Enter your email' className=' rounded-sm px-4 py-2 w-full text-black selection:bg-green-400' />
                    <button className=' text-center mx-auto md:mx-0 w-fit px-6 py-2 rounded-md bg-green-600 border-green-600  ease-in-out duration-500 font-bold hover:text-black '>Submit</button>
                </form>
                <p className='py-4 text-sm'>We care about the protection of your data. Read out <a href="" className=' text-green-600 underline'>Privacy Policy</a></p>
            </div>
        </div>
    </section>
  )
}

export default Newsletters
