import css from "./Registration.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";
import { Formik, Form, Field } from "formik";

export default function Registration() {
  return (
    <div className={css.registrationContainer}>
      <div className={css.headerContainer}>
        <Header />
      </div>
      <div className={css.petContainer}>
        <PetBlockDog />
      </div>
      <div className={css.registrationFormContainer}>
        <div className={css.titleTextContainer}>
          <h1 className={css.registrationTitle}>Registration</h1>
          <p className={css.registrationText}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <div className={css.formButtonContainer}>
          <div className={css.containerBox}>
            <Formik initialValues={{}} onSubmit={() => {}}>
              <Form>
                <div className={css.formForm}>
                  <Field
                    type="text"
                    name="username"
                    className={css.formStyle}
                    placeholder="Name"
                  />
                  <Field
                    type="email"
                    name="email"
                    className={css.formStyle}
                    placeholder="Email"
                  />
                  <Field
                    type="password"
                    name="userpassword"
                    className={css.formStyle}
                    placeholder="Password"
                  />
                  <Field
                    type="password"
                    name="confirmPassword"
                    className={css.formStyle}
                    placeholder="Confirm password"
                  />
                </div>
                <button type="submit" className={css.registerButton}>
                  Register
                </button>
              </Form>
            </Formik>
          </div>
          <div className={css.registerTextContainer}>
            <p className={css.registerText}>
              Already have an account?{" "}
              <span className={css.spanText}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
