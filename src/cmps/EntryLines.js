import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry, handleShowModal, editEntry }) => {
  return (
    <div>
      {entries.map((entry) => (
        <EntryLine key={entry.entryId} entry={entry} deleteEntry={deleteEntry} editEntry={editEntry} />
      ))}
    </div>
  );
};

export default EntryLines;
