import Image from "next/image";
import TimePiecesLogo1 from "../public/src/TimePiecesLogo1.png";
import Index from "./index";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col justify-between">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* <source src={background} type="video/mp4" /> */}
          <source src="/src/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Header */}
      <header className="p-5 flex flex-col items-center justify-center text-[60px] text-white font-serif">
      {/* <div className="flex-1 text-center">Timepieces.lk</div> */}
      <Image 
          src="/src/TimePiecesLogo2.png"
          alt="Timepieces Logo"
          width={350}  // Adjust width
          height={350} // Adjust height
        />
      <div className="">Timepieces.lk</div>
       
      </header>

      {/* Main Content */}
      <section className="flex-grow flex flex-col items-center justify-center text-center relative">

        {/* Under Construction Text */}
        <h1 className="text-4xl md:text-6xl font-bold">Under Construction</h1>
        <p className="mt-4 text-lg md:text-xl">
          Stay tuned as we bring you the finest luxury timepieces in Sri Lanka.
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/message/POWXHJ2T7IGGB1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-black bg-opacity-70">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
        <p>📍 Location: Wellampitiya, Sri Lanka</p>
        <p>📧 Email: info.timepieces.lk@gmail.com</p>
        <p>📞 Contact: +94-712424025</p>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Timepieces.lk | All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}