import { Popover, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { Fragment } from "react";
import { Text } from "./Text";

const solutions = [
  {
    name: "banana",
    description: "Duas por dia, 14 por semana.",
    href: "##",
    icon: "/banana.png",
  },
  {
    name: "maça",
    description: "Uma por dia, 7 por semana.",
    href: "##",
    icon: "/maca.png",
  },
  {
    name: "mamão",
    description: "Meia unidade, 3x por semana.",
    href: "##",
    icon: "/mamao.png",
  },
];

export function MyPopover() {
  return (
    <div className="w-full">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              aria-expanded="false"
              aria-label="Abrir Popover"
              aria-haspopup="dialog"
              title="Popover"
              className={`
                ${open ? "" : "text-opacity-90"}
                inline-flex items-center py-3 px-4 bg-cyan-500 rounded font-semibold text-black transition-colors hover:bg-cyan-300 focus:ring-2 ring-white`}
            >
              Popover
              <CaretDown
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-gray-900 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/3 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-gray-800 p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-cyan-300 text-gray-100 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">
                          <img src={item.icon} aria-hidden="true" />
                        </div>
                        <div className="grid ml-4">
                          <span className="text-sm">{item.name}</span>
                          <span className="text-xs text-gray-500">
                            {item.description}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-800 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-cyan-300 text-gray-100 hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex text-sm items-center">
                        Salada de frutas
                      </span>

                      <span className="text-xs text-gray-400">
                        Incluir laranja e uva verde sem caroço.
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function Banana() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="700"
      height="700"
      version="1.1"
      viewBox="-100 0 1200 1200"
    >
      <g>
        <g
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          transform="matrix(1.21764 0 0 1.21764 -152.02 -93.29)"
        >
          <path
            fill="#fac400"
            d="M172.677 341.22c1.273 4.453 7.315 10.495 11.29 20.512 3.974 10.018 5.882 24.01 5.723 39.274-.159 15.264-2.385 31.8-6.996 49.926-4.611 18.127-11.607 37.843-10.812 62.807.795 24.964 9.381 55.174 33.71 87.451 24.328 32.278 64.396 66.622 114.005 92.698 49.61 26.077 108.757 43.885 171.246 49.609 62.488 5.723 128.314-.637 180.626-14.47 52.312-13.834 91.108-35.14 126.725-61.534 35.617-26.395 68.053-57.877 89.04-90.631 20.99-32.755 30.53-66.78 32.279-90.472 1.749-23.691-4.293-37.047-12.561-44.52-8.268-7.475-18.762-9.065-31.96-6.044-13.197 3.021-29.097 10.653-52.63 23.692-23.533 13.038-54.697 31.482-86.18 48.654-31.482 17.173-63.282 33.073-97.15 43.567-33.868 10.494-69.802 15.582-103.351 15.423-33.55-.158-64.714-5.564-98.9-17.967-34.186-12.402-71.392-31.8-100.808-52.47-29.415-20.67-51.04-42.612-65.19-61.375-14.152-18.762-20.83-34.344-25.442-48.813-4.61-14.47-7.155-27.826-7.473-38.956-.318-11.13 1.59-20.035-.159-24.964-1.748-4.93-7.154-5.883-11.606-10.335-4.453-4.452-7.95-12.402-10.813-23.214-2.862-10.812-5.088-24.486-6.36-36.57-1.273-12.085-1.59-22.58-3.817-23.533-2.226-.955-6.36 7.631-12.084 14.786-5.724 7.155-13.038 12.88-20.988 17.172-7.95 4.293-16.536 7.155-19.557 11.926-3.021 4.771-.477 11.449 2.862 19.558 3.34 8.11 7.473 17.65 11.449 24.327 3.975 6.678 7.79 10.494 7.95 13.833.158 3.339-3.34 6.2-2.068 10.653z"
          ></path>
          <path
            fill="#a05a2c"
            d="M205.113 228.965c-2.226-.954-6.36 7.632-12.084 14.787-5.724 7.155-13.038 12.879-20.988 17.172-7.95 4.293-16.536 7.155-19.557 11.926-3.02 4.77-.477 11.447 2.862 19.556 3.339 8.11 7.474 17.65 11.449 24.328 3.395 5.704 6.528 9.283 7.512 12.297 8.263.072 17.029.968 25.56.74 11.925-.318 23.373-2.861 32.436-8.267a38.414 38.414 0 003.238-2.15c-2.473-2.421-6.193-3.829-9.437-7.073-4.453-4.451-7.953-12.4-10.815-23.213-2.862-10.812-5.087-24.486-6.36-36.57-1.271-12.084-1.59-22.579-3.816-23.533z"
          ></path>
          <path
            fill="#ffdb01"
            d="M235.642 410.069c5.407 4.93 14.629 24.963 32.279 47.542 17.65 22.579 43.725 47.7 76.162 68.212 32.437 20.511 71.233 36.41 108.917 46.746 37.684 10.335 74.254 15.105 109.87 13.356 35.617-1.75 70.28-10.018 103.829-22.102 33.55-12.084 65.986-27.984 94.765-44.68 28.78-16.695 53.902-34.185 71.074-45.792 17.173-11.608 26.395-17.332 35.3-21.466 8.904-4.134 17.49-6.678 23.85-4.928 6.36 1.75 10.494 7.792 12.242 13.675 1.75 5.883 1.113 11.607-4.93 25.44-6.041 13.833-17.49 35.775-37.206 58.035-19.716 22.26-47.7 44.839-85.702 65.986-38.002 21.148-86.02 40.864-134.675 53.266-48.655 12.402-97.945 17.49-148.508 13.992-50.563-3.498-102.397-15.582-145.805-37.365-43.409-21.783-78.388-53.265-98.423-80.773-20.035-27.507-25.123-51.04-26.236-72.664-1.113-21.625 1.749-41.34 3.975-56.287 2.226-14.946 3.816-25.122 9.222-20.193z"
          ></path>
          <path
            fill="#a05a2c"
            d="M888.725 434.44c-4.02-.221-8.396.267-13.084 1.29 4.296 10 10.532 20.108 18.75 27.604 8.047 7.341 17.972 12.17 25.216 10.379-.879-15.92-6.01-25.837-12.656-31.844-5.167-4.67-11.203-7.044-18.226-7.43z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function Maca() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      version="1.1"
      viewBox="-100 0 1200 1200"
    >
      <g>
        <g
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          transform="translate(-452.863 -419.585) scale(1.89797)"
        >
          <path
            fill="green"
            strokeWidth="1"
            d="M415.941 235.994c-16.471.112-33.222 3.486-47.445 7.815-14.223 4.328-25.916 9.611-36.822 14.334-10.906 4.722-21.026 8.883-29.29 11.75-8.263 2.867-14.67 4.44-21.023 5.453-6.352 1.012-12.648 1.462-14.447 2.418-1.799.956.9 2.417 4.723 4.16 3.822 1.742 8.77 3.765 12.93 6.576 4.16 2.811 7.532 6.41 13.94 11.75 6.41 5.34 15.853 12.424 24.792 18.889 8.938 6.465 17.37 12.311 27.488 17.37 10.12 5.06 21.926 9.332 33.787 13.323 11.862 3.991 23.778 7.703 35.809 11.244 12.03 3.542 24.174 6.913 36.092 8.543 11.917 1.63 23.61 1.52 31.986.451 8.376-1.068 13.435-3.092 16.527-3.373 3.092-.28 4.217 1.18 6.24 4.666 2.024 3.486 4.946 8.996 6.745 13.606 1.798 4.61 2.474 8.32 3.992 9.443 1.518 1.124 3.878-.34 3.54-5.342-.336-5.002-3.372-13.547-5.958-19.338-2.586-5.79-4.722-8.825-4.16-12.93.561-4.104 3.823-9.275 6.297-15.796 2.473-6.521 4.158-14.39 1.685-25.746-2.473-11.356-9.106-26.196-19.562-38.957-10.456-12.762-24.734-23.443-39.97-30.358-15.234-6.915-31.424-10.063-47.896-9.95zm-8.537 20.45c.05-.016.176.006.387.07 1.687.506 8.77 3.54 15.066 8.263 6.297 4.723 11.805 11.132 16.358 18.44 4.553 7.308 8.15 15.515 11.074 21.699 2.923 6.184 5.173 10.343 7.197 12.816 2.024 2.474 3.822 3.261 7.645 5.454 3.823 2.192 9.668 5.79 12.76 6.353 3.09.562 3.428-1.912 2.81-8.658-.618-6.746-2.192-17.764-6.408-27.096s-11.073-16.976-17.313-22.879c-6.24-5.903-11.863-10.064-11.582-10.57.282-.506 6.466 2.643 13.043 7.703 6.578 5.06 13.548 12.03 18.27 19.787 4.722 7.758 7.196 16.303 8.545 24.06 1.349 7.758 1.574 14.73 2.418 19.227.843 4.498 2.304 6.521 5.34 9.276 3.036 2.754 7.645 6.24 10.006 6.465 2.36.224 2.473-2.812 2.304-8.827-.168-6.015-.619-15.01-2.924-25.185-2.304-10.175-6.463-21.53-7.755-26.758-1.293-5.228.281-4.329 2.642 0 2.36 4.329 5.508 12.086 7.813 19.562 2.304 7.477 3.765 14.673 4.271 22.768.506 8.095.056 17.09.281 22.6.226 5.509 1.125 7.532.9 8.656-.224 1.124-1.572 1.348-2.978.168-1.405-1.18-2.868-3.766-4.836-5.172-1.967-1.406-4.44-1.63-8.488-2.023a756.049 756.049 0 01-17.65-1.913c-7.983-.955-18.327-2.303-21.7-3.26-3.373-.955.224-1.517 5.565-1.46 5.34.056 12.424.73 18.158 1.123 5.734.393 10.119.506 11.58-.225 1.462-.73 0-2.304-2.586-4.328-2.586-2.024-6.297-4.497-10.681-7.195-4.385-2.699-9.444-5.621-13.155-6.465-3.71-.844-6.07.392-9.724 1.853-3.654 1.462-8.602 3.149-15.797 3.936-7.196.787-16.64.675-26.703.113-10.063-.562-20.744-1.573-25.073-2.529-4.329-.956-2.305-1.857 2.248-2.025 4.554-.169 11.64.394 19.397.619 7.758.225 16.19.113 23.217-.899 7.027-1.012 12.647-2.923 15.795-4.384 3.147-1.462 3.821-2.475 2.304-3.768-1.517-1.293-5.226-2.866-11.353-5.565-6.128-2.698-14.672-6.52-21.194-8.77-6.52-2.248-11.018-2.923-16.865-2.417-5.847.506-13.042 2.192-21.98 3.26-8.939 1.068-19.62 1.517-24.174 1.011-4.554-.506-2.98-1.966 1.46-2.921 4.442-.956 11.752-1.407 18.386-2.194 6.633-.787 12.591-1.91 15.402-2.865 2.81-.955 2.473-1.742-.225-2.81-2.698-1.07-7.757-2.419-13.941-3.993a1415.275 1415.275 0 00-20.576-5.06c-7.084-1.687-13.94-3.26-20.574-4.553-6.634-1.293-13.043-2.305-16.641-3.373-3.598-1.068-4.384-2.193-1.629-2.418 2.755-.225 9.051.45 16.078 1.406 7.027.956 14.784 2.192 18.156 2.305 3.373.113 2.362-.9-1.236-4.104s-9.782-8.601-11.469-10.681c-1.686-2.08 1.125-.843 5.004 1.63 3.88 2.474 8.827 6.185 12.48 9.446 3.655 3.26 6.015 6.07 8.995 7.869 2.98 1.799 6.577 2.585 8.207 1.967 1.63-.618 1.292-2.64-2.137-7.307-3.429-4.666-9.95-11.973-11.58-14.672-1.63-2.698 1.63-.787 5.397 2.305 3.766 3.092 8.039 7.364 11.412 11.58 3.372 4.216 5.846 8.377 10.625 11.188 4.778 2.81 11.862 4.271 15.515 4.103 3.654-.168 3.879-1.967 2.305-5.396-1.574-3.43-4.947-8.489-9.613-13.436-4.666-4.947-10.624-9.783-11.973-11.639-1.35-1.855 1.911-.73 6.465 2.418 4.553 3.149 10.399 8.322 14.84 14.168 4.44 5.847 7.477 12.368 11.693 16.471 4.217 4.103 9.613 5.79 15.516 7.982 5.902 2.193 12.31 4.89 14.953 5.284 2.642.394 1.518-1.518-.73-7.196-2.25-5.678-5.623-15.121-10.964-23.216-5.34-8.096-12.647-14.842-18.156-19.227-4.82-3.837-8.264-5.864-7.92-5.973z"
          ></path>
          <path
            fill="#2b1100"
            strokeWidth="1"
            d="M567.66 301.287c-.207.031-.416.132-.635.3-.875.676-1.908 2.427-3.418 3.102-1.51.676-3.497.279-5.445-.595-1.948-.874-3.857-2.226-4.414-1.51-.557.716.24 3.498.875 6.082.636 2.584 1.113 4.968.04 8.307-1.074 3.338-3.698 7.631-8.905 16.377-5.208 8.745-12.999 21.942-17.809 33.271-4.81 11.33-6.638 20.79-7.552 26.356-.915 5.565-.914 7.234 1.154 8.187 2.067.954 6.2 1.193 8.506-1.072 2.305-2.266 2.781-7.037 3.775-12.363.994-5.327 2.505-11.21 5.924-18.643 3.418-7.434 8.744-16.418 13.475-22.977 4.73-6.559 8.865-10.693 12.8-13.595 3.936-2.902 7.672-4.571 10.375-5.008 2.704-.437 4.373.359 3.737-2.225-.637-2.583-3.578-8.547-5.764-13.039-2.186-4.492-3.617-7.513-4.69-9.222-.804-1.283-1.408-1.826-2.029-1.733z"
          ></path>
          <path
            fill="#a00"
            strokeWidth="0.965"
            d="M426.477 383.344c-2.434.01-4.831.058-7.178.15-18.777.734-34.293 4.293-45.649 9.531-11.355 5.238-18.55 12.152-25.408 19.8-6.858 7.646-13.379 16.027-19.338 27.236-5.958 11.208-11.355 25.246-14.728 45.568-3.373 20.322-4.723 46.93-.338 70.709 4.385 23.779 14.505 44.728 27.66 66.098 13.155 21.37 29.344 43.156 45.871 59.812 16.528 16.656 33.392 28.178 47.559 35.615 14.166 7.438 25.634 10.792 39.013 12.678 13.38 1.886 28.67 2.303 37.551 2.408 8.882.105 16.938.105 25.82 0 8.883-.105 24.174-.522 37.553-2.408 13.38-1.886 24.848-5.24 39.014-12.678 14.166-7.437 31.029-18.96 47.557-35.615 16.527-16.656 32.718-38.443 45.873-59.812 13.154-21.37 23.273-42.32 27.658-66.098 4.385-23.779 3.037-50.387-.336-70.71-3.373-20.321-8.77-34.359-14.729-45.567-5.958-11.21-12.48-19.59-19.338-27.237-6.858-7.647-14.054-14.56-25.41-19.799-11.355-5.238-26.87-8.797-45.646-9.53-18.777-.734-40.814 1.36-58.354 2.513-17.54 1.152-30.58 1.362-37.101 1.467-6.522.104-12.778.104-19.3 0-6.52-.105-19.563-.315-37.103-1.467-15.347-1.008-34.137-2.739-51.173-2.664z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function Uva() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="-150 0 700 500"
    >
      <g>
        <path
          fill="#54892D"
          d="M356.55 85.51c-5.67-40.29-25.36-62.77-53.41-74.64C274.18-1.38 244.54.01 213.79.09c-21 .06-41.89.5-62.72 1.14 6.37 21.52 16.93 41.16 31.88 58.84 7.31 8.65 15.44 16.68 24.25 23.85 35.62 29.01 90.48 46.59 132.86 25.36 3.81-1.9 5.52-2.86 8.02-5.57-39.63-14.96-69.68-38.44-95.57-60.76 24.12 18.56 65.61 36.1 103.87 44.38l.17-1.82z"
        ></path>
        <path
          fill="#333"
          d="M361.09 264.42c-6.27-22.36-7.77-47.3-4.59-71.51 5.68-43.39 25.06-85.41 55.07-110.9h-.01l.89-.75c7.34-6.18 8.29-17.14 2.11-24.49-6.18-7.34-17.13-8.29-24.48-2.11l-.96.81-.08.06v-.01c-12.86 10.91-24.1 24.17-33.58 39l-10.78 19.03a217.85 217.85 0 00-4.8 10.26c-52.56 14.27-100.93 34.21-142.23 63.73-24.81 17.72-46.96 38.81-65.82 64.08 11.35 3.48 21.47 9.66 30.11 17.92 16.18-21.06 34.99-38.75 55.93-53.72 31.71-22.66 68.5-39.25 108.62-51.86a240.99 240.99 0 00-4.47 24.37c-4.19 31.99-1.41 65.48 8.48 94.97 8.63-8.67 18.9-15.18 30.59-18.88z"
        ></path>
        <path
          fill="#7C9425"
          d="M362.45 264c50.52-14.9 107.67 27.95 127.64 95.69 19.96 67.74-4.81 134.72-55.34 149.62-50.53 14.89-107.67-27.95-127.64-95.69s4.81-134.73 55.34-149.62zm-234.79-13.53c51.19 12.42 79.19 78.13 62.53 146.76C173.54 465.86 118.54 511.42 67.34 499c-51.19-12.43-79.19-78.13-62.53-146.76 16.65-68.63 71.66-114.19 122.85-101.77zm-68.47 90.59c-1.94 3.08-6.01 4-9.09 2.07-3.08-1.94-4-6.01-2.07-9.09 8.47-13.49 19.09-24.6 31.23-32.42 11.85-7.64 25.17-12.15 39.38-12.72 3.64-.14 6.7 2.69 6.84 6.33a6.597 6.597 0 01-6.32 6.84c-11.74.46-22.83 4.25-32.77 10.65-10.51 6.77-19.76 16.48-27.2 28.34zm288.09 32.07c-.12 3.63-3.18 6.47-6.81 6.35a6.585 6.585 0 01-6.35-6.82c.57-15.9 4.2-30.83 10.79-43.68 6.45-12.6 15.72-23.19 27.69-30.77 3.08-1.95 7.16-1.04 9.11 2.04a6.604 6.604 0 01-2.04 9.11c-9.96 6.31-17.67 15.12-23.04 25.6-5.7 11.11-8.85 24.16-9.35 38.17z"
        ></path>
      </g>
    </svg>
  );
}