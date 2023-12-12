import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LAYOUTS } from "@/utils/enums";
import React from "react";
interface ILayout {
  children?: React.JSX.Element;
  type: LAYOUTS;
}
const Layout: React.FC<ILayout> = ({
  type = LAYOUTS.DEFAULT,
  children = <></>,
}) => {
  if ((type = LAYOUTS.DEFAULT))
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  if ((type = LAYOUTS.HERO))
    return (
      <main className={`flex flex-1 flex-col h-screen insetShadow`}>
        {children}
      </main>
    );
  return children;
};

export default Layout;
