import "./App.css";
import { useEffect } from "react";
import { fireStore } from "./util/firebase";

function App() {
  function handleFun(res) {
    console.log("JWT " + res.credential);
  }
  useEffect(() => {
    console.log(fireStore.app.name);
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.GOOGLE_LOGIN,
      callback: handleFun,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}
export default App;
