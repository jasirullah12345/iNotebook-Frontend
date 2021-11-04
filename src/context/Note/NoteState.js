import React, {useState} from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial =[
        {
            "_id": "61829765ed6ca294040f0cf7",
            "user": "6180349978e2dfa12a150c8f",
            "title": "This is my title second",
            "description": "Customized Description",
            "tag": "Personel second",
            "date": "2021-11-03T14:06:29.825Z",
            "__v": 0
        },
        {
            "_id": "618417fa7eb76c8cab0c368a",
            "user": "6180349978e2dfa12a150c8f",
            "title": "This is my title second",
            "description": "This is my description second",
            "tag": "Example tag",
            "date": "2021-11-04T17:27:22.668Z",
            "__v": 0
        },
        {
            "_id": "6184192fb5de3b54fec40bb1",
            "user": "6180349978e2dfa12a150c8f",
            "title": "This is my title third",
            "description": "This is my description second",
            "tag": "Example tag",
            "date": "2021-11-04T17:32:31.262Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesInitial);


    return (
        <>
            <NoteContext.Provider value={{notes,setNotes}}>
                {props.children}
            </NoteContext.Provider>
        </>
    );
};

export default NoteState;
