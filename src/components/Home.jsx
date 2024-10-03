import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItems";
import Loading from "../loader/Loading"; // Import your loading component

function Home() {
  const { data, loading } = useAuth();
  console.log(data);

  return (
    <div className="flex mt-20">
      {/* Sidebar is always visible */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden flex-grow">
        {/* If loading is true, show the loading spinner, else show content */}
        {loading ? (
          <Loading /> // Show the loading spinner
        ) : (
          <>
            <ListItems />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
              {data.map((item) => {
                if (item.type !== "video") return false;
                return <Video key={item.id} video={item?.video} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
