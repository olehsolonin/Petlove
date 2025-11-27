import css from './LogOutBtn.module.css';
import { fetchSignOut } from '../../fetchReq.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice.js';
import { userDataClear } from '../../redux/userInfoSlice.js';
import Modal from 'react-modal';
import { useState } from 'react';
import petIcon from '../../img/logoutPetIcon-1x.png';

Modal.setAppElement('#root');

export default function LogOutBtn() {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

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
            <button className={css.logOutBtn} onClick={() => setIsOpen(true)}>
                Log out
            </button>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Logout Modal"
                overlayClassName={css.modalOverlay}
                className={css.modalContent}
            >
                <div className={css.petIcon}>
                    <img src={petIcon} alt="CatLogo" />
                </div>
                <div className={css.modalTextBtns}>
                    <h2>Already leaving?</h2>
                    <div className={css.modalButtonsContainer}>
                        <button className={css.yesLogOutBtn}>Yes</button>
                        <button className={css.cancelLogOutBtn}>Cancel</button>
                    </div>
                </div>

                <button onClick={() => setIsOpen(false)}>Закрити</button>
            </Modal>
        </div>
    );
}
