import css from './PetsList.module.css';
import PetsItem from '../PetsItem/PetsItem.jsx';
import { useSelector } from 'react-redux';

export default function PetsList() {
    const userPetsData = useSelector((state) => state.userInfo.pets);
    // console.log('news из store:', userPetsData);
    return (
        <div className={css.petsListContainer}>
            {userPetsData.length > 0 ? (
                <ul className={css.petsUl}>
                    {userPetsData.map((pet) => {
                        return (
                            <li key={pet._id}>
                                <PetsItem pets={pet} />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Новини не знайдено</p>
            )}
        </div>
    );
}
