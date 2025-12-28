import { useSelector } from 'react-redux';
import css from './ViewedList.module.css';
import ViewedItem from '../ViewedItem/ViewedItem.jsx';

export const ViewedList = () => {
    const viewed = useSelector((state) => state.userInfo.noticesViewed);
    console.log('viewed из store:', viewed);
    return (
        <div className={css.viewedListContainer}>
            {viewed.length > 0 ? (
                <ul className={css.viewedList}>
                    {viewed.map((item) => {
                        return (
                            <li key={item._id} className={css.viewedListItem}>
                                <ViewedItem data={item} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Вибачте, у Вас відсутні переглянуті оголошення</p>
            )}
        </div>
    );
};
