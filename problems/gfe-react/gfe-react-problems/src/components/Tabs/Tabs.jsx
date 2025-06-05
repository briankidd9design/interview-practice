import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabItems }) {
  console.log(tabItems)
  const [activeTab, setActiveTab] = useState(tabItems[0]);

  return (
    <div>
      <div className="tab-items">
        {tabItems.map((tabItem) => (
          <button
            onClick={() => setActiveTab(tabItem)}
            // className={activeTab.id === tabItem.id ? "active" : ""}
            // logical AND operator
            // className={`tab ${activeTab.id === tabItem.id && "active"}`}
            className={["tab", activeTab.id === tabItem.id && "active"]
              .filter(Boolean)
              .join(" ")}
          >
            {tabItem.label}{" "}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabItems.map((tabItem) => (
          // <p>{activeTab.id === tabItem.id ? tabItem.content : null}</p>
          <>{activeTab.id === tabItem.id && <p>{tabItem.content}</p>}</>
        ))}
      </div>
    </div>
  );
}
