import css from "./App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import NewsPage from "../../pages/NewsPage/NewsPage.jsx";

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/news" element={<NewsPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
