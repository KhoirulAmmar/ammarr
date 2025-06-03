export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-500 text-center mb-8">Projects</h2>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Ammar Portfolio Website</h3>
        <p className="text-gray-400">Built with Next.js and Tailwind CSS</p>
        <a
          href="https://ammarfolio.vercel.app"
          target="_blank"
          className="text-purple-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </section>
  );
}
