import { useState } from "react";

const ContactPage = () => {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully");

  };

  return (

    <div className="bg-[#f8fffa] min-h-screen">

      <section className="bg-green-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">

            Contact Us

          </h1>

          <p className="mt-6 text-xl text-green-100">

            We'd love to hear from you

          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-10 border">

            <h2 className="text-3xl font-bold">

              Send Message

            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-8"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="bg-green-700 text-white px-8 py-4 rounded-xl"
              >

                Send Message

              </button>

            </form>

          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-3xl p-8 border">

              <h3 className="text-2xl font-bold">

                Email

              </h3>

              <p className="mt-3 text-gray-600">

                support@kishansathi.com

              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 border">

              <h3 className="text-2xl font-bold">

                Phone

              </h3>

              <p className="mt-3 text-gray-600">

                +91 9876543210

              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 border">

              <h3 className="text-2xl font-bold">

                Location

              </h3>

              <p className="mt-3 text-gray-600">

                Bangalore, India

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

};

export default ContactPage;