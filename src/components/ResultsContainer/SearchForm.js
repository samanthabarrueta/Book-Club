import React from 'react';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {   
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
        console.log(this.state.search)
    }; 

    render() {
        return (
            <div>
                <form className='searchForm'>
                    <input
                        value={this.state.search}
                        name='search'
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