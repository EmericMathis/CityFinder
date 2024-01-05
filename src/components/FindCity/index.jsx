import React, { useState, useEffect } from 'react'
import Header from './Header'
import SearchForm from './SearchForm'
import FormatSelect from './FormatSelect'
import DisplayList from './DisplayList'

const FindCity = () => {

const [data, setData] = useState([]);

const [searchValue, setSearchValue] = useState('');
const [searchType, setSearchType] = useState('nom'); // nom = commune, codePostal = code postal

const [isLoading, setIsLoading] = useState(false);
const [isFormatted, setIsFormatted] = useState(false);

useEffect (() => {
    setIsLoading(true);
    fetch(`https://geo.api.gouv.fr/communes?${searchType}=${searchValue}`)
    .then(response => response.json())
    .then((data) => {setData(data)})
    .catch((error) => console.log("erreur fetch", error))
},[searchValue])

useEffect (() => {
    setIsLoading(false);
},[data])

    return (
    <>
    <Header />
    <main>
        <SearchForm 
        setSearchValue={setSearchValue}
        setSearchType={setSearchType}
        searchType={searchType}
        />
        <FormatSelect 
        setIsFormatted={setIsFormatted}
        isFormatted={isFormatted}
        />
        <DisplayList 
        citiesData={data} //liste des communes pour la recherche
        isLoading={isLoading}
        isFormatted={isFormatted}
        />
    </main>
    </>
    )
}

export default FindCity