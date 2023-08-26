import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminHome from "./pages/AdminHome";
import WebFont from "webfontloader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Roboto", "Fahkwang"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
