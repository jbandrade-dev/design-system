import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ArrowsDownUp, CheckCircle, SmileySad } from "phosphor-react";

const fruits = [
  { name: "Banana" },
  { name: "Maçã" },
  { name: "Laranja" },
  { name: "Mamão" },
  { name: "Maracujá" },
  { name: "Açaí" },
  { name: "Morango" },
  { name: "Kiwi" },
  { name: "Melancia" },
  { name: "Abacaxi" },
  { name: "Tangerina" },
  { name: "Limão" },
  { name: "Pêssego" },
  { name: "Caju" },
  { name: "Acerola" },
  { name: "Uva" },
];

interface DisplayValueProps {
  name: string;
}
[];

export function Autocomplete() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const filteredFruits =
    query === ""
      ? fruits
      : fruits.filter((fruit) =>
          fruit.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative">
        <div className="relative w-full max-w-sm">
          <Combobox.Input
            type="search"
            className="inline-flex input"
            displayValue={(fruits: DisplayValueProps) => fruits.name}
            placeholder="Digite o nome de uma fruta"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button title="Opções" className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ArrowsDownUp
              className="h-5 w-5 text-gray-100"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="max-w-sm bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
            {filteredFruits.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-800">
                Não temos essa <SmileySad size={32} />
              </div>
            ) : (
              filteredFruits.map((fruit) => (
                <Combobox.Option
                  key={fruit.name}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 pl-8 ${
                      active ? "bg-gray-700 text-cyan-300" : ""
                    }`
                  }
                  value={fruit}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-cyan-300" : "font-normal"
                        }`}
                      >
                        {fruit.name}
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
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
