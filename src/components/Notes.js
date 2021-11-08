import React, {useContext, useEffect, useRef, useState} from 'react';
import NoteItem from "./NoteItem";
import NoteContext from "../context/Note/NoteContext";

const Notes = () => {

    const modal = useRef(null);

    const context = useContext(NoteContext);
    useEffect(() => {
        context.getNotes();
        // eslint-disable-next-line
    }, []);

    const [editNote, setEditNote] = useState({
        id: "",
        title: "",
        description: "",
        tag: ""
    });

    const onChange = (e) => {
        setEditNote({...editNote, [e.target.name]: e.target.value});
    };

    const updateNote = async () => {
        modal.current.click();
        await context.updateNote(editNote.id, editNote.title, editNote.description, editNote.tag);
    };

    return (
        <>
            <div className="row justify-content-center">
                {context.notes.length > 0 ? context.notes.map((note) => {
                    return <NoteItem key={note._id} id={note._id} tag={note.tag} title={note.title}
                                     description={note.description}
                                     date={note.date} setEditNote={setEditNote} modal={modal}/>
                }) : <h6 className="text-center text-danger">No Notes Found</h6>}
            </div>

            {/*Button trigger modal*/}
            <button type="button" ref={modal} className="btn btn-primary d-none" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/*Modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="title" name="title"
                                           aria-describedby="emailHelp" value={editNote.title} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description"
                                           value={editNote.description} onChange={onChange}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={editNote.tag}
                                           onChange={onChange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={updateNote}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal*/}
        </>
    );
};

export default Notes;
