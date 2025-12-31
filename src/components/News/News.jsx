import React from 'react';
import css from './News.module.css';
import Header from '../Header/Header.jsx';
import Title from '../Title/Title.jsx';
import SearchField from '../SearchField/SearchField.jsx';
import NewsList from '../NewsList/NewsList.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { fetchNews } from '../../fetchReq.js';

import { useDispatch, useSelector } from 'react-redux';
import { setKeyword, setPage, setNewsResponse } from '../../redux/newsSlice.js';

export default function News() {
    const dispatch = useDispatch();

    const keyword = useSelector((state) => state.news.keyword);
    const page = useSelector((state) => state.news.page);
    const perPage = useSelector((state) => state.news.perPage);
    const totalPages = useSelector((state) => state.news.totalPages);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);
            try {
                const res = await fetchNews({ keyword, page, limit: perPage });
                if (!cancelled) dispatch(setNewsResponse(res));
            } catch (e) {
                console.error('Помилка завантаження news:', e);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [dispatch, keyword, page, perPage]);

    const handleSearchSubmit = (kw) => {
        dispatch(setKeyword(kw));
        dispatch(setPage(1));
    };

    return (
        <div className={css.newsContainer}>
            <Header />

            <div className={css.titleContainer}>
                <Title title="News" />
            </div>

            <SearchField onSubmitOutside={handleSearchSubmit} />

            {loading && <div>Loading...</div>}

            <NewsList />

            <Pagination
                page={page}
                totalPages={totalPages}
                onChange={(p) => dispatch(setPage(p))}
            />
        </div>
    );
}
