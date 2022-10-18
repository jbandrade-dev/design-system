import { Card } from "./Card";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface SlideProps {
  data: {
    id: string;
    title: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  }[];
}

export function Slide({ data }: SlideProps) {
  return (
      <Swiper
      
        slidesPerView={3}
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mob:flex tablet:flex pc:flex mt-10"
      >
        {data.map((dataCard) => {
          return (
            <SwiperSlide className="mb-11" key={dataCard.id}>
              <Card data={dataCard} />
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
}
