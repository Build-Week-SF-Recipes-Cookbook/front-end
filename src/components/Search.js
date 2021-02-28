import React from 'react'

const Search = () => {
    return (
        <form>
            <label>
                <span>Search</span>
                <input type="text" name="search" placeholder="What do you want to cook?" />
            </label>
            <button>Search</button>
        </form>
    )
}

export default Search
