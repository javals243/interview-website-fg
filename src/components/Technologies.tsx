import React from 'react';

import { Frameworks, Languages, Tools } from '@/data/technologies';

const Technologies = () => (
  <section className="w-full bg-gray-100 py-16 dark:bg-gray-800">
    <div className="mx-auto  max-w-screen-lg">
      <h2 className="relative text-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
        Technologies
      </h2>

      <span className="mx-auto mb-16 mt-2 flex h-1.5 w-[80px] items-center justify-center rounded-full bg-indigo-600" />

      <p className="mt-6 break-words text-center text-lg">
        {` I've worked with a range of technologies, from front-end to back-end, and
      I've worked with a variety of languages.`}
      </p>

      <div className="mx-16 flex flex-col items-center justify-around gap-5 py-10 text-center md:flex-row">
        <div className="flex  w-full md:max-w-[203px]">
          <div className="flex flex-col">
            <div className="color-[#9cc9e3]  mb-8   text-[28px] font-[700] leading-[32px]">
              Languages
            </div>
            {Languages.map((item: any, key: any) => (
              <>
                <div
                  className="color-[rgba(255,255,255,0.75)]  item-center flex  items-center  text-[18px] leading-[30px]"
                  key={key}
                >
                  <div className=" pr-2 text-indigo-600">{item.icon}</div>

                  <h3> {item.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex w-full   md:max-w-[203px]">
          <div className="flex flex-col">
            <div className="color-[#9cc9e3] mb-8   text-[28px] font-[700] leading-[32px]">
              Frameworks
            </div>
            {Frameworks.map((item: any, key: any) => (
              <>
                <div
                  className="color-[rgba(255,255,255,0.75)] item-center flex  items-center text-[18px] leading-[30px] "
                  key={key}
                >
                  <div className=" pr-2 text-indigo-600">{item.icon}</div>

                  <h3> {item.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="flex  w-full  md:max-w-[203px]">
          <div className="flex flex-col">
            <div className="color-[#9cc9e3] mb-8   text-[28px] font-[700] leading-[32px]">
              Tools
            </div>
            {Tools.map((item: any, key: any) => (
              <>
                <div
                  className="color-[rgba(255,255,255,0.75)] item-center flex  items-center text-[18px] leading-[30px] "
                  key={key}
                >
                  <div className=" pr-2 text-indigo-600">{item.icon}</div>

                  <h3> {item.title}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;
