import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  // create a stateful constants that uses objects (title and content) as initial state
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false);

  // create a function that will handle change on both title and content fields
  // it will take an event when triggered
  function handleChange(event) {

    // destructured the event.target.name and event.target.value as separate constants
    const {name, value} = event.target;

    // set the state using the previous and current input values
    setNote(prevNote => {
      return {
        ...prevNote, // use spread operator to spread the key:value pairs in the note
        [name]: value // new name and value pair, the '[]' turns the key to the actual value in the destructured event.target object
      }
    });
  }

  function submitNote(event) {

    // pass the new note back to App
    props.onAdd(note);
    
    // Clear input fields on submit
    setNote({
      title: "",
      content: ""
    });

    // prevent the form from refreshing the page on submit
    event.preventDefault();
  }

  function handleTextareaClick() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        { 
          isExpanded && <input 
          onChange={handleChange} 
          value={note.title} name="title" 
          placeholder="Title" 
        /> 
        }
        <textarea 
          onClick={handleTextareaClick}
          onChange={handleChange} 
          value={note.content} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
        />
        <Zoom in={isExpanded}>
          <Fab aria-label="Add" onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
