import { Card } from "./Card";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";
import { Heading } from "./Heading";
import { Text } from "./Text";

const data = [
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "./devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];



export function Slide() {
  const dataCard = data.map((item) => {
    return item;
  });

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
      className="mySwiper mob:flex tablet:flex pc:flex"
    >
      {dataCard.map((data) => {
        return (
          <SwiperSlide className="mb-11" key={data.id}>
            <Card data={data}>
              <img src={data.img} alt={data.alt} />
              <div className="grid p-4 gap-3">
                <Heading size="sm">{data.title}</Heading>
                <Text className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </div>
            </Card>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
