import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Plus_Jakarta_Sans } from "@next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main
      // className={`${lato.className} flex flex-col h-full py-10 px-8 md:py-10 md:px-20 mx-auto max-w-7xl`}
      className={`${plusJakartaSans.className} flex flex-col h-full py-10 px-8 md:py-10 md:px-20 mx-auto max-w-5xl`}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default App;
