import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Contact Me</h2>
      <div className="flex justify-center gap-8 text-2xl text-white">
        <a href="https://instagram.com/khrlamr_7" target="_blank" className="hover:text-purple-400">
          <FaInstagram />
        </a>
        <a href="https://wa.me/6289601251560" target="_blank" className="hover:text-purple-400">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
