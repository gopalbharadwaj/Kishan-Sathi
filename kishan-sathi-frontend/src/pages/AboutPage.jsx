const AboutPage = () => {

  const features = [

    {
      title: "AI Crop Diagnosis",
      desc: "Detect crop diseases instantly using AI powered image analysis."
    },

    {
      title: "Animal Doctor Consultation",
      desc: "Connect with veterinary doctors and get expert guidance."
    },

    {
      title: "Smart Farming",
      desc: "Improve productivity with technology driven farming solutions."
    }

  ];

  return (

    <div className="bg-[#f8fffa] min-h-screen">

      <section className="bg-green-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">

            About Kishan Sathi

          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto text-green-100">

            Empowering farmers with Artificial Intelligence
            and expert veterinary support for smarter farming.

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-3xl shadow-xl"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold">

              Our Mission

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              Kishan Sathi helps farmers diagnose crop diseases,
              connect with veterinary doctors and make better
              farming decisions using modern AI technology.

            </p>

            <p className="mt-4 text-gray-600 leading-8">

              Our goal is to make agriculture smarter,
              faster and more accessible for everyone.

            </p>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold text-center">

          Why Choose Us

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {

            features.map((item, index) => (

              <div
                key={index}
                className="bg-white p-8 rounded-3xl border shadow-sm"
              >

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="text-gray-600 mt-4 leading-7">

                  {item.desc}

                </p>

              </div>

            ))

          }

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 text-center border">

            <h2 className="text-4xl font-bold text-green-700">

              10K+

            </h2>

            <p className="mt-2 text-gray-500">

              Farmers Helped

            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border">

            <h2 className="text-4xl font-bold text-green-700">

              100+

            </h2>

            <p className="mt-2 text-gray-500">

              Crop Diseases

            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border">

            <h2 className="text-4xl font-bold text-green-700">

              50+

            </h2>

            <p className="mt-2 text-gray-500">

              Doctors

            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 text-center border">

            <h2 className="text-4xl font-bold text-green-700">

              24/7

            </h2>

            <p className="mt-2 text-gray-500">

              Support

            </p>

          </div>

        </div>

      </section>

    </div>

  );

};

export default AboutPage;