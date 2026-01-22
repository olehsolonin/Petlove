import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const linkClass = ({ isActive }) =>
    isActive ? `${css.link} ${css.active}` : css.link;

export default function Nav({ onNavigate }) {
    return (
        <nav className={css.nav}>
            <NavLink to="/news" className={linkClass} onClick={onNavigate}>
                News
            </NavLink>
            <NavLink to="/notices" className={linkClass} onClick={onNavigate}>
                Find pet
            </NavLink>
            <NavLink to="/friends" className={linkClass} onClick={onNavigate}>
                Our friends
            </NavLink>
        </nav>
    );
}
