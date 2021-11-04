import React from 'react';

const NoteItem = (props) => {
    return (
        <>
            <div className="card text-center m-3" style={{maxWidth:"350px"}}>
                <div className="card-header">
                    {props.tag}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <i className="far fa-trash-alt mx-2"/> <i className="fas fa-edit mx-2"/>
                </div>
                <div className="card-footer text-muted">
                    {props.date}
                </div>
            </div>
        </>
    );
};

export default NoteItem;
