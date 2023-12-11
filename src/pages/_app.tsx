import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${montserrat.className} flex flex-1 flex-col h-screen insetShadow`}
    >
      <Header />
      <div className="flex flex-1 h-full">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
