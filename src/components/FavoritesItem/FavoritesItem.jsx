import css from './FavoritesItem.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { fetchRemoveFromFavourites } from '../../fetchReq.js';
import { useSelector, useDispatch } from 'react-redux';
import { userDataNoticesFavorites } from '../../redux/userInfoSlice.js';

export default function FavoritesItem({ data }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const {
        birthday,
        title,
        category,
        comment,
        createdAt,
        imgURL,
        location,
        name,
        popularity,
        sex,
        species,
        updatedAt,
        user,
        _id,
        price,
    } = data;

    const handleSubmit = async (petId) => {
        console.log('PetID:', petId);
        const res = await fetchRemoveFromFavourites(petId, token);
        dispatch(userDataNoticesFavorites(res));
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
                            <p className={css.popularity}>❤️ {popularity}</p>
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
                        <button className={css.learnMoreBtn} type="button">
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
        </div>
    );
}
