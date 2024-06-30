import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarItems = [
    {
      section: {
        name: "",
        items: [
          {
            name: "Home",
            url: "/",
            icon: "",
          },
          {
            name: "Shorts",
            url: "/shorts",
            icon: "",
          },
          {
            name: "Subscriptions",
            url: "/subscriptions",
            icon: "",
          },
        ],
      },
    },
    {
      section: {
        name: "You",
        items: [
          {
            name: "My Channel",
            url: "/my-channel",
            icon: "",
          },
          {
            name: "History",
            url: "/history",
            icon: "",
          },
          {
            name: "Playlist",
            url: "/playlist",
            icon: "",
          },
        ],
      },
    },
  ];

  const { showSidebar } = useSelector((store) => store.appData);

  return (
    <>
      {showSidebar && (
        <div className="h-screen min-w-44 shadow-md">
          <div className="py-4 px-2">
            {sidebarItems.map((section, key) => {
              return (
                <div key={key} className="py-1">
                  <label className="font-semibold">
                    {section.section.name}
                  </label>
                  {section.section.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 cursor-pointer my-2 hover:bg-slate-100 rounded-md"
                    >
                      <Link to={item.url}>
                        {" "}
                        <h4 className="text-sm">{item.name}</h4>
                      </Link>
                    </div>
                  ))}
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
