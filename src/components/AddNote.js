import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
//   const [noteText, setNoteText] = useState('');

const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text: 'This is my first note!',
    number: '08107951217',
    date: '15/04/2021',
    email: 'ajibolaisaac09@gmail.com',
    time: '04-28-59',
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    number: '08107951217',
    date: '21/04/2021',
    email: 'ajibolaisaac09@gmail.com',
    time: '04-28-59',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    number: '08107951217',
    date: '28/04/2021',
    email: 'ajibolaisaac09@gmail.com',
    time: '04-28-59',
  },
  {
    id: nanoid(),
    text: 'This is my new note!',
    number: '08107951217',
    date: '30/04/2021',
    email: 'ajibolaisaac09@gmail.com',
    time: '04-28-59',
  },
])
  
  // Form Fields
  const [formField, setformField] = useState({})
  function handleChange(e) {
    setformField((inputs) => ({
		...inputs,
		[e.target.name]: e.target.value,
    }))
  }
  console.log(formField);
  // Form Fields
//   const characterLimit = 200

//   const handleNote = (event) => {
//     setNoteText(event.target.value)
//     // if (characterLimit - event.target.value.length >= 0) {
//     // }
//   }
//   const handleNumber = (event) => {
//     setNoteNumber(event.target.value)
//   }

  const handleSaveClick = (e) => {
    e.preventDefault()
    if (
      formField.noteText.trim().length > 0 &&
      formField.noteNumber.trim().length > 0
    ) {
		handleAddNote(formField)
		setformField({})
    //   handleAddNote(noteText)
    //   handleAddNumber(noteNumber)
    //   setNoteText('')
    //   setNoteNumber('')
    //   setMdList(noteNumber)
    }
  }

  return (
    <div className='note new'>
      <form>
        <textarea
          rows='8'
          cols='10'
          placeholder='Type to add a note...'
          //   value={noteText}
          name='noteText'
          onChange={handleChange}
        ></textarea>
        <input
          type='number'
          placeholder='Type to add a number...'
          name='noteNumber'
          //   value={noteNumber}
          onChange={handleChange}
        ></input>
        <div className='note-footer'>
          {/* <small>{characterLimit - noteText.length} Remaining</small> */}
          <button className='save' type='submit' onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
};

export default AddNote;
