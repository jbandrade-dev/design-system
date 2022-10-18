import { useState } from "react";
import { Transition } from "@headlessui/react";
import { ArrowBendUpRight, List } from "phosphor-react";
import { menu } from "./Menu";
import { Logo } from "./Logo";
import { Text } from "./Text";
import { Heading } from "./Heading";

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
        className="fixed inset-0 bg-gray-500 p-4 z-50"
      >
        <header id="MenuExpanded" className="flex gap-1 wrapper justify-between items-center h-20 z-50">
          <Logo />

          <button
            className=""
            aria-expanded="true"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <ArrowBendUpRight
              className="text-gray-100 hover:text-cyan-300"
              size={40}
              weight="bold"
            />
          </button>
        </header>

        <menu className="flex justify-center mt-16">
          <ul className="flex flex-col gap-2 items-center">
            {menu.map((item) => {
              return (
                <li key={item.name} className="itemMenuExpanded">
                  <a
                    href="#"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                  >
                    <Heading>{item.name}</Heading>
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
