import { useState } from "react";
import "./App.css";
import DragFileInput from "./components/DragFileInputes/DragFileInput";

function App() {
  return (
    <div className="box">
      <h2 className="header">React Drag & Drop File</h2>
      <DragFileInput />
    </div>
  );
}

export default App;
