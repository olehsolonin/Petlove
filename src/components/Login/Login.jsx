import css from "./Login.module.css";
import LogoBlack from "../LogoBlack/LogoBlack.jsx";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";

export default function Login() {
  return (
    <div className={css.loginContainer}>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <div className={css.petContainer}>
        <PetBlockDog />
      </div>

      <h1>Login</h1>
    </div>
  );
}
