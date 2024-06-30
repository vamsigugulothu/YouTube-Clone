import React from "react";

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
  ];

  return (
    <div className="h-screen w-36 shadow-md">
      <div className="py-4 px-2">
        {sidebarItems.map((section, key) => {
          return (
            <div key={key} className="py-2">
              <label className="font-semibold">{section.section.name}</label>
              {section.section.items.map((item, i) => (
                <div key={i} className="py-1 my-2">
                  <h4 className="text-sm">{item.name}</h4>
                </div>
              ))}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
