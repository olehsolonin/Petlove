import css from './UserNav.module.css';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import UserBar from '../UserBar/UserBar';

export default function UserNav() {
    return (
        <div className={css.userNavCoantainer}>
            <UserBar />
            <LogOutBtn />
        </div>
    );
}
