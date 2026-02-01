import css from "./Login.module.css";
import LogoBlack from "../LogoBlack/LogoBlack.jsx";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import loginMob2x from "../../img/login-mob-2x.jpg";

export default function Login() {
  return (
    <div className={css.loginContainer}>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <div className={css.imageWrapperContainer}>
        <PetBlockDog src={loginMob2x} width={335} height={280} />
      </div>
      <div className={css.loginFormContainer}>
        <LoginForm />
      </div>
    </div>
  );
}
