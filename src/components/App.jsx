import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(prevNote => {
            return [...prevNote, note] // add the new note to the array of existing note (prevNote)
        });
    }

    function deleteNote(id) {
        setNotes(prevNote => { // grab all the notes and
            // use the filter() function to exclude the note item from the list
            return prevNote.filter((note, index) => {
                return index !== id;
            });
        });
    }

    // use the map() function to display the contents of the notes array
    // use the note item index as props id in CreateArea.jsx
    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => {
            return <Note 
                    key={index} 
                    id={index} 
                    title={note.title} 
                    content={note.content} 
                    onChecked={deleteNote}
                    />
        })}
        <Footer />
    </div>
}

export default App;