import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex bg-gray-900 flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </section>
  );
}
