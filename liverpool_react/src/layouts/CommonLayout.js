import React from "react";

const CommonLayout = ({ children}) => {
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default CommonLayout;
