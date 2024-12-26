import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import rocket from '../assets/images/rocket.png';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const HomePage = () => {
  const [value, setValue] = useState(0); // Initial v/c value
  const maxWidth = 340; // Rocket width at v/c = 0 (160)
  const fixedHeight = 320; // Adjusted height for the rocket image (150)
  const lengthFactor = Math.sqrt(1 - value ** 2); // Length contraction factor
  const contractedWidth = maxWidth * lengthFactor; // Dynamically calculate rocket width

  const properTime = 1; // Assume proper time (dt) as 1 second
  const timeDilation = properTime / Math.sqrt(1 - value ** 2); // Calculate dilated time (dt')

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  // Data for the graph
  const velocities = Array.from({ length: 100 }, (_, i) => i / 100); // 0 to 0.99 in steps of 0.01
  const lengthContractions = velocities.map((v) => Math.sqrt(1 - v ** 2));
  const timeDilations = velocities.map((v) => properTime / Math.sqrt(1 - v ** 2));

  const chartData = {
    labels: velocities.map((v) => v.toFixed(2)), // X-axis labels (v/c)
    datasets: [
      {
        label: "Length Contraction (Factor)",
        data: lengthContractions,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Time Dilation (Seconds)",
        data: timeDilations,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white", // Legend label color
          font: {
            size: 14, // Font size for the legend
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Velocity Ratio (v/c)",
          color: "white", // X-axis title color
          font: {
            size: 16, // Font size for the X-axis title
          },
        },
        ticks: {
          color: "white", // X-axis ticks color
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
          color: "white", // Y-axis title color
          font: {
            size: 16, // Font size for the Y-axis title
          },
        },
        ticks: {
          color: "white", // Y-axis ticks color
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mt-10 mb-6 text-center text-white">
        <span className="highlight highlight-variant-9 highlight-blue-800 highlight-spread-l-xl highlight-spread-t-sm">
          Relativistic Effects Visualizer
        </span>
      </h2>
      <h4 className="text-xl font-bold mt-6 mb-20 text-center text-white">
        Explore the mind-bending effects of traveling near the speed of light.
      </h4>

      {/* Main container */}
      <div className="flex items-start justify-center space-x-10 mx-14">
        {/* LHS: Slider, input, and button */}
        <div className="relative bg-white/10 rounded-lg border border-white/20 shadow-lg p-12 w-2/5 h-96 flex justify-center items-center flex-shrink-0">
          <div className="w-1/5 flex justify-center items-center flex-shrink-0">
            <p className="text-xl font-bold mt-4 text-white mx-20">Control Panel</p>
          </div>
          <div className="w-4/5 flex justify-center items-center flex-shrink-0">
            <form className="max-w-md mt-2 w-3/5">
              <label
                htmlFor="velocity-input"
                className="text-sm font-medium text-gray-900 dark:text-white"
              >
                Ratio of (v/c)
              </label>
              <input
                id="velocity-range-input"
                type="range"
                value={value}
                min="0"
                max="0.99"
                step="0.01"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mt-2"
                onChange={handleInputChange}
              />
              <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">min (0)</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">max (0.99)</span>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="velocity-input"
                  className="text-sm font-medium text-gray-900 dark:text-white mt-2"
                >
                  Adjust (v/c)
                </label>
                <input
                  type="number"
                  id="velocity-input"
                  className="block mt-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter v/c (e.g., 0.5)"
                  value={value}
                  onChange={handleInputChange}
                  min="0"
                  max="0.99"
                  step="0.01"
                  required
                />
              </div>
            </form>
          </div>
        </div>

        {/* RHS: Display container */}
        <div className="w-1/2 flex justify-between items-center flex-shrink-0 space-x-20">
          <div className="w-1/2 flex flex-col justify-center items-center flex-shrink-0">
            <img
              src={rocket}
              alt="Rocket illustration"
              style={{
                width: `${contractedWidth}px`, // Adjust width based on contraction
                height: `${fixedHeight}px`, // Adjusted fixed height
              }}
              className="transition-all duration-500 ease-in-out animate-float"
            />
            {/* Length Contraction Label Below Rocket */}
            <div className="text-white text-center mt-4">
              <p className="text-lg font-bold">Length Contraction</p>
              <p className="text-sm text-gray-400">
                Current length factor: {lengthFactor.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-end items-center flex-shrink-0">
            {/* Digital Clock and Time Dilation in column */}
            <div className="relative flex flex-col justify-center items-center mt-4 flex-grow">
              {/* Digital Clock Text */}
              <div className="relative text-lg text-white font-digital">
                HH:MM
              </div>

              {/* Expanding Ring Animation */}
              <div
                className="absolute w-20 h-20 border-2 border-white rounded-full"
                style={{
                  animation: `ping ${timeDilation}s linear infinite`,
                }}
              ></div>
            </div>

            {/* Time Dilation Label at the bottom */}
            <div className="flex flex-col h-full justify-end">
              <div className="text-white text-center mt-20 mb-0">
                <p className="text-lg font-bold">Time Dilation</p>
                <p className="text-sm text-gray-400">
                  Dilated time: {timeDilation.toFixed(2)} seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graph container */}
      <div className="my-20">
        <h3 className="text-center text-2xl font-bold text-white mb-6">Graph of Relativistic Effects</h3>
        <div className="w-3/4 mx-auto">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
