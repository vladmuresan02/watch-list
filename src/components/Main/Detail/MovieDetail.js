import React from 'react';

const MovieDetail = props => {
    let active = '';
    if (props.movie) {
            active = (
                <React.Fragment>
                    <div className="bg-white m-2 shadow w-full h-full relative">
                        <button className="absolute top-0 right-0 m-4 font-extrabold text-2xl" onClick={props.reset}>x
                        </button>
                        <div className="flex w-full flex-row flex-wrap p-6">
                            <div className="w-1/4">
                                <img src={props.movie['Poster']} alt=""/>
                            </div>
                            <div className="w-3/4">
                                <div className="px-4">
                                    <div className="">
                                        <h3 className="font-bold text-3xl mb-1">
                                            {props.movie['Title']}
                                        </h3>
                                        <span className="text-gray-500  font-light mb-4 block">
                                      Produced by: {props.movie['Production']} |
                                      Released: {props.movie['Released']} |
                                            {props.movie['Country']} | {props.movie['Runtime']} |
                                      Rating: {props.movie['imdbRating']} ( {props.movie['imdbVotes']} votes ) |
                                       Languages: {props.movie['Language']} | {props.movie['Rated']}
                                    </span>

                                        <p className="mb-2">Genre: {props.movie['Genre']}  </p>
                                        <p className="mb-2">Director: {props.movie['Director']}  </p>
                                        <p className="mb-2">Cast: {props.movie['Actors']}  </p>
                                        <p className="mb-2">Writers: {props.movie['Writer']}  </p>
                                        <p className="mb-2">Awards: {props.movie['Awards']}  </p>
                                        <p className="mb-2">Box Office: {props.movie['BoxOffice']}  </p>

                                        {
                                            props.isInWatchlist ?
                                                <button className="bg-red-200 px-4 py-2"
                                                        onClick={() => props.removeFromWatchlist(props.movie['imdbID'])}>
                                                    Remove from watchlist
                                                </button> :
                                                <button className="bg-blue-200 px-4 py-2"
                                                        onClick={() => props.addToWatchlist(props.movie['imdbID'], props.movie['Title'])}>
                                                    Add to watchlist
                                                </button>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="w-4/4 mt-6">
                                {props.movie['Plot']}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
    }

    return active;
};

export default MovieDetail;