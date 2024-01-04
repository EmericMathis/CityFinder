import React from 'react';

const DisplayList = () => {
    return (
        <div className='displaylist-container'>
            <ul>
                <li className='city-container'>
                    <div className="ville">ville</div>
                    <div className="code-postal">code postal</div>
                    <div className="population">population</div>
                </li>
            </ul>
        </div>
    );
};

export default DisplayList;