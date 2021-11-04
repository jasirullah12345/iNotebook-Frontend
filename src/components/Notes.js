import React, {useContext} from 'react';
import NoteItem from "./NoteItem";
import NoteContext from "../context/Note/NoteContext";

const Notes = () => {
    const context = useContext(NoteContext);
    return (
        <>
            <div className="row justify-content-center">
                {context.notes.map((note) => {
                    return <NoteItem key={note._id} tag={note.tag} title={note.title} description={note.description}
                                     date={note.date}/>
                })}
            </div>
        </>
    );
};

export default Notes;
