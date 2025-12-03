import css from './MyNotices.module.css';
import { useState } from 'react';
import { FavoritesList } from '../FavoritesList/FavoritesList.jsx';
import { ViewedList } from '../ViewedList/ViewedList';

export default function MyNotices() {
    const [activeTab, setActiveTab] = useState('favorites');
    return (
        <div className="tabs">
            <button
                className={activeTab === 'favorites' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('favorites')}
            >
                My favorite pets
            </button>

            <button
                className={activeTab === 'viewed' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('viewed')}
            >
                Viewed
            </button>

            {activeTab === 'favorites' && <FavoritesList />}
            {activeTab === 'viewed' && <ViewedList />}
        </div>
    );
}
