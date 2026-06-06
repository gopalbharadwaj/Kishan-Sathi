const Footer = () => {

  return (

    <footer className="bg-green-900 text-white py-14">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>

          <h1 className="text-2xl font-bold">
            Kishan Sathi
          </h1>

          <p className="mt-4 text-gray-300">

            AI powered platform for farmers
            and animal healthcare.

          </p>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 mt-4 text-gray-300">

            <li>Home</li>
            <li>Crop Doctor</li>
            <li>Animal Doctor</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Contact
          </h3>

          <ul className="space-y-3 mt-4 text-gray-300">

            <li>support@kishansathi.com</li>
            <li>+91 9876543210</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-lg">
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mt-4 px-4 py-3 rounded-lg text-black outline-none"
          />

          <button className="w-full mt-4 bg-white text-green-800 py-3 rounded-lg font-semibold">

            Subscribe

          </button>

        </div>

      </div>

    </footer>

  );

};

export default Footer;