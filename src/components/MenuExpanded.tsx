import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowBendUpRight, List } from "phosphor-react";
import { menu } from "./Menu";
import { Logo } from "./Logo";
import { Text } from "./Text";

export function MenuExpanded() {
  const [isShowing, setIsShowing] = useState(false);

  function openMenu() {
    document.body.classList.add("expanded");
    setIsShowing((isShowing) => !isShowing);
  }

  function closeMenu() {
    document.body.classList.remove("expanded");
    setIsShowing((isShowing) => !isShowing);
  }

  return (
    <section>
      <button
        aria-expanded="false"
        aria-label="Abrir menu"
        className={isShowing ? "hidden" : "pc:hidden text-white hover:text-cyan-300 "}
        onClick={openMenu}
      >
        <List size={45} />
      </button>

      <Transition
        show={isShowing}
        enter="transition ease-out duration-[300ms]"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-[200ms]"
        leaveFrom="opacity-0 translate-y-100"
        leaveTo="opacity-100 translate-y-full"
        className="fixed inset-0 h-screen w-screen bg-gray-500 z-50"
      >
        <header id="MenuExpanded" className="flex justify-between p-6 z-50">
          <div />

          <Logo />

          <button
            className=""
            aria-expanded="true"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <ArrowBendUpRight
              className="text-gray-900"
              size={30}
              weight="bold"
            />
          </button>
        </header>

        <menu className="">
          <ul className="">
            {menu.map((item) => {
              return (
                <li key={item.name} className="">
                  <a
                    href="#"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                  >
                    <Text size="sm">{item.name}</Text>
                  </a>
                </li>
              );
            })}
          </ul>
        </menu>
      </Transition>
    </section>
  );
}
