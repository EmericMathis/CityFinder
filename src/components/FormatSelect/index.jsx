import React from 'react';
import './index.scss';

const FormatSelect = ({setIsFormatted, isFormatted}) => {

    const handleClick = () => {
        setIsFormatted(!isFormatted)
    }

    return (
        <div className='formatselect-container'>
            <p>Résultats</p>
            <button onClick={handleClick}>Changer le format</button>
        </div>
    );
};

export default FormatSelect;