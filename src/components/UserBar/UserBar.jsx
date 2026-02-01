import css from './UserBar.module.css';
import { useNavigate } from 'react-router-dom';

export default function UserBar() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/profile', { replace: true });
    };
    return (
        <div>
            <button className={css.profileLink} onClick={handleSubmit}>
                Profile
            </button>
        </div>
    );
}
