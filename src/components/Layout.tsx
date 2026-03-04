import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
      <StickyCtaBanner />
    </div>
  );
};

export default Layout;
