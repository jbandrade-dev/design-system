import { Listbox, Transition } from "@headlessui/react";
import { CaretDown, CheckCircle } from "phosphor-react";
import { Fragment, useState } from "react";
import { Text } from "./Text";

const options = [{ name: "Sim" }, { name: "Não" }];

export function Select({}) {
  const [selected, setSelected] = useState("Sim ou Não?");

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-full max-w-sm">
        <Listbox.Button className="relative flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
          <Text className="block truncate">{selected}</Text>
          <Text className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDown size={20} />
          </Text>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-gray-700 text-gray-400" : "text-gray-400"
                  }`
                }
                value={option.name}
                >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium text-cyan-300" : "font-normal"
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-2 ${
                          active ? "" : "text-cyan-500"
                        }`}
                      >
                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
