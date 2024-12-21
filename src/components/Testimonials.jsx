import React, {useEffect, useRef } from 'react'
import { testimonials } from '../constants/index.jsx'

const UserReviews = () => {
    const userRef = useRef(null);
    const intervalRef = useRef(null); // To store the interval
  
    const scrollLeft = () => {
      if (userRef.current) {
        userRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (userRef.current) {
        userRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    };
  
    useEffect(() => {
      // Start the automatic scroll
      intervalRef.current = setInterval(() => {
        scrollRight();
      }, 3000); // Scroll every 3 seconds
  
      // Clear the interval on unmount
      return () => {
        clearInterval(intervalRef.current);
      };
    }, []);
    return (
        <div className="mt-48 tracking-wide">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
                What my Students are saying
            </h2>
            <div className="relative m-6 p-6" >
                <button onClick={scrollLeft} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 '>←</button>

                <div ref={userRef} className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4 m-6">
                    <div className="carousel-item">
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
                    <div className="carousel-item">
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
                    <div className="carousel-item">
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
                </div>
                <button onClick={scrollRight} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10'> →</button>

            </div>


        </div>
    )
}

export default UserReviews