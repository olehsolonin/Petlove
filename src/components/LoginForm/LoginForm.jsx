import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={css.formContainer}>
      <h1 className={css.loginTitle}>Login</h1>
      <p className={css.loginText}>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.formFields}>
          <div className={css.emailTextFields}>
            <Field type="text" name="username" className={css.fields} />
            <Field type="email" name="email" className={css.fields} />
          </div>
          <div className={css.submitButton}>
            {" "}
            <button type="submit" className={css.button}>
              Log In
            </button>
            <p className={css.footerText}>Don’t have an account? Register</p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
