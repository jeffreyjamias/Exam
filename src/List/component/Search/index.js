import React from 'react';

const Search = ({ searchValue, setSearchValue, handleSearch }) => {
	const handleSearchOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <label for="search">Search Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={searchValue}
        onChange={handleSearchOnChange}
      />
      <button onClick={handleSearch}>Search</button>
			<br />
			<br />
    </>
  );
};

export default Search;
