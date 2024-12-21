import React from 'react'
import { TypingEffect } from '../animations/typing-effect'

const HeroSection = () => {
    
    return (
        <div className="mt-15 mb-64">
            <div className='flex flex-wrap justify-center'>
                <div className='p-2 w-full lg:w-1/2'>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-left mt-6 tracking-wide">
                        Transform your{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                            coding skills.
                        </span>
                    </h2>
                    <TypingEffect text=" Struggling with DSA? Simplify it with Gurmeet's step-by-step approach" />

                    {/* <div className="join mt-12">
                        <button className="btn join-item btn-accent btn-outline">Button</button>
                    </div> */}

                    <div className="mt-10 pr-20">
                        <div class="border border-purple-300 p-6 max-w-4xl rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105">
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <h3 class="text-xl font-semibold ">47k+</h3>
                                <p class="">Views</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold ">128+</h3>
                                <p class="">Watch Hours</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold ">700+</h3>
                                <p class="">Subscribers</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    



                </div>
                <div className='pl-6 w-full lg:w-1/2 flex justify-center'>
                    <iframe className='shadow-[0_0_30px_blue] rounded-lg max-w-4xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105' width="500" height="280" src="https://www.youtube.com/embed/r7H7G1AgVVo?si=WNKCwv9j0g9fxD6x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </div>

    )
}

export default HeroSection