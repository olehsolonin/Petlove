import css from './Header.module.css';
import LogoBlack from '../LogoBlack/LogoBlack.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserNav from '../UserNav/UserNav.jsx';

export default function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const open = () => setIsBurgerOpen(true);
    const close = () => setIsBurgerOpen(false);
    return (
        <div className={css.headerContainer}>
            <LogoBlack />
            <button type="button" onClick={open} aria-label="Open menu">
                ☰
            </button>

            <BurgerMenu isOpen={isBurgerOpen} onClose={close}>
                <Nav onNavigate={close} />
                {isLoggedIn ? (
                    <UserNav onNavigate={close} />
                ) : (
                    <AuthNav onNavigate={close} />
                )}
            </BurgerMenu>
        </div>
    );
}
