import { Disclosure } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { Text } from "./Text";

export function MyDisclosure() {
  return (
    <section className="items-stretch w-full max-w-sm">
      <div className="grid gap-2 rounded bg-gray-800 p-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-expanded="false"
                aria-label="Abrir disclosure"
                className="flex justify-between button text-left"
              >
                <Text className="text-black">?</Text>
                <CaretDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <Text size="sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit, quod. Commodi accusamus debitis unde atque
                  ipsum magnam necessitatibus veritatis assumenda consequatur
                  velit mollitia, vitae laudantium, rerum in tempora suscipit
                  exercitationem.
                </Text>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between button text-left">
                <Text className="text-black">?</Text>
                <CaretDown
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pt-4 pb-2">
                <Text size="sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit, quod. Commodi accusamus debitis unde atque
                  ipsum magnam necessitatibus veritatis assumenda consequatur
                  velit mollitia, vitae laudantium, rerum in tempora suscipit
                  exercitationem.
                </Text>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
