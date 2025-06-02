// components/About.js
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About ShortLynk</h2>
        <p className="text-gray-700">
          ShortLynk is a sleek and efficient URL shortener that turns long, clunky links into compact, shareable ones. 
          Built using Next.js, Tailwind CSS, and MongoDB, it's fast, secure, and easy to use.
        </p>
      </div>
    </section>
  );
}
