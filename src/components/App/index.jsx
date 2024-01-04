import React from 'react'
import '../../assets/css/reset.css'
import './index.scss'
import Header from '../Header'
import SearchForm from '../SearchForm'
import FormatSelect from '../FormatSelect'
import DisplayList from '../DisplayList'

const App = () => {


    return (
    <>
    <Header />
    <main>
        <SearchForm />
        <FormatSelect />
        <DisplayList />
    </main>
    </>
    )
}

export default App