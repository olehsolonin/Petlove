import Modal from 'react-modal';
import css from './ModalNotice.module.css';
import { CiHeart } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddToFavourites } from '../../fetchReq.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalNotice({ isOpen, onClose, data }) {
    console.log(data);
    const token = useSelector((state) => state.auth.token);
    const addFavourite = async () => {
        try {
            const res = await fetchAddToFavourites(data._id, token);
            if (res.status === 200) {
                toast.success('Pet added successfully', {
                    position: 'top-center',
                });
                onClose();
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    if (!isOpen) return null; // ✅ защита
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={css.modalOverlay}
            className={css.modalContainer}
            ariaHideApp={false} // ✅ см. ниже
        >
            {!data ? (
                <div className={css.loading}>Loading...</div>
            ) : (
                <div className={css.contentWrapper}>
                    <div className={css.petImgContainer}>
                        <img
                            src={data.imgURL}
                            alt={data.name || 'Pet'}
                            className={css.petIconImg}
                        />
                    </div>
                    <div className={css.titlePopularity}>
                        <h2 className={css.someTitle}>{data.title}</h2>
                        <p>popularity: {data.popularity}</p>
                    </div>
                    <div className={css.fullDataContainer}>
                        <div className={css.petInfoContainer}>
                            <p className={css.req}>Name</p>
                            <p className={css.res}>{data.name}</p>
                        </div>
                        <div className={css.petInfoContainer}>
                            <p className={css.req}>Birthday</p>
                            <p className={css.res}>{data.birthday}</p>
                        </div>
                        <div className={css.petInfoContainer}>
                            <p className={css.req}>Sex</p>
                            <p className={css.res}>{data.sex}</p>
                        </div>
                        <div className={css.petInfoContainer}>
                            <p className={css.req}>Species</p>
                            <p className={css.res}>{data.species}</p>
                        </div>
                    </div>
                    <div className={css.commentContainer}>
                        <p className={css.comment}>{data.comment}</p>
                    </div>
                    <div className={css.priceContainer}>
                        {data.category === 'sell' ? (
                            <div className={css.priceContainer}>
                                ${data.price}
                            </div>
                        ) : (
                            <div className={css.priceContainer}>
                                {data.category}
                            </div>
                        )}
                    </div>
                    <div className={css.buttonsContainer}>
                        <button
                            className={css.addBtn}
                            type="button"
                            onClick={addFavourite}
                        >
                            Add to
                            <span>
                                <CiHeart className={css.heartButton} />
                            </span>
                        </button>
                        <button className={css.contactBtn} type="button">
                            Contact
                        </button>
                    </div>
                    <button className={css.closeBtnContainer} onClick={onClose}>
                        <IoClose className={css.closeIconBtn} />
                    </button>
                </div>
            )}
        </Modal>
    );
}
