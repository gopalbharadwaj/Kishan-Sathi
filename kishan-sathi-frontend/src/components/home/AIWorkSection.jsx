import {
    FaCloudUploadAlt,
    FaRobot,
    FaClipboardCheck,
    FaShieldAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const steps = [

    {
        id: 1,
        title: "Upload Image",
        desc: "Upload clear image of your crop",
        icon: <FaCloudUploadAlt />
    },

    {
        id: 2,
        title: "AI Analysis",
        desc: "AI analyzes crop disease instantly",
        icon: <FaRobot />
    },

    {
        id: 3,
        title: "Get Solution",
        desc: "Receive medicines and treatment",
        icon: <FaClipboardCheck />
    },

    {
        id: 4,
        title: "Save Crop",
        desc: "Protect your crops with guidance",
        icon: <FaShieldAlt />
    }

];

const AIWorkSection = () => {

    const navigate = useNavigate();

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <h2 className="text-4xl font-bold text-gray-900">

                        AI Crop Diagnosis - How It Works

                    </h2>

                    <p className="text-gray-500 mt-4">

                        Simple AI powered crop disease detection

                    </p>

                </div>

                {/* Main Layout */}

                <div className="mt-16 bg-[#f0fdf4] border border-green-100 rounded-[40px] p-10">

                    <div className="grid lg:grid-cols-5 gap-10 items-center">

                        {/* Steps */}

                        <div className="lg:col-span-4">

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                                {steps.map((step) => (

                                    <div
                                        key={step.id}
                                        className="relative text-center"
                                    >

                                        {/* Connecting Line */}

                                        {step.id !== 4 && (

                                            <div className="hidden md:block absolute top-10 left-[70%] w-full h-[2px] bg-green-300 z-0"></div>

                                        )}

                                        {/* Icon */}

                                        <div className="relative z-10 w-20 h-20 mx-auto rounded-full bg-white text-green-700 flex items-center justify-center text-4xl shadow-md">

                                            {step.icon}

                                        </div>

                                        {/* Step Number */}

                                        <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center mx-auto mt-4 font-bold">

                                            {step.id}

                                        </div>

                                        {/* Text */}

                                        <h3 className="text-xl font-semibold mt-5 text-gray-900">

                                            {step.title}

                                        </h3>

                                        <p className="text-gray-600 mt-3 text-sm leading-6 px-2">

                                            {step.desc}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Right Card */}

                        <div className="lg:col-span-1">

                            <div className="bg-white rounded-3xl shadow-sm border border-green-100 p-4">

                                <img
                                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
                                    alt="crop"
                                    className="rounded-2xl h-[240px] object-cover w-full"
                                />

                                <h3 className="text-lg font-bold mt-4 text-gray-900">

                                    Detects 100+ Crop Diseases

                                </h3>

                                <p className="text-gray-500 mt-2 text-sm leading-6">

                                    Advanced AI technology for smart farming solutions.

                                </p>

                                <button
                                    onClick={() => navigate("/login")}
                                    className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-xl font-semibold text-sm"
                                >
                                    Try Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default AIWorkSection;