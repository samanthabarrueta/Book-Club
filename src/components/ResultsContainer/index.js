import React, { Component} from 'react';
import SearchForm from './SearchForm';

class ResultsContainer extends Component {
    state = {
        search: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchValue)
    }; 

    render() {
        return (
            <div>
                <SearchForm />
            </div>  
        );
    };
};

export default ResultsContainer;