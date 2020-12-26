import React from 'react';
import Button from 'react-bootstrap/Button';

const SearchForm = (props) => {   
    return (
        <div className='searchForm'>
            <form>
                <input
                    value={props.value}
                    name='search'
                    onChange={props.handleInputChange}
                    type='text'
                    placeholder='Search For a Book'
                /> 
                <Button variant='primary' onClick={props.handleFormSubmit}>Search</Button>
            </form>
        </div>  
    );
};
  
export default SearchForm;