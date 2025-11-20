import { Formik, Form, Field } from 'formik';
import css from './LoginForm.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Title from '../Title/Title';
import { fetchSignin } from '../../fetchReq.js';
import { login } from '../../redux/authSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    email: '',
    password: '',
};

const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
        .matches(
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'Invalid email format'
        )
        .required('Email is required'),
    password: Yup.string()
        .min(7, 'Too short')
        .max(256, 'Too long')
        .required('Required'),
});

export default function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        console.log('Form Submitted', values);
        const loginFetch = async () => {
            try {
                const response = await fetchSignin(values);
                if (response.status === 200) {
                    console.log('Login successful:', response.data);
                    const userData = response.data;
                    dispatch(
                        login({
                            user: {
                                name: userData.name,
                                email: userData.email,
                            },
                            token: userData.token,
                        })
                    );
                    //  window.localStorage.setItem("token", userData.token);
                    navigate('/profile', { replace: true });
                    return response.data;
                }
            } catch (error) {
                console.error('Error during login:', error);
                toast.error('Email or password invalid', {
                    position: 'top-center',
                });
            }
        };
        loginFetch();
        actions.resetForm();
    };

    return (
        <div className={css.formContainer}>
            {/* <h1 className={css.loginTitle}>Login</h1> */}
            <div className={css.titleContainer}>
                <Title title="Login" className={css.loginTitle} />
                <p className={css.loginText}>
                    Welcome! Please enter your credentials to login to the
                    platform:
                </p>
            </div>
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
                            name="password"
                            className={css.fields}
                            placeholder="Password"
                        />
                    </div>
                    <div className={css.submitButton}>
                        {' '}
                        <button type="submit" className={css.button}>
                            Log In
                        </button>
                        <div className={css.loginTextContainer}>
                            <p className={css.footerText}>
                                Don’t have an account?{' '}
                            </p>
                            <span className={css.registerLink}>
                                <nav className={css.nav}>
                                    <NavLink to="/register">Register</NavLink>
                                </nav>
                            </span>
                        </div>
                    </div>
                </Form>
            </Formik>
            <ToastContainer />
        </div>
    );
}
