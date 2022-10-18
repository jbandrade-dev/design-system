import { Text } from "./Text";

export const menu = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" }
];

export function Menu() {
  return (
    <menu className="mob:hidden pc:flex justify-center gap-3 uppercase">
      <ul className="flex-1 inline-flex gap-8">
        {menu.map((item) => {
          return (
            <li key={item.name}>
              <a href={item.href}>
                <Text size="sm" className="itemMenu">{item.name}</Text>
              </a>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}
