import { ReactNode } from "react";
import { clsx } from "clsx";

export interface AvatarProps {
  avatar: "circular" | "square";
  children: ReactNode;
  className?: string;
}


export function Avatar({
  avatar = "circular",
  children,
  className,
}: AvatarProps) {
  return (
    <div className={clsx("relative w-fit text-gray-100 font-sans", className)}>
      <img
        className={clsx("", {
          'avatarCircular': avatar === "circular",
          'avatarSquare': avatar === "square",
        })}
        src="./avatar.jpg"
        alt="Avatar de João Andrade"
      />
    {children}
    </div>
  );
}
