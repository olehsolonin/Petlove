import Modal from 'react-modal';
import css from './ModalAttention.module.css';
import petIcon from '../../img/modalAttentionIcon-1x.png';
import { IoClose } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ModalAttention({ isOpen, onClose }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleLogIn = () => {
        onClose();
        navigate('/login', { replace: true });
    };

    const handleRegistration = () => {
        onClose();
        navigate('/register', { replace: true });
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={css.modalOverlay}
            className={css.modalContainer}
            ariaHideApp={false}
        >
            <div className={css.attentionIconContainer}>
                <img src={petIcon} alt="DogLogo" className={css.dogLogoIcon} />
            </div>
            <div className={css.modalTextBtnContainer}>
                <h2 className={css.title}>Attention</h2>
                <div className={css.textContainer}>
                    <p className={css.modalText}>
                        We would like to remind you that certain functionality
                        is available only to authorized users.If you have an
                        account, please log in with your credentials. If you do
                        not already have an account, you must register to access
                        these features.
                    </p>
                </div>
                <div className={css.mainBtnsContainer}>
                    <button
                        type="button"
                        className={css.logInBtn}
                        onClick={handleLogIn}
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        className={css.regBtn}
                        onClick={handleRegistration}
                    >
                        Registration
                    </button>
                </div>
            </div>

            <button className={css.closeBtnContainer} onClick={onClose}>
                <IoClose className={css.closeIconBtn} />
            </button>
        </Modal>
    );
}
