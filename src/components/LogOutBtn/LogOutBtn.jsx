import css from './LogOutBtn.module.css';
import { fetchSignOut } from '../../fetchReq.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice.js';
import { userDataClear } from '../../redux/userInfoSlice.js';
import Modal from 'react-modal';
import { useState } from 'react';
import petIcon from '../../img/logoutPetIcon-1x.png';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error('Error during logout', { position: 'top-center' });
        } finally {
            dispatch(logout());
            dispatch(userDataClear());
            navigate('/home', { replace: true });
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
                    <img
                        src={petIcon}
                        alt="CatLogo"
                        className={css.catLogoIcon}
                    />
                </div>
                <div className={css.modalTextBtns}>
                    <h2 className={css.modalTitle}>Already leaving?</h2>
                    <div className={css.modalButtonsContainer}>
                        <button
                            className={css.yesLogOutBtn}
                            onClick={handleSubmit}
                        >
                            Yes
                        </button>
                        <button
                            className={css.cancelLogOutBtn}
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                <div className={css.closeModalBtnContainer}>
                    <button onClick={() => setIsOpen(false)}>
                        <IoClose className={css.closeIconBtn} />
                    </button>
                </div>
            </Modal>
        </div>
    );
}
