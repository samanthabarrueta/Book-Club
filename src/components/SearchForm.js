import React, { Component} from 'react';

class SearchForm extends Component {
    
    state = {
        searchValue: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log('name ' + name);
        console.log('value ' + value)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    };

    render() {
        return (
            <div>
                <form className='search'>
                    <input
                    onChange={this.handleInputChange}
                    value={this.state.searchValue}
                    name='searchValue'
                    type='text'
                    className='form-control'
                    placeholder='Search For a Book'
                    id='search'
                    /> 
                    <button onClick={this.handleFormSubmit}>Search</button>
                </form>
            </div>  
        );
    };
};
  
export default SearchForm;