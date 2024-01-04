import React from 'react';
import './index.scss'

const SearchForm = ({setSearch}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.querySelector('#searchInput').value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className='searchform'>
                    <legend>NOM DE LA COMMUNE</legend>
                    <input 
                    id='searchInput'
                    type="text" 
                    placeholder='Troyes, Bar-le-Duc, Paris, ..'
                    />
                    <button type='submit'>Lancer la recherche</button>
            </fieldset>
        </form>
    );
};

export default SearchForm;