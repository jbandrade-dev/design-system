import { Menu } from "./Menu";
import { MenuExpanded } from "./MenuExpanded";

export function Navbar() {
  return (
    <nav className="flex gap-1 wrapper justify-between items-center h-20">
      <div className="text-gray-200 rounded-md mb-1 font-semibold text-lg">
        Navbar
      </div>
      <MenuExpanded />
      <Menu />
    </nav>
  );
}
