import React, { Component} from 'react';
import Book from '../../model/Book';
import SearchForm from '../SearchForm';
import ResultCard from './ResultCard';

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
            this.setState({ search: query, results: bookAPI.results });
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
        const query = this.state.search;
        this.search(query)
        console.log(this.state)
    }; 

    render() {
        return (
            <div>
                <SearchForm 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.results.map(result => (
                    <ResultCard key = {result.id}
                    title = {result.title}
                    image = {result.image}
                    authors = {result.authors}
                    description = {result.description}
                    link = {result.link}
                    />))
                }
            </div>  
        );
    };
};

export default ResultsContainer; 
                