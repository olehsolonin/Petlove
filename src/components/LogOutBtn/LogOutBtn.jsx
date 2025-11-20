import css from './LogOutBtn.module.css';
import { fetchSignOut } from '../../fetchReq.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice.js';
import { userDataClear } from '../../redux/userInfoSlice.js';

export default function LogOutBtn() {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const logOutRes = await fetchSignOut(token);
            console.log(logOutRes);
            // тут можно почистить localStorage, сделать redirect и т.п.
            dispatch(logout());
            dispatch(userDataClear());

            navigate('/home', { replace: true });
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };
    return (
        <div>
            <button className={css.logOutBtn} onClick={handleSubmit}>
                Log out
            </button>
        </div>
    );
}
