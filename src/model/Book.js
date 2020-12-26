import axios from 'axios';
import BookResult from './BookResult';

class Book {
    constructor() {
        this._results = [];
    };

    get results() {
        return this._results.map(result => new BookResult(result));
    };
    
    async search(query) {
        const result = await axios.get(`${process.env.REACT_APP_BASEURL}${query}&${process.env.REACT_APP_APIKEY}`);
        this._results = result.data.items;
        console.log(this._results);
    };
};

export default Book;