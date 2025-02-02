import css from "./App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "../Main/Main.jsx";

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
