import { useEffect, useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect( () => {
    localStorage.setItem("watchlist" , JSON.stringify(state.watchlist) )
    localStorage.setItem("watched" , JSON.stringify(state.watched) )
  }, [state] );

  const addMovieToWatchlist = ( movie ) => {
    dispatch( { type: "ADD_MOVIE_TO_WATCHLIST" , payload: movie } );
  }

  const removeMovieFromWatchlist = ( id ) => {
    dispatch( { type: "REMOVE_MOVIE_TO_WATCHLIST" , payload: id } );
  } 

  const addMovieToWatched = ( movie ) => {
    dispatch( { type: "ADD_MOVIE_TO_WATCHED" , payload: movie } );
  }

  const moveToWatchlist = ( movie ) => {
    dispatch( { type: "MOVE_TO_WATCHED" , payload: movie } );
  }

  const removeMovieFromWatched = ( id ) => {
    dispatch( { type: "REMOVE_MOVIE_TO_WATCHED" , payload: id } );
  }
  
  return (
    <GlobalContext.Provider value={{ 
      watched: state.watched,
      watchlist: state.watchlist,
      removeMovieFromWatchlist,
      removeMovieFromWatched,
      addMovieToWatched,
      moveToWatchlist,
      addMovieToWatchlist }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
