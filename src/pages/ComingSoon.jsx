import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="relative bg-white/10 rounded-xl border border-white/20 shadow-lg p-10 w-full max-w-xl text-center backdrop-blur-md">
        {/* Optional glow/overlay */}
        <div className="absolute inset-0 bg-white/10 opacity-60 rounded-xl pointer-events-none"></div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-white relative z-10">🚧 Coming Soon</h2>
        <p className="text-gray-300 mt-4 text-sm relative z-10">
          This feature is under construction. Check back soon!
        </p>

        {/* Button */}
        <Link to="/" className="relative z-10">
          <button className="mt-8 text-white bg-indigo-900 hover:bg-indigo-700 px-6 py-2 rounded-lg shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f] transition-all duration-200">
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;