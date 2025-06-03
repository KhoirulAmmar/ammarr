import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Khoirul Ammar</title>
      </Head>
      <main className="bg-black text-white">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
