import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  data: {
    id: string;
    title: string;
    text: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  };
}

export function Card({ data, children, className}: CardProps) {
  return (
    <div className="bg-gray-800 max-w-sm">
      {children}
    </div>
  );
}
