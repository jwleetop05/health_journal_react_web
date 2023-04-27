import "./App.css";
import { useEffect } from "react";
import LoginPage from "./pages/loginPage";
import GlobalStyle from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Routes></Routes>
      <LoginPage></LoginPage>
    </div>
  );
}
export default App;
