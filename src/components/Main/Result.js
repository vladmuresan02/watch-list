import React from 'react';

const Result = props => {
    return (
        <div className="w-1/4  p-2 flex" onClick={() => props.click(props.result['imdbID'])}>
            <div className="m-3 bg-white shadow p-3" >
                <div className="img w-full mr-4 mb-4">
                    <img src={props.result['Poster']} alt=""/>
                </div>
                <div className="text-center">
                    <h6 className="font-bold font-xl mb-2">
                        {props.result['Title']}
                    </h6>
                    <p className="text-gray-700 font-light mb-2"> {props.result['Year']}</p>
                    <a href={`https://www.imdb.com/title/${props.result['imdbID']}`} className="text-blue-900 text-underline" target="_blank" rel="noopener noreferrer" onClick={(event => event.stopPropagation())}>
                        IMDB
                    </a>

                </div>
            </div>
        </div>
    );
};

export  default Result;
