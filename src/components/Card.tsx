import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className}: CardProps) {
  return (
    <div className="bg-gray-800 rounded overflow-hidden max-w-sm">
      {children}
    </div>
  );
}
