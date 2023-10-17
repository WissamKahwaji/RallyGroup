import React from "react";

const Container = ({ children, className, style }) => {
  return (
    <div style={style} className={`mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
