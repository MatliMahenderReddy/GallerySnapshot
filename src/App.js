import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <div className="container mt-5">
      <center>
        <h2>Gallery Snapshot</h2>
        <br />
        <form onSubmit={submitHandler} className="form-inline justify-content-center">
          <div className="form-group mb-2">
            <input
              size="30"
              type="text"
              onChange={changeHandler}
              value={search}
              className="form-control"
              placeholder="Search images..."
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2 ml-2">
            Search
          </button>
        </form>
        <br />
        {data.length >= 1 ? <Gallery data={data} /> : <h4>No Image Loaded</h4>}
      </center>
    </div>
  );
};

export default App;
