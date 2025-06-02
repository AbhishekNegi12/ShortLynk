// components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have questions or feedback? We'd love to hear from you.</p>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border px-4 py-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border px-4 py-2 rounded h-32" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
