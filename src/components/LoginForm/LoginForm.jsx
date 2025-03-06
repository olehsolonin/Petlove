import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  email: "",
  userpassword: "",
};

const handleSubmit = (values, actions) => {
  console.log("Form Submitted", values);
  actions.resetForm();
};

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  userpassword: Yup.string()
    .min(7, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function LoginForm() {
  return (
    <div className={css.formContainer}>
      <h1 className={css.loginTitle}>Login</h1>
      <p className={css.loginText}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.formFields}>
          <div className={css.emailTextFields}>
            <Field
              type="email"
              name="email"
              className={css.fields}
              placeholder="Email"
            />

            <Field
              type="password"
              name="userpassword"
              className={css.fields}
              placeholder="Password"
            />
          </div>
          <div className={css.submitButton}>
            {" "}
            <button type="submit" className={css.button}>
              Log In
            </button>
            <div className={css.loginTextContainer}>
              <p className={css.footerText}>Don’t have an account? </p>
              <span className={css.registerLink}>
                <nav className={css.nav}>
                  <NavLink to="/register">Register</NavLink>
                </nav>
              </span>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
