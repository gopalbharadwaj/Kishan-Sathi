import Sidebar from "../components/dashboard/Sidebar";

import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex bg-[#f8fafc]">

      <Sidebar />

      <div className="flex-1 min-h-screen">

        <Topbar />

        <div className="p-8">

          {children}

        </div>

      </div>

    </div>

  );

};

export default DashboardLayout;