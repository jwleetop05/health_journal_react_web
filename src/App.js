import "./App.css";
import { useEffect } from "react";
import { fireStore } from "./util/firebase";

function App() {
  useEffect(() => {
    console.log(fireStore);
  });

  return <div className="App"></div>;
}

export default App;
