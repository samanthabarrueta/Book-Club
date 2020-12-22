import React from 'react';

class BookResult extends React.Component {
    constructor(result) {
        result = {
            id: result.id,
            title: result.id,
            authors: result.authors,
            description: result.description,
            image: result.image,
            link: result.link
        };
    };

    get id(){
        return this._result.id;
    };

    get title(){
        return this._result.title;
    };

    set title(title){
        this._result.title = title;
    };

    get authors(){
        return this._result.authors;
    };

    set authors(authors){
        this._result.authors = authors;
    };

    get description(){
        return this._result.description;
    };

    set description(description){
        this._result.description = description;
    };

    get image(){
        return this._result.image;
    };

    set image(image){
        this._result.image = image;
    };

    get link(){
        return this._result.link;
    };

    set link(link){
        this._result.link = link;
    };
};

export default BookResult;