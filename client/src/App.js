import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddMovie from "./Movies/AddMovie";
import UpdateForm from "./Movies/UpdateForm";

function App() {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <h1 className="top">My Movie List</h1>
      <SavedList list={savedList} />
      <Link className="addLink" to="/movie/add">Add Movie to List</Link>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id" component={UpdateForm} />
      <Route path="/movie/add" component={AddMovie} />
    </>
  );
}

export default App;
