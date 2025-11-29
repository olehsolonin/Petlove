import Modal from 'react-modal';
import css from './ModalNotice.module.css';
import { CiHeart } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

export default function ModalNotice({ isOpen, onClose, data }) {
    console.log(data);
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
                        <button className={css.addBtn} type="button">
                            Add to
                            <span>
                                <CiHeart className={css.heartButton} />
                            </span>
                        </button>
                        <button className={css.contactBtn}>Contact</button>
                    </div>
                    <button className={css.closeBtnContainer} onClick={onClose}>
                        <IoClose className={css.closeIconBtn} />
                    </button>
                </div>
            )}
        </Modal>
    );
}
