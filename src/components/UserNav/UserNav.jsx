import LogOutBtn from '../LogOutBtn/LogOutBtn';
import UserBar from '../UserBar/UserBar';
import React from 'react';

export default function UserNav({ onNavigate }) {
    return (
        <div>
            <UserBar onNavigate={onNavigate} />
            <LogOutBtn />
        </div>
    );
}
