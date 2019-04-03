import React from 'react';

const Search = props =>
  <form>
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Movie"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
        <button className="btn btn-primary" onClick={props.handleSubmit2} >
        Add
      </button>
    </div>
  </form>;

export default Search;
