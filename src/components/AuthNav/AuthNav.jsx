import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav({ onNavigate }) {
    return (
        <div className={css.auth}>
            <NavLink to="/login" onClick={onNavigate} className={css.login}>
                Log in
            </NavLink>
            <NavLink
                to="/register"
                onClick={onNavigate}
                className={css.register}
            >
                Registration
            </NavLink>
        </div>
    );
}
