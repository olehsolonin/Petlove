import css from './PetsItem.module.css';

export default function PetsItem({ pets }) {
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
        <div>
            <h1>{title}</h1>
        </div>
    );
}
