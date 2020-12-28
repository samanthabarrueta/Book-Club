import React from 'react';
import './style.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchForm = (props) => {   
    return (
        <div className='searchForm'>
            <Row>
                <Col med={10}>
                    <Form>
                        <Form.Group controlId='searchForm'>
                            <Form.Control 
                                value={props.value}
                                name='search'
                                onChange={props.handleInputChange}
                                type='text' 
                                placeholder='Search For a Book' 
                            />
                        </Form.Group>
                    </Form>
                </Col>
                <Col med={2}>
                    <Button onClick={props.handleFormSubmit}>
                        Search
                    </Button>
                </Col>
            </Row>
        </div>  
    );
};
  
export default SearchForm;