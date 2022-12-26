import React from 'react';
import Image from 'next/image';
import useTypingText from '@/hooks/useTypingText';

const Hero: React.FC = () => {
  const { typingText } = useTypingText(
    'I am a full stack web developer with a passion for creating beautiful and intuitive websites and web applications.',
    100,
    1000
  );
  return (
    <div className="bg-gray-100 py-16 dark:bg-gray-800 sm:w-full md:h-[96vh]">
      <div className=" mx-auto mt-6  w-full max-w-screen-lg">
        <section
          id="hero"
          className="mx-auto  flex h-full w-full  px-4  md:flex-row md:px-0 "
        >
          <div className="flex flex-col  gap-5  md:flex-row md:items-center  md:justify-between ">
            <div className="mt-8 w-full md:w-1/2">
              <Image
                src="/static/images/valere.png"
                alt="valere chihisa"
                priority
                width={5000}
                height={5000}
                quality={100}
                className="block overflow-hidden"
              />
            </div>
            <div className="item  flex w-full flex-col sm:h-full md:w-1/2  md:items-center md:justify-center">
              <span className="mx-auto  mb-4 text-2xl font-bold text-gray-900 dark:text-gray-50 md:text-3xl">
                {"Hey there 👋 it's, "}
                <span className="text-indigo-600">{'Valere Chihisa'}</span>
              </span>
              <span className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-50 md:text-xl">
                {typingText}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
