import React from 'react';
import './index.scss'

const SearchForm = ({setSearchValue, searchType, setSearchType}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(e.target.querySelector('#searchInput').value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    return (
        
        <form onSubmit={handleSubmit}>

            <label htmlFor="searchType">Rechercher par : </label>
            <select id="searchType" value={searchType} onChange={handleSearchTypeChange}>
                <option value="nom">Commune</option>
                <option value="codePostal">Code Postal</option>
            </select>

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