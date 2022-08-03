import {useState} from 'react'

function Search({searchTerm,setSearchTerm}) {
    console.log('searchTerm', searchTerm)
    return (
        <div className='searchbar'>
            <label htmlFor='search'>Search Products by Keyword:</label>
            <input
                type='text'
                id='search'
                placeholder='type in here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default Search