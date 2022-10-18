import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function MyTabs() {
  const [categories] = useState({
    Lorem: [
      {
        id: 1,
        title: "Vulputate donec leo",
        date: "4h ago",
        commentCount: 5,
        shareCount: 8,
      },
      {
        id: 2,
        title: "Conubia per magna",
        date: "5h ago",
        commentCount: 9,
        shareCount: 6,
      },
    ],
    Ipsum: [
      {
        id: 1,
        title: "Tempor ut malesuada",
        date: "4h ago",
        commentCount: 13,
        shareCount: 8,
      },
      {
        id: 2,
        title: "Faucibus mattis vivamus",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Dolor: [
      {
        id: 1,
        title: "Donec pulvinar mattis",
        date: "15h ago",
        commentCount: 15,
        shareCount: 7,
      },
      {
        id: 2,
        title: "Augue accumsan quisque",
        date: "21h ago",
        commentCount: 21,
        shareCount: 12,
      },
    ],
  });

  return (
    <div className="w-full max-w-md">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-cyan-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <span className="">{category}</span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-gray-800 p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-cyan-300 hover:text-black"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
