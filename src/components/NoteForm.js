import React, {useContext, useState} from 'react';
import NoteContext from "../context/Note/NoteContext";

const NoteForm = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""});
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    };
    const insertNote = () => {
        addNote(note.title, note.description, note.tag);
    };
    return (
        <>
            <div className="my-3 p-3" id="noteForm">
                <h2 className="text-center">Your Cloud Notes Taking App</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title"
                               aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description"
                               onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm" onClick={insertNote}>Add Note</button>
                </form>
            </div>
        </>
    );
};

export default NoteForm;
