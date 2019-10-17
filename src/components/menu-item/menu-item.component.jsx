import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, key, size, action}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image"
        style={{
            backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">{action.toUpperCase()}</span>
        </div>
    </div>
);

export default MenuItem;