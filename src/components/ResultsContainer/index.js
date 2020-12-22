import React, { Component} from 'react';
import SearchForm from './SearchForm';
import Book from '../../model/Book';

class ResultsContainer extends Component {
    state = {
        search: '',
        results: []
    };

    componentDidMount() {
        this.search('flower');
    };

    async search(query) {
        try {
            const bookAPI = new Book();
            await bookAPI.search(query);
            this.setState({ results: bookAPI.results });
            console.log(this.state)
        } catch(error) {
            console.log(error);
        };
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.search)
    }; 

    render() {
        return (
            <div>
                <SearchForm 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>  
        );
    };
};

export default ResultsContainer;