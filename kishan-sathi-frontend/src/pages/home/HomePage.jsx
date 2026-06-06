import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import HeroSection from "../../components/home/HeroSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import AIWorkSection from "../../components/home/AIWorkSection";
import DoctorSection from "../../components/home/DoctorSection";

const HomePage = () => {

    return (

        <div>

            <Navbar/>

            <HeroSection/>

            <FeaturesSection/>

            <AIWorkSection/> 

            <DoctorSection/>

            <Footer/>

        </div>

    );

};

export default HomePage;