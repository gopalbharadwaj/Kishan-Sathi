import {
  FaLeaf,
  FaUserMd,
  FaComments,
  FaBell
} from "react-icons/fa";

const features = [

  {
    title: "AI Crop Diagnosis",
    icon: <FaLeaf />,
    desc: "Detect crop diseases instantly"
  },

  {
    title: "Animal Doctors",
    icon: <FaUserMd />,
    desc: "Connect with expert vets"
  },

  {
    title: "Real-time Chat",
    icon: <FaComments />,
    desc: "Chat with doctors live"
  },

  {
    title: "Notifications",
    icon: <FaBell />,
    desc: "Get important updates"
  }

];

const FeaturesSection = () => {

  return (

    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">

          Our Key Features

        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-[#f8fafc] border rounded-2xl p-8 text-center hover:shadow-lg transition"
            >

              <div className="text-4xl text-green-700 flex justify-center mb-5">

                {feature.icon}

              </div>

              <h3 className="text-xl font-semibold">

                {feature.title}

              </h3>

              <p className="text-gray-500 mt-3">

                {feature.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default FeaturesSection;