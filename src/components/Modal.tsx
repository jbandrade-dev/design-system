import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "./Button";
import { Text } from "./Text";

export function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="">
      <Button
        aria-expanded="false"
        aria-label="Abrir modal"
        title="Modal"
        type="button"
        onClick={openModal}
      >
        Modal
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-400"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3">
                    <Text size="lg" className="leading-6 text-gray-900">
                      Lorem, ipsum dolor
                    </Text>
                  </Dialog.Title>
                  <div className="mt-2">
                    <Text size="sm" className="text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Est in aliquid quia repellat molestias nulla qui ipsam
                      soluta illum amet neque voluptatem pariatur quo tempora,
                      unde quod nesciunt tempore. Animi!
                    </Text>
                  </div>

                  <div className="mt-4">
                    <Button
                      aria-expanded="true"
                      aria-label="Fechar modal"
                      type="button"
                      onClick={closeModal}
                    >
                      Lorem!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
