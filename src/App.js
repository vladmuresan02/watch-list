import React from 'react';
import './main.css';
import axios from 'axios';

import MovieDetail from "./components/Main/Detail/MovieDetail";
import Sidebar from './components/Sidebar/Sidebar';
import Main from "./components/Main/Main";

class App extends React.Component {
    state = {
        searchTerm: '',
        searchResults: [],
        activeMovie: null,
        watchlist: []
    };


    handleSearch = (value) => {
        axios.get(`http://www.omdbapi.com/?apikey=6db0676e&s=${value}`).then((response) => {
            if (response.data['Search']) {
                this.setState({
                    searchResults: response.data['Search']
                })
            } else {
                console.log(response);
                this.setState({
                    searchResults: response.data
                })
            }
        });
    };

    getActiveMovie = (id) => {
        axios.get(`http://www.omdbapi.com/?apikey=6db0676e&i=${id}`).then((response) => {
            this.setState({
                activeMovie: response.data
            })
        })
    };

    handleReset = () => {
        this.setState({
            activeMovie: null
        })
    };

    addToWatchlist = (id, title) => {
        var idExists = this.isInWatchlist(id);
        if (idExists.length <= 0) {
            this.setState((previousState) => {
                return {watchlist: [...previousState.watchlist, {"id": id, "title": title}]}
            })
        }
    };

    removeFromWatchlist = (event, id) => {

        const movieToRemove = this.state.watchlist.findIndex((el) => el.id === id);
        let watchlist = [...this.state.watchlist];

        if (movieToRemove !== -1) {
            watchlist.splice(movieToRemove, 1);
            this.setState({
                watchlist: watchlist
            });
        }

    };

    isInWatchlist = (id) => {
        return this.state.watchlist.filter((obj) => obj.id === id);
    };

    render() {
        let main = '';
        if (this.state.activeMovie) {
            main = <MovieDetail movie={this.state.activeMovie ? this.state.activeMovie : undefined} key={"key1"}
                                reset={this.handleReset}
                                addToWatchlist={this.addToWatchlist}
                                removeFromWatchlist={this.removeFromWatchlist}
                                isInWatchlist={this.state.activeMovie ? this.isInWatchlist(this.state.activeMovie['imdbID']).length > 0 : undefined}/>
        } else {
            main = <Main results={this.state.searchResults ? this.state.searchResults : undefined}
                         click={this.getActiveMovie} key={"key2"}/>
        }

        return (
            <div className="flex flex-col sm:flex-row">
                <div className=" w-full sm:w-1/5 p-4 sm:min-h-screen bg-gray-200">
                    <Sidebar search={this.handleSearch} watchlist={this.state.watchlist} openMovie={this.getActiveMovie}
                             removeFromWatchlist={this.removeFromWatchlist}
                    />
                </div>
                <div className="w-full sm:w-4/5 p-8 bg-gray-300 min-h-full">
                    {main}
                </div>
            </div>
        );
    }
}

export default App;
