import React from 'react'
import dsaflowchat from '../assets/dsaflowchart.png'

const DSASection = () => {
    return (
        <div className="mt-[14rem]">
            <div className="flex flex-wrap justify-center">
                <div className='p-2 w-full lg:w-1/2 flex justify-center'>
                    <img src={dsaflowchat} alt="" />
                </div>
                <div className="p-[2.5rem] w-full lg:w-1/2 ">
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-left mt-6 tracking-wide">
                        Learn the most asked topics in {" "}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            DSA Preparation.
                        </span>
                    </h2>
                    <h2 className="text-md sm:text-sm lg:text-md text-left mt-6 tracking-wide">
                        Watch, Practice and Master with step-by-step explanations.
                        Each topic includes video tutorials, problems and tips.
                    </h2>
                    <div className="text-left">
                        <button href="#" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md mt-6 flex items-center">
                            Explore more
                            <svg className="w-6 h-6 text-blue-500 animate-left-right " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l6 6-6 6" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DSASection