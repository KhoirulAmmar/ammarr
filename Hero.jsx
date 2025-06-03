import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-purple-500">Muhammad Khoirul Ammar</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Student at Junior High School — Learning everything that excites me.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#projects" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-xl transition">
            My Projects
          </a>
          <a href="#contact" className="border border-purple-500 hover:bg-purple-500 py-2 px-6 rounded-xl text-white transition">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
