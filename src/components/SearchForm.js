import React, { Component} from 'react';
import Button from 'react-bootstrap/Button';

class SearchForm extends Component {
    
    state = {
        searchValue: ''
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
                <form className='searchForm'>
                    <input
                        value={this.state.searchValue}
                        name='searchValue'
                        onChange={this.handleInputChange}
                        type='text'
                        placeholder='Search For a Book'
                    /> 
                    <Button variant='primary' onClick={this.handleFormSubmit}>Search</Button>
                </form>
            </div>  
        );
    };
};
  
export default SearchForm;