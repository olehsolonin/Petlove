import css from './NoticesItem.module.css';
import { FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalAttention from '../ModalAttention/ModalAttention.jsx';
import ModalNotice from '../ModalNotice/ModalNotice.jsx';
import {
    fetchFullPetInfoById,
    fetchAddToFavourites,
    fetchRemoveFromFavourites,
    fetchFullUserInfo,
} from '../../fetchReq.js';
import { userDataAll } from '../../redux/userInfoSlice.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NoticesItem({ notice }) {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const favoritesPetsId = useSelector(
        (state) => state.userInfo.noticesFavorites
    );

    const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
    const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
    const [details, setDetails] = useState(null);

    const handleLearnMore = async () => {
        if (!isLoggedIn) {
            setIsAttentionModalOpen(true);
            return;
        }

        try {
            const res = await fetchFullPetInfoById(_id, token);
            setDetails(res);
            setIsNoticeModalOpen(true);
        } catch (err) {
            console.log('Error loading details:', err);
        }
    };

    const {
        imgURL,
        title,
        date,
        comment,
        url,
        popularity,
        birthday,
        name,
        sex,
        species,
        category,
        price,
        _id,
    } = notice; // Деструктуризируем внутри
    //   console.log(title);

    const currentFavPetsId = favoritesPetsId.map((pet) => {
        return pet._id;
    });
    console.log(currentFavPetsId);

    const isFavourite = currentFavPetsId.includes(_id);
    console.log(isFavourite);

    const refreshUser = async () => {
        const fresh = await fetchFullUserInfo(token);
        dispatch(userDataAll(fresh));
    };

    const addFavourite = async () => {
        try {
            if (!_id) return;
            // if (isFavourite) return;
            const res = await fetchAddToFavourites(_id, token);
            if (res.status === 200) {
                toast.success('Pet added successfully', {
                    position: 'top-center',
                });
                await refreshUser();
            }
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    const removeFavourite = async () => {
        try {
            if (!_id) return;
            // if (!isFavourite) return;
            const res = await fetchRemoveFromFavourites(_id, token);
            if (res.status === 200) {
                toast.success('Pet remove successfully', {
                    position: 'top-center',
                });
                await refreshUser();
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    //  const fastAddRemoveFavourite = async () => {};

    return (
        <div className={css.noticesItemContainer}>
            <div className={css.imageContainer}>
                {' '}
                <img src={imgURL} alt={title} className={css.imageSettings} />
            </div>
            <div className={css.descriptionContainer}>
                <div className={css.titleTextWrap}>
                    <div className={css.detailsContainer}>
                        <div className={css.titlePopularityWrap}>
                            <h2 className={css.title}>{title}</h2>
                            <div className={css.popularityBlock}>
                                <div className={css.starWrap}>
                                    {' '}
                                    <FaStar className={css.star} />
                                </div>
                                {popularity}
                            </div>
                        </div>
                        {/* <p className={css.text}>{text}</p> */}
                        <div className={css.detailsTextWrap}>
                            <div className={css.detailsSmallBlocks}>
                                <p className={css.detailsTitle}>Name</p>
                                <p className={css.fetchDetails}>{name}</p>
                            </div>
                            <div className={css.detailsSmallBlocks}>
                                <p className={css.detailsTitle}>Birthday</p>
                                <p className={css.fetchDetails}>{birthday}</p>
                            </div>
                            <div className={css.detailsSmallBlocks}>
                                <p className={css.detailsTitle}>Sex</p>
                                <p className={css.fetchDetails}>{sex}</p>
                            </div>
                            <div className={css.detailsSmallBlocks}>
                                <p className={css.detailsTitle}>Species</p>
                                <p className={css.fetchDetails}>{species}</p>
                            </div>
                            <div className={css.detailsSmallBlocks}>
                                <p className={css.detailsTitle}>Category</p>
                                <p className={css.fetchDetails}>{category}</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.commentContainer}>
                        <h2 className={css.commentText}>{comment}</h2>
                    </div>
                </div>
                <div className={css.priceLinkWrap}>
                    <div>
                        {category === 'free' ? (
                            <p className={css.priceCategory}>{category}</p>
                        ) : (
                            <p className={css.priceCategory}>${price}</p>
                        )}
                    </div>
                    <div className={css.buttonLikeBlock}>
                        <button
                            type="button"
                            className={css.learnButton}
                            onClick={handleLearnMore}
                        >
                            Learn more
                        </button>
                        <button
                            type="button"
                            className={
                                isFavourite
                                    ? css.likeButtonFavored
                                    : css.likeButton
                            }
                            onClick={
                                isFavourite ? removeFavourite : addFavourite
                            }
                        >
                            <CiHeart className={css.heartButton} />
                        </button>
                    </div>
                </div>
            </div>
            <ModalAttention
                isOpen={isAttentionModalOpen}
                onClose={() => setIsAttentionModalOpen(false)}
            />
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
