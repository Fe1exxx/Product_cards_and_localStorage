import { useEffect, useRef } from "react";

export default function GoUp() {
  const indexStart = useRef(null);

  const updateRef = () =>
    indexStart.current?.scrollIntoView({ behavior: "smooth" });
  {
    document.querySelector("body").style = "background: #777";
  }

  return (
    <>
      <div ref={indexStart}></div>
      <button
        style={{
          background: "transparent",
          border: "none",
          fontSize: "35px",
          position: "fixed",
          bottom: "30px",
          right: "30px",
          cursor: "pointer",
        }}
        onClick={updateRef}
      >
        ⬆️
      </button>
    </>
  );
}
