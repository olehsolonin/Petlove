import css from './PetsBlock.module.css';
import AddPet from '../AddPet/AddPet.jsx';
import PetsList from '../PetsList/PetsList.jsx';

export default function PetsBlock() {
    return (
        <div className={css.petsBlockContainer}>
            <AddPet />
            <PetsList />
        </div>
    );
}
