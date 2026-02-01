import css from './FavoritesItem.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import {
    fetchRemoveFromFavourites,
    fetchFullUserInfo,
} from '../../fetchReq.js';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDataNoticesFavorites } from '../../redux/userInfoSlice.js';
import ModalNotice from '../ModalNotice/ModalNotice.jsx';
import { fetchFullPetInfoById } from '../../fetchReq.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FavoritesItem({ data }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const {
        birthday,
        title,
        category,
        comment,
        imgURL,
        name,
        popularity,
        sex,
        species,
        _id,
        price,
    } = data;

    const handleSubmit = async () => {
        try {
            await fetchRemoveFromFavourites(_id, token);
            const fullUser = await fetchFullUserInfo(token);
            dispatch(userDataNoticesFavorites(fullUser.noticesFavorites));
            toast.success('Pet remove successfully', {
                position: 'top-center',
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleLearnMore = async () => {
        try {
            const res = await fetchFullPetInfoById(_id, token);
            setDetails(res);
            setIsNoticeModalOpen(true);
        } catch (error) {
            console.error('Error loading details:', error);
        }
    };

    return (
        <div className={css.favoritesPetItem}>
            <div className={css.petImgContainer}>
                <img src={imgURL} alt="petPhoto" className={css.petImg} />
            </div>
            <div className={css.fullPetInfoContainer}>
                <div className={css.titleInfoBlock}>
                    <div className={css.justInfo}>
                        <div className={css.titlePopularityContainer}>
                            <h3 className={css.petTitle}>{title}</h3>
                            <div className={css.popularitySymContainer}>
                                <p className={css.popularity}>❤️</p>
                                <p>{popularity}</p>
                            </div>
                        </div>
                        <div className={css.petDetails}>
                            <div className={css.petDetailItem}>
                                {' '}
                                <p className={css.petDetailsInfo}>Name</p>
                                <span className={css.petData}>{name}</span>
                            </div>
                            <div className={css.petDetailItem}>
                                {' '}
                                <p className={css.petDetailsInfo}>Birthday</p>
                                <span className={css.petData}>{birthday}</span>
                            </div>
                            <div className={css.petDetailItem}>
                                {' '}
                                <p className={css.petDetailsInfo}>Sex</p>
                                <span className={css.petData}>{sex}</span>
                            </div>
                            <div className={css.petDetailItem}>
                                {' '}
                                <p className={css.petDetailsInfo}>Species</p>
                                <span className={css.petData}>{species}</span>
                            </div>
                            <div className={css.petDetailItem}>
                                {' '}
                                <p className={css.petDetailsInfo}>Category</p>
                                <span className={css.petData}>{category}</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.petCommentContainer}>
                        <p className={css.comment}>{comment}</p>
                    </div>
                </div>
                <div className={css.priceLearnContainer}>
                    <div>
                        {price ? (
                            <p className={css.petPrice}>${price}</p>
                        ) : (
                            <p className={css.petPrice}>free</p>
                        )}
                    </div>
                    <div className={css.learnDeleteBtns}>
                        <button
                            className={css.learnMoreBtn}
                            type="button"
                            onClick={handleLearnMore}
                        >
                            Learn more
                        </button>
                        <button
                            className={css.deleteBtn}
                            type="button"
                            onClick={() => handleSubmit(_id)}
                        >
                            <RiDeleteBin5Line className={css.deleteIcon} />
                        </button>
                    </div>
                </div>
            </div>
            {isNoticeModalOpen && details && (
                <ModalNotice
                    isOpen={isNoticeModalOpen}
                    onClose={() => setIsNoticeModalOpen(false)}
                    data={details}
                />
            )}
        </div>
    );
}
