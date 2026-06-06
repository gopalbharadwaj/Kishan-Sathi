const Topbar = () => {

  return (

    <div className="bg-white border-b px-8 py-5 flex items-center justify-between">

      <div>

        <h1 className="text-3xl font-bold text-gray-900">

          Dashboard

        </h1>

        <p className="text-gray-500 mt-1">

          Welcome back 👋

        </p>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search..."
        className="border rounded-2xl px-5 py-3 outline-none w-[300px]"
      />

    </div>

  );

};

export default Topbar;