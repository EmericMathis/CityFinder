import React from 'react';
import './index.scss'

const SearchForm = () => {
    return (
        <fieldset className='searchform'>
            
                <legend>NOM DE LA COMMUNE</legend>
                <input 
                id='searchInput'
                type="text" 
                placeholder='Troyes, Bar-le-Duc, Paris, ..'
                />
                <button type='submit'>Lancer la recherche</button>
            
        </fieldset>
    );
};

export default SearchForm;