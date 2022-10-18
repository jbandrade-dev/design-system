import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { MenuExpanded } from "./MenuExpanded";

export function Navbar() {
  return (
    <nav className="flex gap-1 wrapper justify-between items-center h-20">
      <Logo />
      <MenuExpanded />
      <Menu />
    </nav>
  );
}
