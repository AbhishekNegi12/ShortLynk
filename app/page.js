// import Image from "next/image";
// import Link from "next/link";

// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "400","700", "900"], // add other weights if needed
// });

// export default function Home() {
//   return (
//     <main className="bg-pink-100">
//       <section className="grid grid-cols-2 h-[50vh]">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <p className={`text-3xl font-bold ${poppins.className}`}>The Best URL Shortner in the Market</p>
//           <p className="px-30 text-center">We are the most straight forward URL Shortner in the world. Most of the URL Shortners will tack you or ask your details to login. We understand your needs</p>
//           <div className='flex gap-3 justify-start'>
//                 <Link href="/shorten"><button className=' text-white bg-pink-500 rounded-lg font-bold p-3 py-1'>Try Now</button></Link>
//                 <Link href="/github"><button className='text-white bg-pink-500 rounded-lg font-bold p-3 py-1'>Github</button></Link>
//             </div>
//         </div>

//         {/* Either use width={300} height={300} or fill={true} */}
//         {/* but for fill put relative in its parent */}
//         <div className="flex justify-start relative">
//           <Image className="mix-blend-darken" alt="an Image of a vector" fill={true} src={"/vector.jpg"} />
//         </div>

//       </section>
//     </main>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export default function Home() {
  return (
    <main className="bg-pink-100 scroll-smooth">
      {/* Hero Section */}
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The Best URL Shortner in the Market
          </p>
          <p className="px-30 text-center">
            We are the most straightforward URL Shortener in the world. Most
            other tools track you or ask for login — we don't.
          </p>
          <div className="flex gap-3 justify-start">
            <Link href="/shorten">
              <button className="text-white bg-pink-500 rounded-lg font-bold p-3 py-1">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="text-white bg-pink-500 rounded-lg font-bold p-3 py-1">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image
            className="mix-blend-darken"
            alt="vector"
            fill={true}
            src={"/vector.jpg"}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About ShortLynk</h2>
          <p className="text-gray-700">
            ShortLynk is your privacy-first, no-login URL shortener powered by
            Next.js and MongoDB. We keep things simple and secure for everyone.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-pink-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Questions? Feedback? Let us know.
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded h-32"
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
            >
              Send Message
            </button>
          </form>

          {/* Made with love footer */}
          <div className="mt-12 text-center text-gray-700">
            <p className="text-sm font-bold">
              Made with <span className="text-red-500">♥</span> by{" "}
              <span className="font-bold">Abhishek</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
