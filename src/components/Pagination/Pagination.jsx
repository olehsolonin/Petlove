import { useMemo } from 'react';
import css from './Pagination.module.css';

function getWindowItems(page, totalPages) {
    if (totalPages <= 1) return [];
    if (totalPages <= 3)
        return Array.from({ length: totalPages }, (_, i) => i + 1);

    // Окно из 3 страниц вокруг текущей
    let start = page - 1;
    let end = page + 1;

    // Прижимаем к началу
    if (start < 1) {
        start = 1;
        end = 3;
    }

    // Прижимаем к концу
    if (end > totalPages) {
        end = totalPages;
        start = totalPages - 2;
    }

    const pages = [];
    for (let p = start; p <= end; p += 1) pages.push(p);

    const items = [];

    if (start > 1) items.push('...');
    items.push(...pages);
    if (end < totalPages) items.push('...');

    return items;
}

export default function Pagination({
    page,
    totalPages,
    onChange,
    className = '',
}) {
    const items = useMemo(
        () => getWindowItems(page, totalPages),
        [page, totalPages]
    );

    if (!totalPages || totalPages <= 1) return null;

    const isFirst = page <= 1;
    const isLast = page >= totalPages;

    const go = (p) => {
        const next = Math.min(Math.max(p, 1), totalPages);
        if (next !== page) onChange(next);
    };

    return (
        <nav className={`${css.root} ${className}`} aria-label="Pagination">
            <button
                type="button"
                className={css.btn}
                onClick={() => go(1)}
                disabled={isFirst}
                aria-label="First page"
            >
                {'<<'}
            </button>

            <button
                type="button"
                className={css.btn}
                onClick={() => go(page - 1)}
                disabled={isFirst}
                aria-label="Previous page"
            >
                {'<'}
            </button>

            {items.map((it, idx) => {
                if (it === '...') {
                    return (
                        <span
                            key={`dots-${idx}`}
                            className={`${css.btn} ${css.dots}`}
                            aria-hidden="true"
                        >
                            ...
                        </span>
                    );
                }

                const active = it === page;

                return (
                    <button
                        key={`${it}-${idx}`}
                        type="button"
                        className={`${css.btn} ${active ? css.active : ''}`}
                        onClick={() => go(it)}
                        aria-current={active ? 'page' : undefined}
                    >
                        {it}
                    </button>
                );
            })}

            <button
                type="button"
                className={css.btn}
                onClick={() => go(page + 1)}
                disabled={isLast}
                aria-label="Next page"
            >
                {'>'}
            </button>

            <button
                type="button"
                className={css.btn}
                onClick={() => go(totalPages)}
                disabled={isLast}
                aria-label="Last page"
            >
                {'>>'}
            </button>
        </nav>
    );
}
