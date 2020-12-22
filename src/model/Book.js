import React from 'react';
import BookResult from './BookResult';

class Book  extends React.Component {
    constructor() {
        super();
        this._results = [];
    };

    get results() {
        return this._results.map(result => new BookResult(result));
    };
    
    async search(query) {
        fetch(`${process.env.REACT_APP_BASEURL}${query}&${process.env.REACT_APP_APIKEY}`)
            .then((res) => res.json())
            .then((data) => console.log(data))      
    };
};

export default Book;