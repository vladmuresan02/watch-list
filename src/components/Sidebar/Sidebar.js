import React from 'react';
import Search from './Search';
import Watchlist from "./Watchlist";

const Sidebar = props => {

    return (
        <>
            <div className="sidebar bg-gray-200 border-b-2 my-6">
                <Search search={props.search}/>
            </div>
            {props.watchlist.length > 0 ?
                <div className="watchlist my-3 font-extrabold text-2xl text-gray-900">
                    <h2>Watchlist:</h2>
                    <Watchlist watchlist={props.watchlist} openMovie={props.openMovie}
                               removeFromWatchlist={props.removeFromWatchlist}/>
                </div>
                : ''}

        </>
    );
};

export default Sidebar