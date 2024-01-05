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
                    <legend>
                    {searchType === "codePostal" && "Code postal complet de la commune"}
                    {searchType === "nom" && "nom de la commune"}
                    </legend>
                    <input 
                    id='searchInput'
                    type="text" 
                    placeholder={searchType === "nom" ? 'Troyes, Bar-le-Duc, Paris, ...'
                    : searchType === "codePostal" ? "75000, 13200, ..." : null}
                    />
                    <button type='submit'>Lancer la recherche</button>
            </fieldset>
        </form>
    );
};

export default SearchForm;