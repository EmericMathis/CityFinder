import React, { useState, useEffect } from 'react'
import '../../assets/css/reset.css'
import './index.scss'
import Header from '../Header'
import SearchForm from '../SearchForm'
import FormatSelect from '../FormatSelect'
import DisplayList from '../DisplayList'

const App = () => {
const [data, setData] = useState([]);
const [search, setSearch] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [isFormatted, setIsFormatted] = useState(false);

useEffect (() => {
    setIsLoading(true);
    fetch(`https://geo.api.gouv.fr/communes?nom=${search}`)
    .then(response => response.json())
    .then((data) => {setData(data)
    })
    .catch((error) => console.log("erreur fetch", error))
},[search])

useEffect (() => {
    setIsLoading(false);
},[data])

useEffect (() => {
    console.log(isFormatted);;
},[isFormatted])

    return (
    <>
    <Header />
    <main>
        <SearchForm 
        setSearch={setSearch}
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

export default App