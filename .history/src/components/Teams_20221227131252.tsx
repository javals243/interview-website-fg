/* eslint-disable @next/next/no-img-element */
import style from '../styles/About.module.css';
import { dataTeams } from '../data';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaChevronLeft } from 'react-icons/fa';
import ChevronRightIcon from '@/Icons/ChevronRightIcon';
function Teams() {
  const responsive = {
    0: { items: 1 },
    760: { items: 2 },
    1024: { items: 3 },
  };
 
  return (
    <>
      
      <div className={style.wrapper} id="about">
        <h1 style={{ textAlign: 'center' }}>Notre equipe</h1>

        {/* <div className={style.wrapperC}> */}
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="responsive"
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
          keyboardNavigation={true}
          renderPrevButton={() => {
            return (
              <p
                style={{
                  paddingTop: '2rem',
                  position: 'absolute',

                  left: '0',
                  top: '30%',
                }}
              >
                <FaChevronLeft fontSize="large" />
              </p>
            );
          }}
          renderNextButton={() => {
            return (
              <p
                style={{
                  paddingTop: '2rem',
                  position: 'absolute',
                  right: '0',
                  top: '30%',
                }}
              >
                <ChevronRightIcon fontSize="large" />
              </p>
            );
          }}
        >
          {dataTeams.map((item) => (
            <div className={style.our_team} key={item.id}>
              <div className={style.pic}>
                <img
                  className={style.img}
                  src={`${process.env.NEXT_PUBLIC_URL}/img/teams/${item.photo}`}
                  width={2000}
                  height={2000}
                  alt="img"
                />
              </div>
              <div className={style.team_content}>
                <h3 className={style.title}>{item.name}</h3>
                <span className={style.post}>{item.grade}</span>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
      {/* </div> */}
    </>
  );
}

export default Teams;
