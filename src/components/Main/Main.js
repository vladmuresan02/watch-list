import React from 'react';
import Result from './Result'

const Main = props => {
    let searchResults = [];

    if (props.results) {
        searchResults = props.results.map( (result) => { return <Result key={result['imdbID']} result={result} click={props.click}/>} );
    }

    return (
        <div className="Main">
            <h1 className="text-gray-900 my-4  font-extrabold text-3xl text-center">
                {
                    props.results.length > 0  ? 'Search results:' : 'Please search a movie using the search box on the left'
                }
            </h1>
            <div className="search-results flex flex-wrap">
                {searchResults}
            </div>
        </div>
    );
};

export  default Main;