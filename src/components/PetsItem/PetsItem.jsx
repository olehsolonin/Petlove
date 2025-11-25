import css from './PetsItem.module.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { fetchDeletePet } from '../../fetchReq.js';
import { useSelector, useDispatch } from 'react-redux';
import { userDataPets } from '../../redux/userInfoSlice.js';

export default function PetsItem({ pets }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const handleSubmit = async (petId) => {
        console.log(token);
        console.log('PetID:', petId);
        const res = await fetchDeletePet(petId, token);
        dispatch(userDataPets(res));
    };

    const {
        imgURL,
        title,
        createdAt,
        birthday,
        name,
        sex,
        species,
        updatedAt,
        _id,
    } = pets; // Деструктуризируем внутри
    //   console.log(title);
    return (
        <div className={css.petsItemContainer}>
            <div className={css.usersPetAvatarContainer}>
                <img
                    src={imgURL}
                    alt={title}
                    width={66}
                    height={66}
                    className={css.usersPetAvatar}
                />
            </div>
            <div className={css.petInfoContainer}>
                <h2 className={css.petTitle}>{title}</h2>
                <div className={css.infoDetails}>
                    <div className={css.petDetails}>
                        <p className={css.petDetailsTitles}>Name</p>
                        <div className={css.petDetailsRes}>{name}</div>
                    </div>
                    <div className={css.petDetails}>
                        <p className={css.petDetailsTitles}>Birthday</p>
                        <div className={css.petDetailsRes}>{birthday}</div>
                    </div>
                    <div className={css.petDetails}>
                        <p className={css.petDetailsTitles}>Sex</p>
                        <div className={css.petDetailsRes}>{sex}</div>
                    </div>
                    <div className={css.petDetails}>
                        <p className={css.petDetailsTitles}>Species</p>
                        <div className={css.petDetailsRes}>{species}</div>
                    </div>
                </div>
            </div>
            <div className={css.deleteButtonContainer}>
                <button type="button" onClick={() => handleSubmit(_id)}>
                    <RiDeleteBin5Line className={css.deleteIcon} />
                </button>
            </div>
        </div>
    );
}
