import Navbar from "@/components/navbar/Navbar";
import Toys from "@/components/toys/Toys";
import { ToyProvider } from "@/providers/ToyProvider";
import { GetStaticProps } from "next";
import localFont from "next/font/local";

const mickeyMouse = localFont({
  src: "./fonts/MickeyMouse.otf",
  variable: "--font-mickey-mouse",
});

export default function Home() {
  return (
    <div
      className={`${mickeyMouse.variable} bg-pattern1 bg-no-repeat bg-pattern1Position bg-pattern1Size h-screen w-full `}
    >
      <ToyProvider>
        <Navbar />
        <main className="flex h-full w-full justify-center items-center md:w-[987px] mx-auto">
          <Toys />
        </main>
      </ToyProvider>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      messages: (await import(`../locales/${context.locale}.json`)).default,
    },
  };
};
