import DoctorSidebar from "../components/dashboard/DoctorSidebar";
import Topbar from "../components/dashboard/Topbar";

const DoctorLayout = ({ children }) => {

  return (

    <div className="flex bg-[#f8fafc]">

      <DoctorSidebar />

      <div className="flex-1 min-h-screen">

        <Topbar />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>

  );

};

export default DoctorLayout;