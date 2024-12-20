import React from 'react'
import { testimonials } from '../constants/index.jsx'
import { div } from 'framer-motion/client'

const UserReviews = () => {
    return (
        <div className="mt-48 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                What my Students are saying
            </h2>

            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className='bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin'>
                            <p>{testimonial.comment}</p>
                            <div className="flex mt-8 items-start">
                                <img
                                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                    src={testimonial.image}
                                    alt=""
                                />
                                <div>
                                    <h6 className='mt-[1rem]'>{testimonial.user}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default UserReviews