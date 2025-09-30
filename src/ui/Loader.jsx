import React, { useEffect, useState } from "react";

const Loader = () => {
  const [leftPosition, setLeftPosition] = useState("50%");

  useEffect(() => {
    const handleResize = () => {
      const isMdOrLarger = window.innerWidth >= 768; // md breakpoint
      if (isMdOrLarger) {
        setLeftPosition("calc(50% + 11%)"); // 12.5% = half of sidebar width (25%)
        // yaha hum ny loader ko center krny ky lie side bar ki width nikali md sy upper oski jitni width dy di half takay wo center hojye 
      } else {
        setLeftPosition("50%");
      }
    };

    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex items-center justify-center absolute top-[50%] translate-y-[-50%]"
      style={{
        left: leftPosition,
        transform: "translateX(-50%)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin"
        style={{
          borderColor: "#8F00FF #DA00FF #DA00FF #8F00FF",
        }}
      ></div>
    </div>
  );
};

export default Loader;
