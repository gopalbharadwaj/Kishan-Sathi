import {
  FaLeaf,
  FaRobot,
  FaUserMd
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {

  const navigate = useNavigate();

  return (

    <section className="bg-[#f0fdf4] py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}

        <div>

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-medium">

            AI Powered Smart Farming

          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 text-gray-900">

            Smart AI Solution For{" "}

            <span className="text-green-700">
              Farmers & Animals
            </span>

          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8 max-w-xl">

            Detect crop diseases instantly using AI,
            connect with animal doctors, and improve
            farming productivity with modern technology.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={() => navigate("/login")}
              className="bg-green-700 hover:bg-green-800 text-white px-7 py-3 rounded-xl font-semibold shadow-md"
            >
              Diagnose Crop
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-white border border-gray-300 px-7 py-3 rounded-xl font-semibold hover:bg-gray-50"
            >
              Book Appointment
            </button>

          </div>

          {/* Small Stats */}

          <div className="flex gap-8 mt-10 flex-wrap">

            <div>

              <h2 className="text-3xl font-bold text-green-700">
                10K+
              </h2>

              <p className="text-gray-500">
                Farmers Helped
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-700">
                100+
              </h2>

              <p className="text-gray-500">
                Crop Diseases
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-700">
                24/7
              </h2>

              <p className="text-gray-500">
                AI Support
              </p>

            </div>

          </div>

        </div>

        {/* Right Image Side */}

        <div className="relative">

          {/* Main Image */}

          <img
            src="https://media.istockphoto.com/id/2162044335/photo/smart-farming-farmer-uses-agro-app-on-tablet-in-corn-field-at-sunset.webp?s=2048x2048&w=is&k=20&c=ME2vv4_JgS9kgl4I8EP2hHgOIm8CnIBjKQmbH81CamE="
            alt="farmer"
            className="rounded-[40px] shadow-xl w-full h-[550px] object-cover"
          />


          {/* Floating Badge */}

          <div className="absolute bottom-36 left-[-10px] bg-green-700 text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">

            <FaLeaf />

            <span className="font-medium">
              Smart Farming Technology
            </span>

          </div>

        </div>

      </div>

    </section>

  );

};

export default HeroSection;