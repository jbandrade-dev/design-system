import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className="bg-gray-800 rounded overflow-hidden max-w-sm">
      {children}
    </div>
  );
}

export function Devdog() {
  return (
    <div>
      <img src="./devdog.jpg" alt="Doguinho desenvolvedor" />
      <div className="grid p-4 gap-3">
        <h3>Doguinho dev jr.</h3>
        <span className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
}
