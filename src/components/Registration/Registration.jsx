import css from "./Registration.module.css";
import Header from "../Header/Header.jsx";
import PetBlockDog from "../PetBlockDog/PetBlockDog.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import Title from "../Title/Title.jsx";
import { fetchSignup } from "../../fetchReq.js";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const handleSubmit = (values, actions) => {
  console.log("Form Submitted", values);
  const cleanedRegisterData = {};
  for (const key in values) {
    if (key !== "confirmPassword") {
      cleanedRegisterData[key] = values[key];
    }
  }

  const postSignup = async () => {
    try {
      const res = await fetchSignup(cleanedRegisterData);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  postSignup();
  actions.resetForm();
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(256, "Too long")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match") // Проверяем, что пароли совпадают
    .required("Required"),
});

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
          {/* <h1 className={css.registrationTitle}>Registration</h1> */}
          <Title title="Registration" className={css.registrationTitle} />
          <p className={css.registrationText}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <div className={css.formButtonContainer}>
          <div className={css.containerBox}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={FeedbackSchema}
            >
              <Form>
                <div className={css.formForm}>
                  <Field
                    type="text"
                    name="name"
                    className={css.formStyle}
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.errorText}
                  />

                  <Field
                    type="email"
                    name="email"
                    className={css.formStyle}
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.errorText}
                  />

                  <Field
                    type="password"
                    name="password"
                    className={css.formStyle}
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={css.errorText}
                  />

                  <Field
                    type="password"
                    name="confirmPassword"
                    className={css.formStyle}
                    placeholder="Confirm password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className={css.errorText}
                  />
                </div>
                <button type="submit" className={css.registerButton}>
                  Register
                </button>
              </Form>
            </Formik>
          </div>
          <div className={css.registerTextContainer}>
            <p className={css.registerText}> Already have an account? </p>

            <span className={css.spanText}>
              <nav className={css.nav}>
                <NavLink to="/login">Login</NavLink>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
