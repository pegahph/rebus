import Navbar from "@/components/navbar/Navbar";
import { GetStaticProps } from "next";
import localFont from "next/font/local";

const mickeyMouse = localFont({
  src: "./fonts/MickeyMouse.otf",
  variable: "--font-mickey-mouse",
});

export default function Home() {
  return (
    <div
      className={`${mickeyMouse.variable} bg-pattern1 bg-no-repeat bg-pattern1Position bg-pattern1Size h-screen w-full`}
    >
      <Navbar />
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
