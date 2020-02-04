import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ api, parentCallback }) => {

  const [query, setQuery] = useState('');

  const search = e => {
    if (e.key === 'Enter') {

      if (query.length <= 0) {
        parentCallback();
        return;
      }

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          parentCallback(result);
        });
    }
  }

  return (
    <div className="search-box">
      <input type="text"
        className="search-bar"
        placeholder="Search For Location..."
        tabIndex="1"
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      >
      </input>
    </div>
  )
}


export default SearchBox;