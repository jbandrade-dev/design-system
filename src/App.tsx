import { Avatar } from "./components/Avatar";
import { ChartPie } from "./components/ChartPie";
import { Container } from "./components/Container";
import { MyDisclosure } from "./components/Disclosure";
import { Subscribe } from "./components/Subscribe";
import { MyModal } from "./components/Modal";
import { Slide } from "./components/Slide";
import { SocialLinks } from "./components/SocialLinks";
import { v4 as uuidv4 } from "uuid";
import { Select } from "./components/Select";
import { MyPopover } from "./components/Popover";
import { MyTabs } from "./components/Tabs";
import { SignIn } from "./components/SignIn";
import { Autocomplete } from "./components/Autocomplete";

const dataChart = [
  { name: "1", value: 27 },
  { name: "2", value: 25 },
  { name: "3", value: 20 },
  { name: "4", value: 15 },
  { name: "5", value: 13 },
];

const dataCard = [
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
  {
    id: uuidv4(),
    title: "Doguinho Dev Jr.",
    img: "/devdog.jpg",
    href: "#",
    alt: "Card Container",
    icon: "",
  },
];

export function App() {
  return (
    <div className="flex wrapper flex-col justify-center gap-10">
      <Container>
        <div className="flex flex-col gap-10">
          <SignIn />
          <Subscribe />
        </div>

        <div className="flex flex-col gap-10">
          <Avatar src="/avatar.jpg" alt="" tailwind="avatarCircle" />
          <Avatar src="/avatar.jpg" alt="" tailwind="avatarSquare" />
        </div>

        <div className="flex flex-col gap-10">
          <MyModal />
          <MyPopover />
        </div>

        <div className="flex flex-col gap-10">
          <Select />
          <MyDisclosure />
        </div>

        <Slide data={dataCard} />
        <MyTabs />
        <Autocomplete />
        <ChartPie data={dataChart} />
        <SocialLinks size="40" weight="regular" tailwind="flex gap-1 mt-10" />
      </Container>
    </div>
  );
}
