import Note from './Note';
import AddContact from './AddContact/AddContact';
import { useState } from 'react';

const NotesList = ({
  notes,
  handleAddNote,
  openEditModal,
  handleDeleteNote,
}) => {
  return (
    <div className='notes-list'>
      {notes?.map((note, i) => {
        const { text, number, id, date, time } = note
        return (
          <div className='list' key={i} onClick={() => openEditModal(id)}>
            <Note
              id={id}
              text={text}
              date={date}
              time={time}
              number={number}
              handleDeleteNote={handleDeleteNote}
            />
          </div>
        )
      })}
      <div className='none' style={{ display: 'none' }}>
        <AddContact handleAddNote={handleAddNote} />
      </div>
    </div>
  )
}

export default NotesList;
