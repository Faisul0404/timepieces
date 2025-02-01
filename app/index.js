// import background from "./background.mp4";

export default function Index() {
  return (
    <div>
        <main>
            <header className="text-center bg-black">
                Timepieces.lk
            </header>
            <main>

            <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="./background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

            </main>
            <footer>

            </footer>
        </main>
    </div>
  )
}
