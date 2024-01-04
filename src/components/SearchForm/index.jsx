import React from 'react';

const SearchForm = () => {
    return (
        <form>
            <label 
            htmlFor="searchInput">Nom de la commune
            </label>
            <input 
            id='searchInput'
            type="text" 
            placeholder='Troyes, Bar-le-Duc, Paris, ..'
            />
            <button type='submit'>Lancer la recherche</button>
        </form>
    );
};

export default SearchForm;