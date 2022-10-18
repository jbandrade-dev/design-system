import { Card } from "./Card";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
];

export function Slide() {
  return (
    <Swiper
      spaceBetween={16}
      freeMode={true}
      breakpoints={{
        350: {
       
          slidesPerView: 1,
        },
        550: {
         
          slidesPerView: 2,
        },
        780: {
          
          slidesPerView: 3,
        },
        1280: {
         
          slidesPerView: 4,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mob:flex tablet:flex pc:flex mt-10"
    >
      {data.map((dataCard) => {
        return (
          <SwiperSlide className="mb-11" key={dataCard.id}>
            <Card />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
