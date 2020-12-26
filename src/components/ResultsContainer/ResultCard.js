import React from 'react';
import Card from 'react-bootstrap/Card';

const ResultCard = (props) => {
    return (
        <div className ='ResultCard'>
            <Card>
                <strong>Title:</strong> {props.title}
                <strong>Image:</strong> {props.image}
                <strong>Authors:</strong> {props.authors}
                <strong>Description:</strong> {props.description}
                <strong>Link:</strong> {props.link}
            </Card>
        </div>
    );
};

export default ResultCard;
