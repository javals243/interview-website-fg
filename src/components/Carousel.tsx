/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from '../styles/Carousel.module.css';
import { Carousel } from 'react-responsive-carousel';
import { Button } from './Button';


const CarouselHome = () => {
  
  return (
    <div id="carousel" className="">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        swipeable={false}
        // animationHandler={'fade'}
        // emulateTouch
        autoPlay
        useKeyboardArrows
        transitionTime={1000}
        width="100%"
        className={style.carousel_slider}
      >
        <div className={style.slide_holder}>
          <img
            className={style.img}
            alt=""
            src={`${process.env.NEXT_PUBLIC_URL}/img/01.jpg`}
          />
          <div className={style.text_container}>
            <div className="mx-10 flex h-[600px] w-[1200px] items-center justify-around  ">
              <div className="grid h-full w-full grid-cols-2 gap-5">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}/img/05.jpg`}
                  alt=""
                  className="h-full w-full rounded"
                />
                <div className="">
                  <h1 className="text-[60px]">SUBSCRIBE</h1>
                  <h1 className="text-[60px]">TO THIS WEBSITE</h1>
                  <p className="text-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iusto voluptas corporis adipisci, ipsam eveniet
                    deserunt perferendis? Magni, iure quia?
                  </p>
                  <Button className="text-10px mt-10 " variant="solid">
                    {' '}
                    Subscribes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.slide_holder}>
          <img
            className={style.img}
            alt=""
            src={`${process.env.NEXT_PUBLIC_URL}/img/02.jpg`}
          />
          <div className={style.textBg}>
            <div className={style.text_container}>
              <div
                className="taos:translate-y-[200px] taos:opacity-0 delay-[300ms] duration-[600ms]"
                data-taos-offset="300"
              >
                <div className={style.text_container}>
                  <div className="mx-10 flex h-[600px] w-[1200px] items-center justify-around  ">
                    <div className="grid h-full w-full grid-cols-2 gap-5">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}/img/10.jpg`}
                        alt=""
                        className="h-full w-full rounded"
                      />
                      <div className="">
                        <h1 className="text-[60px]">SUBSCRIBE</h1>
                        <h1 className="text-[60px]">TO THIS WEBSITE</h1>
                        <p className="text-[20px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint iusto voluptas corporis adipisci, ipsam
                          eveniet deserunt perferendis? Magni, iure quia?
                        </p>
                        <Button className="text-10px mt-10 " variant="solid">
                          {' '}
                          Subscribes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.slide_holder}>
          <img
            className={style.img}
            alt=""
            src={`${process.env.NEXT_PUBLIC_URL}/img/03.jpg`}
          />
          <div className={style.textBg}>
            <div className={style.text_container}>
              <div
                className="taos:translate-y-[200px] taos:opacity-0 delay-[300ms] duration-[600ms]"
                data-taos-offset="300"
              >
                <div className={style.text_container}>
                  <div className="mx-10 flex h-[600px] w-[1200px] items-center justify-around  ">
                    <div className="grid h-full w-full grid-cols-2 gap-5">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}/img/09.jpg`}
                        alt=""
                        className="h-full w-full rounded"
                      />
                      <div className="">
                        <h1 className="text-[60px]">SUBSCRIBE</h1>
                        <h1 className="text-[60px]">TO THIS WEBSITE</h1>
                        <p className="text-[20px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint iusto voluptas corporis adipisci, ipsam
                          eveniet deserunt perferendis? Magni, iure quia?
                        </p>
                        <Button className="text-10px mt-10 " variant="solid">
                          {' '}
                          Subscribes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.slide_holder}>
          <img
            className={style.img}
            alt=""
            src={`${process.env.NEXT_PUBLIC_URL}/img/04.jpg`}
          />
          <div className={style.textBg}>
            <div className={style.text_container}>
              <div
                className="taos:translate-x-[200px] taos:opacity-0 delay-[300ms] duration-[600ms]"
                data-taos-offset="400"
              >
                <div className={style.text_container}>
                  <div className="mx-10 flex h-[600px] w-[1200px] items-center justify-around  ">
                    <div className="grid h-full w-full grid-cols-2 gap-5">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}/img/07.jpg`}
                        alt=""
                        className="h-full w-full rounded"
                      />
                      <div className="">
                        <h1 className="text-[60px]">SUBSCRIBE</h1>
                        <h1 className="text-[60px]">TO THIS WEBSITE</h1>
                        <p className="text-[20px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint iusto voluptas corporis adipisci, ipsam
                          eveniet deserunt perferendis? Magni, iure quia?
                        </p>
                        <Button className="text-10px mt-10 " variant="solid">
                          {' '}
                          Subscribes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
