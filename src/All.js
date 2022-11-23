import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Header from './components/Header'
import { SpeedDial, SpeedDialIcon } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Icon from './components/Icon'
import AddContactModal from './components/AddContact/AddContactModal'
import EditContactModal from './components/EditContact/EditContactModal'

const All = (props) => {
  // Get the Add contact modal
  // Get the Add contact modal
  const [toggle, setToggle] = useState(false)
  const openModal = () => {
    setToggle(true)
    document.getElementById('myModal').style.display = 'block'
    document.getElementById('out').style.display = 'none'
  }
  const closeModal = () => {
    setToggle(false)
    document.getElementById('myModal').style.display = 'none'
    document.getElementById('out').style.display = 'block'
  }
  // Get the Add contact modal
  // Get the Add contact modal


  // Get the Edit contact modal
  // Get the Edit contact modal

  
  const [editContact, setEditContact] = useState({})

  console.log(editContact)
  const [toggles, setToggles] = useState(false)
  const openEditModal = (id) => {
    setToggles(true)
    document.getElementById('myModals').style.display = 'block'
    document.getElementById('out').style.display = 'none'

    const find = JSON.parse(localStorage.getItem('react-notes-app-data')).find(
      (note) => note.id == id
    )
    setEditContact(find)
    // const newNotes = notes.find((note) => note.id !== id)
    // setNotes(...notes, newNotes)
  }
  const closeEditModal = () => {
    setToggles(false)
    document.getElementById('myModal').style.display = 'none'
    document.getElementById('out').style.display = 'block'
  }
  // Get the Edit contact modal
  // Get the Edit contact modal


  // notes array
  // notes array

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

  // notes array
  // notes array

  const [searchText, setSearchText] = useState('')

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (formField) => {
    const date = new Date()
    const time = new Date().getTime
    const newNote = {
      id: nanoid(),
      text: formField.noteText,
      number: formField.noteNumber,
      email: formField.noteEmail,
      date: date.toLocaleDateString(),
      time: time,
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  // const editNote = (id) => {
  //   const newNotes = notes.find((note) => note.id !== id)
  //   setNotes(...notes, newNotes)
  // }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Icon handleSearchNote={setSearchText} />
        {/* <Search handleSearchNote={setSearchText} /> */}
      </div>
      <div className='container-note'>
        <NotesList
          openEditModal={openEditModal}
          notes={notes.filter(
            (note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase()) ||
              note.number.includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
        <SpeedDial
          ariaLabel='SpeedDial openIcon example'
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onClick={openModal}
          id='out'
        ></SpeedDial>
      </div>
      {/* <Drawer
        placement='bottom'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>{eachData.text}</p>
        <p>{eachData.number}</p>
        <p>Some contents...</p>
      </Drawer> */}
      <AddContactModal closeModal={closeModal} handleAddNote={addNote} />
      <EditContactModal
        closeModal={closeEditModal}
        handleAddNote={addNote}
        editContact={editContact}
      />
      {/* <NotesList
					// notes={notes.filter((note) =>
					// 	note.text.toLowerCase().includes(searchText)
					// )}
					// notes={(note) => note.text}
					// handleAddNote={addNote}

					handleDeleteNote={deleteNote}
				/> */}
    </div>
  )
}

export default All
