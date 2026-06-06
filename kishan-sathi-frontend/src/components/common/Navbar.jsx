import { Link } from "react-router-dom";


const Navbar = () => {

  return (

    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
            K
          </div>

          <div>
            <h1 className="text-xl font-bold text-green-800">
              Kishan Sathi
            </h1>

            <p className="text-xs text-gray-500">
              AI For Farmers
            </p>
          </div>

        </div>

        {/* Links */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/">
            Home
          </Link>

          <Link to="/crop-diagnosis">
            Crop Doctor
          </Link>

          <Link to="/animal-doctor">
            Animal Doctor
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* Buttons */}

        <div className="flex items-center gap-3">

          <Link to="/login">

            <button className="border border-green-700 text-green-700 px-5 py-2 rounded-lg font-medium hover:bg-green-50">

              Login

            </button>

          </Link>

          <Link to="/register">

            <button className="bg-green-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-800">

              Register

            </button>

          </Link>

        </div>

      </div>

    </nav>

  );

};

export default Navbar;