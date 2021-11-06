import React, {useContext, useEffect} from 'react';
import NoteItem from "./NoteItem";
import NoteContext from "../context/Note/NoteContext";

const Notes = () => {
    const context = useContext(NoteContext);
    useEffect(() => {
        context.getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="row justify-content-center">
                {context.notes.length>0?context.notes.map((note) => {
                    return <NoteItem key={note._id} id={note._id} tag={note.tag} title={note.title}
                                     description={note.description}
                                     date={note.date}/>
                }):<h6 className="text-center text-danger">No Notes Found</h6>}
            </div>
        </>
    );
};

export default Notes;
