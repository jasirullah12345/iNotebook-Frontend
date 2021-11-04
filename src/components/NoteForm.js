import React from 'react';

const NoteForm = () => {
    return (
        <>
            <div className="my-3 p-3">
                <h2 className="text-center">Your Cloud Notes Taking App</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag"/>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm">Add Note</button>
                </form>
            </div>
        </>
    );
};

export default NoteForm;
