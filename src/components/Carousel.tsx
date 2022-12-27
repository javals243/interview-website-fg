import Image from 'next/image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from '../styles/Carousel.module.css';
import { Carousel } from 'react-responsive-carousel';


const CarouselHome = () => {
  
  return (
    <div id="carousel">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        // emulateTouch
        autoPlay
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        // selectedItem={1}
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
            <h2>{'Services 1'}</h2>
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
              <h2>{'Services 2'}</h2>
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
              <h2> {'Services 3'}</h2>
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
              <h2>{'Services 4'}</h2>
            </div>
          </div>
        </div>
       
      </Carousel>
    </div>
  );
};

export default CarouselHome;
