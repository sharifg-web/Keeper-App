import React from "react";

function Note(props) {
    return <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={() => {
        props.onChecked(props.id);
    }}>DEL</button>
    </div>
}

export default Note;