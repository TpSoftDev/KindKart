import React from 'react';
import './search.css';

function Search() {
  return (
    <main>
      <h2>Find your local food pantry with your zipcode.</h2>
      <div className="search-container">
        <input type="text" placeholder="type your zipcode" />
        <button>
          <img src="/search-icon.png" alt="Search" />
        </button>
      </div>
    </main>
  );
}

export default Search;
