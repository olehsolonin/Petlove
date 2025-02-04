import css from "./App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "../Main/Main.jsx";
import Home from "../Home/Home.jsx";

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
