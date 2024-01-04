import React from 'react';
import './index.scss';

const DisplayList = ({ citiesData, isLoading }) => {
    return (
        <>
            {citiesData.length > 0 && isLoading === false ?
                <div className='displaylist-container' >
                    <ul>
                        {citiesData.map(city => (
                            <li className='city-container' key={city.code}>
                                <div className="ville">
                                    ville : <div className="numero">{city.nom}</div>
                                </div>
                                <div className="code-postal">
                                    code postal : <div className="numero">{city.codesPostaux[0]}</div>
                                </div>
                                <div className="population">
                                    population : <div className="numero">{city.population}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                : isLoading === true
                    ? <p style={{ padding: '20px 0 0 20px', fontSize: '20px' }}>chargement en cours...</p> : null
            }
        </>
    );
};

export default DisplayList;
