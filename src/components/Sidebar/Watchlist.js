import React from 'react';

const Watchlist = props => {
    return (
        <div>
            {props.watchlist.map((movie) => {
                    return (
                        <p className="my-1 font-medium text-xl cursor-pointer lg:hover:bg-gray-400 pt-1 my-1  pl-3 relative" key={movie.id}
                           onClick={() => props.openMovie(movie.id)}>
                    <span onClick={(event) =>{event.stopPropagation(); props.removeFromWatchlist(movie.id)} }
                          className="text-red-400 mr-3 rounded-full absolute right-0 ">
                        x
                    </span>
                             {movie.title}

                        </p>
                    );
                }
            )}
        </div>
    );
};

export default Watchlist;