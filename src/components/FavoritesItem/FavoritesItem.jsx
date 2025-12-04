import css from './FavoritesItem.module.css';

export default function FavoritesItem({ data }) {
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
                    </div>
                    <div className={css.petCommentContainer}>
                        <p className={css.comment}>{comment}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
