import React from 'react'
import instructor from '../assets/instructor.png'
import urbancompany from '../assets/companies/urbancompany.png'
import company3 from '../assets/companies/company3.png'
import swiggy from '../assets/companies/swiggy.svg'
import indmoney from '../assets/companies/indmoneylogo.avif'
import CircleAnimation from '../animations/CircleAnimation'



const Instructor = () => {
  return (
    <div className="mt-16  bg-white rounded-3xl z-3">
      <CircleAnimation/>
      <div className="pt-2">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-blue-800 font-semibold">
          About our Instructor
        </h2>
      </div>


      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 lg:w-1/2 flex justify-center">
          <img src={instructor} alt="Instructor"
            className="rounded-full w-[22rem] h-[22rem] object-cover ring-4 ring-offset-2 ring-offset-white ring-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105" />
        </div>

        <div className="p-2 mb-7 w-full lg:w-1/2">
        <div className="mt-6 mb-2">
          <h2 className='text-xl sm:text-4xl lg:text-4xl text-left tracking-wide bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-bold'>
            Gurmeet Singh
          </h2>
        </div>
          
          <h4 className='text-sm font-semibold text-blue-800'>
            SDE @Urban Company
          </h4 >

          <h4 className='text-sm mt-10 text-blue-800'>
            Gurmeet Singh is an ace software engineer working in the role of Software Development Engineer at Urban Company and a popular computer science instructor on FastForwardCoders. He is working in the industry for the past 3 years, working in different real-world problems. He is well known among students for his amazingly simplified explanations with real-life examples, enabling students to understand complex topics very easily. Many of his ex-students are now working in top product companies.
          </h4>

          <div className="flex flex-wrap  mt-10">
            <div className="flex justify-center bg-white items-center  h-16 ">
              <img src={urbancompany} alt="" className='mr-6 h-12' />
            </div>
            <div className="flex justify-center bg-white items-center  h-16">
              <img src={swiggy} alt="" className='mr-6  h-12' />
            </div>
            <div className="flex justify-center ml-2 bg-white items-center  h-16">
              <img src={indmoney} alt="" className='mr-6 h-12' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructor