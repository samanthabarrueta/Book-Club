import React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ResultCard = (props) => {
    return (
        <div className ='ResultCard'>
            <Card>
                <Row>
                    <Col lg={2}>
                        <img src={props.image} alt='Book Cover' />
                    </Col>
                    <Col lg={10}>
                        <h1>{props.title}</h1>
                        <strong>Authors:</strong> {props.authors}
                        <p>{props.description}</p> 
                        <a href={props.link} className='text-muted'>Find on Google Books</a>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ResultCard;
