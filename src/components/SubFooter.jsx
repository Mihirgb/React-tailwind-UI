import React, { useState, useEffect } from 'react';
import 'tw-elements';
import { useInView } from 'react-intersection-observer';
import Youtube from '../assets/icons/youtube.png';
import Telegram from '../assets/icons/telegram.png';
import Linkedin from '../assets/icons/linkedin.png';
import Instagram from '../assets/icons/instagram.png';

const CountUp = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startNumber = 0;
    const increment = targetNumber / (duration / 16);

    const updateCount = () => {
      startNumber += increment;
      if (startNumber < targetNumber) {
        setCount(Math.floor(startNumber));
        requestAnimationFrame(updateCount);
      } else {
        setCount(targetNumber); 
      }
    };

    updateCount();
  }, [targetNumber, duration]);

  return <span className="text-6xl font-extrabold text-white">{count}+</span>;
};

const SubFooter = () => {
  const { ref: youtubeRef, inView: youtubeInView } = useInView();
  const { ref: telegramRef, inView: telegramInView } = useInView();
  const { ref: linkedinRef, inView: linkedinInView } = useInView();
  const { ref: instagramRef, inView: instagramInView } = useInView();

  return (
    <>
      <div className="p-36 ml-16 mr-16">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Need help understanding{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Coding Concepts?
          </span>
        </h2>

        <h2 className="text-xl sm:text-xl lg:text-2xl text-center mt-6 tracking-wide">
          Ask your questions - No concept is too big or too small.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center">
        <button
          ref={youtubeRef}
          onClick={() => window.open('https://www.youtube.com/@FastForwardCoders/', '_blank')}
          className="w-60 h-60 border border-gray-300 flex flex-col items-center justify-center gap-y-2 mr-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
        >
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            {youtubeInView && <CountUp targetNumber={700} duration={2000} />}
          </span>
          <span className="inline-flex font-semibold flex items-center gap-x-2">
            Youtube
            <img src={Youtube} alt="" className="w-8 h-8" />
          </span>
        </button>

        <button
          ref={telegramRef}
          onClick={() => window.open('https://telegram.me/FastForward_Coders', '_blank')}
          className="w-60 h-60 border border-gray-300 flex flex-col items-center justify-center gap-y-2 mr-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
        >
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            {telegramInView && <CountUp targetNumber={600} duration={2000} />}
          </span>
          <span className="inline-flex font-semibold flex items-center gap-x-2">
            Telegram
            <img src={Telegram} alt="" className="w-8 h-8" />
          </span>
        </button>

        <button
          ref={linkedinRef}
          onClick={() => window.open('https://www.linkedin.com/in/gurmeetsingh2003/', '_blank')}
          className="w-60 h-60 border border-gray-300 flex flex-col items-center justify-center gap-y-2 mr-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
        >
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            {linkedinInView && <CountUp targetNumber={4000} duration={2000} />}
          </span>
          <span className="inline-flex font-semibold flex items-center gap-x-2">
            Linkedin
            <img src={Linkedin} alt="" className="w-8 h-8" />
          </span>
        </button>

        <button
          ref={instagramRef}
          onClick={() => window.open('https://www.instagram.com', '_blank')}
          className=" w-60 h-60 border border-gray-300 flex flex-col items-center justify-center gap-y-2 mr-4 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:scale-105"
        >
          <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2">
            {instagramInView && <CountUp targetNumber={400} duration={2000} />}
          </span>
          <span className="inline-flex font-semibold flex items-center gap-x-2">
            Instagram
            <img src={Instagram} alt="" className="w-8 h-8" />
          </span>
        </button>
      </div>
    </>
  );
};

export default SubFooter;
