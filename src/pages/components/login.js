import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
export default function LoginButton(props) {
  function handleFun(res) {
    var userObejct = jwtDecode(res.credential);
    props.setUser(userObejct);
    document.getElementById("signInDiv").hidden = true;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.GOOGLE_LOGIN,
      callback: handleFun,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "medium",
      //   type: "icon",
    });
  }, []);

  return <div id="signInDiv"></div>;
}
