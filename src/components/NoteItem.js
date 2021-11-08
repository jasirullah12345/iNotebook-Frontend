import React, {useContext} from 'react';
import NoteContext from "../context/Note/NoteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    return (
        <>
            <div className="card text-center m-3 p-0" style={{maxWidth: "350px"}}>
                <div className="card-header">
                    {props.tag ? props.tag : "No Tag"}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => {
                        context.deleteNote(props.id);
                    }}/>
                    <i className="fas fa-edit mx-2" onClick={() => {
                        props.setEditNote({
                            id: props.id,
                            title: props.title,
                            description: props.description,
                            tag: props.tag
                        });
                        props.modal.current.click();
                    }}/>
                </div>
                <div className="card-footer text-muted">
                    {new Date(props.date).toLocaleString()}
                </div>
            </div>
        </>
    );
};

export default NoteItem;
