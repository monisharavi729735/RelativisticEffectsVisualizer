import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-8 py-12 text-white font-sans">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center text-center mb-16">
        <h1
          className="text-5xl font-bold text-blue-300 mb-4 tracking-tight"
          style={{
            textShadow: `
              0 0 2px #08f,
              0 0 4px #08f,
              0 0 6px #08f
            `
          }}
        >
          Welcome to CosmicLens
        </h1>



        <h4 className="text-lg text-gray-300 max-w-2xl mt-2">
          Explore the fascinating world of physics through immersive, interactive simulations.
        </h4>
        </header>

        {/* Simulation Preview Section */}
        <section className="mt-24 px-6 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-14">
            Dive into intuitive experiments that bring fundamental principles and complex phenomena to life.  
            Adjust key variables and observe how the laws of physics shape the universe around us.
          </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Simulation Card 1 */}
          <Link to="/relativity" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-white">Special Relativity</h4>
            <p className="text-gray-300 text-sm">
              Visualize time dilation, length contraction, and simultaneity using an adjustable rocket speed.
            </p>
          </Link>

          {/* Simulation Card 2 */}
          <Link to="/coming-soon" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-white">Relativistic Doppler Effect</h4>
            <p className="text-gray-300 text-sm">
              Observe how motion alters the frequency of light — redshifts and blueshifts explained.
            </p>
            <p className="text-gray-300 text-sm mt-2">(Coming Soon...)</p>
          </Link>


          {/* Simulation Card 3 */}
          <Link to="/coming-soon" className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-6 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <h4 className="text-xl font-bold mb-2 text-white">The Twin Paradox</h4>
            <p className="text-gray-300 text-sm">
              Explore how time slows for a traveling twin — spacetime diagrams bring it to life.
            </p>
            <p className="text-gray-300 text-sm mt-2">(Coming Soon...)</p>
          </Link>
        </div>
      </section>

      <section className="mt-24 px-10">
        <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto text-left gap-8">
          {/* Left Side – Title */}
          <div className="w-full md:w-1/4 flex items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-white">
              What Inspired This
            </h2>
          </div>


          {/* Right Side – Content */}
          <div className="w-full md:w-3/4 text-gray-300 text-lg leading-relaxed">
            <p>
              Physics, to me, is the closest thing we have to a universal language — it explains everything
              from the dance of galaxies to the flicker of an atom.
            </p>
            <br />
            <p>
              I’ve always admired Richard Feynman’s knack for making even the strangest ideas feel playful and alive.
              He made physics not just about solving equations, but about seeing the beauty behind them.
            </p>
            <br />
            <p>
              This project is my attempt to share that sense of wonder — turning concepts into something you can explore
              and experience for yourself.
            </p>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="mt-32 text-center text-gray-500 text-sm">
        Copyright © 2025 Monisha R
      </footer>
    </div>
  );
}
