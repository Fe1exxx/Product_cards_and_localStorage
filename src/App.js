import DataSection from "./data/DataSection";
import GoUp from "./GoUp";
import { useEffect, useRef, useState } from "react";

export default function App() {
  return (
    <section>
      <GoUp />
      <DataSection />
      <button onClick={() => setText("sss")}>отправить</button>
    </section>
  );
}
