import css from './MyNotices.module.css';
import { useState } from 'react';
import { FavoritesList } from '../FavoritesList/FavoritesList.jsx';
import { ViewedList } from '../ViewedList/ViewedList';

export default function MyNotices() {
    const [activeTab, setActiveTab] = useState('favorites');
    return (
        <div className="tabsContainer">
            <div className={css.favoriteBtnsContainer}>
                <button
                    className={
                        activeTab === 'favorites'
                            ? `${css.tab} ${css.active}`
                            : css.tab
                    }
                    onClick={() => setActiveTab('favorites')}
                >
                    My favorite pets
                </button>
                <button
                    className={
                        activeTab === 'viewed'
                            ? `${css.tab} ${css.active}`
                            : css.tab
                    }
                    onClick={() => setActiveTab('viewed')}
                >
                    Viewed
                </button>
            </div>

            {activeTab === 'favorites' && <FavoritesList />}
            {activeTab === 'viewed' && <ViewedList />}
        </div>
    );
}
