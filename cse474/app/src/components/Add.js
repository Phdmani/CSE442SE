import React from 'react';

const Add= props =>
  <form action= "/user-add-movie">
    <div className="form-group">
      <input
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Movie"
        id="search"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Add
      </button>
    </div>
  </form>;

export default Add;