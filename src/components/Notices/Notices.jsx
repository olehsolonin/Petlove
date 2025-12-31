import React from 'react';
import Header from '../Header/Header.jsx';
import Title from '../Title/Title.jsx';
import css from './Notices.module.css';
import NoticesFilters from '../NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../NoticesList/NoticesList.jsx';

import Pagination from '../../components/Pagination/Pagination.jsx';
import { fetchAllNotices } from '../../fetchReq';
import { useSelector, useDispatch } from 'react-redux';
import { setNoticesResponse, setPage } from '../../redux/noticesSlice.js';

export default function Notices() {
    const dispatch = useDispatch();

    const fetchParams = useSelector((state) => state.notices.fetchParams);
    const page = useSelector((state) => state.notices.results.page);
    const perPage = useSelector((state) => state.notices.results.perPage);
    const totalPages = useSelector((state) => state.notices.results.totalPages);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);
            try {
                const res = await fetchAllNotices(fetchParams, page, perPage);
                if (!cancelled) dispatch(setNoticesResponse(res));
            } catch (e) {
                console.error('Помилка завантаження notices:', e);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [dispatch, fetchParams, page, perPage]);

    return (
        <div className={css.noticesContainer}>
            <Header />

            <div className={css.titleContainer}>
                <Title title="Find your favorite pet" />
            </div>

            <NoticesFilters />

            {loading && <div>Loading...</div>}

            <NoticesList />

            <Pagination
                page={page}
                totalPages={totalPages}
                onChange={(p) => dispatch(setPage(p))}
            />
        </div>
    );
}
