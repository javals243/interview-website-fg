
import React from 'react'
import Marquee from 'react-fast-marquee';
import Image1 from '../images/one.png';
import Image2 from '../images/two.png';
import Image3 from '../images/three.png';
import Image4 from '../images/four.png';
import Image5 from '../images/five.png';
import Image6 from '../images/six.png';
import Image7 from '../images/seven.png';
import Image8 from '../images/eight.png';
import Image9 from '../images/nine.png';
import Image10 from '../images/ten.png';
import style from '../styles/Marquee.module.css';
import Image from 'next/image';
function Partners() {
  return (
    <div className="App mx-[40px] mb-10">
      <div className="title">
        <h2 className="relatve flex items-center justify-center pt-10 text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Nos partenaires
        </h2>
        <span className="mx-auto mb-16 mt-2 flex h-1.5 w-[80px] items-center justify-center rounded-full bg-black" />
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className={style.image_wrapper}>
            <Image src={Image1} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image2} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image3} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image4} alt="" />
          </div>
          <div>
            <Image src={Image5} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image6} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image7} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image8} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image9} alt="" />
          </div>
          <div className={style.image_wrapper}>
            <Image src={Image10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Partners