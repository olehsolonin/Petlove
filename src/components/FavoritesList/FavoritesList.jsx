import { useSelector } from 'react-redux';
import css from './FavoritesList.module.css';
import FavoritesItem from '../FavoritesItem/FavoritesItem.jsx';

export const FavoritesList = () => {
    const favorites = useSelector((state) => state.userInfo.noticesFavorites);
    console.log('favorites из store:', favorites);
    return (
        <div className={css.favoritesListContainer}>
            {favorites.length > 0 ? (
                <ul className={css.favoritesList}>
                    {favorites.map((item) => {
                        console.log(
                            'favorites:',
                            favorites.map((f) => f._id)
                        );

                        return (
                            <li
                                key={item._id}
                                className={css.favoritesListItem}
                            >
                                <FavoritesItem data={item} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>У вас немає улюблених оголошень</p>
            )}
        </div>
    );
};
