import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LAYOUTS } from "@/utils/constants";
import React from "react";
interface ILayout {
  children?: React.ReactNode;
  type: keyof typeof LAYOUTS;
}
const Layout: React.FC<ILayout> = ({ type = LAYOUTS, children = <></> }) => {
  if (type === LAYOUTS.DEFAULT)
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  if (type === LAYOUTS.HERO)
    return (
      <main className={`flex flex-1 flex-col h-screen insetShadow`}>
        <Header />
        {children}
      </main>
    );
  if (type === LAYOUTS.ONLY_FOOTER)
    return (
      <div>
        {children}
        <Footer />
      </div>
    );
  return <>{children}</>;
};

export default Layout;
