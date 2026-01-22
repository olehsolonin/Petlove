import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './BurgerMenu.module.css';

export default function BurgerMenu({ isOpen, onClose, children }) {
    const [portalRoot, setPortalRoot] = useState(null);

    useEffect(() => {
        setPortalRoot(document.getElementById('burger-root'));
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !portalRoot) return null;

    return createPortal(
        <div className={css.backdrop} onClick={onClose} role="presentation">
            <div
                className={css.panel}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button
                    className={css.closeBtn}
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <div className={css.content}>{children}</div>
            </div>
        </div>,
        portalRoot,
    );
}
