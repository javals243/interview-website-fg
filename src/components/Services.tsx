
import React from 'react';
import { dataServices } from '../data';
import style from '../styles/Services.module.css';

function Services() {
  
  return (
    <div className={style.container} id="services">
      <h1 className="relatve flex items-center justify-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
        Nos Services{' '}
      </h1>
      <span className="mx-auto mb-16 mt-2 flex h-1.5 w-[80px] items-center justify-center rounded-full bg-black" />
      <div className={style.cards_list}>
        {dataServices.map((item: any) => (
          <>
            <div className={style.card} key={item.id}>
              <div className={style.card_image}>{item.id}</div>
              <div className={style.card_title}>
                <h6 className={style.heading}>{item.name}</h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Services;
