import { Container } from "./components/Container";
import { MyDisclosure } from "./components/Disclosure";
import { Subscribe } from "./components/Subscribe";
import { MyModal } from "./components/Modal";
import { Slide } from "./components/Slide";
import { SocialLinks } from "./components/SocialLinks";
import { Select } from "./components/Select";
import { MyPopover } from "./components/Popover";
import { MyTabs } from "./components/Tabs";
import { SignIn } from "./components/SignIn";
import { Autocomplete } from "./components/Autocomplete";
import { Video } from "./components/Video";

export function App() {
  return (
    <div className="wrapper ">
      <Container>
        <div className="grid grid-cols-2 gap-10 ">
          <SignIn />
          <Subscribe />
        </div>

        <div className="flex mt-10">
        <Video/>
        </div>

        <div className="flex flex-col gap-10 mt-10">
          <MyModal />
          <MyPopover />
        </div>

        <div className="flex flex-col gap-10 mt-10">
          <Select />
          <MyDisclosure />
        </div>

        <div className="mt-10">
          <Slide />
        </div>
        <div className="mt-10">
          <MyTabs />
        </div>
        <div className="mt-10">
          <Autocomplete />
        </div>
        <SocialLinks size="40" weight="regular" tailwind="flex gap-1 mt-10" />
      </Container>
    </div>
  );
}
