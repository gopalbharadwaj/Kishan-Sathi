import { useState } from "react";
import DoctorLayout from "../../layout/DoctorLayout";

const DoctorProfile = () => {

  const [formData, setFormData] = useState({

    name: "",

    specialization: "",

    experience: "",

    summary: "",

    image: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Profile Update API Next Step"
    );

  };

  return (

    <DoctorLayout>

      <h1 className="text-4xl font-bold mb-8">

        Doctor Profile

      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-3xl p-8 space-y-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <textarea
          name="summary"
          placeholder="Summary"
          rows="5"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl"
        />

        <button
          type="submit"
          className="bg-green-700 text-white px-8 py-4 rounded-xl"
        >

          Save Changes

        </button>

      </form>

    </DoctorLayout>

  );

};

export default DoctorProfile;