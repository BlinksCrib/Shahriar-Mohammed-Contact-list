import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import { SpeedDial, SpeedDialIcon } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { FaSearch } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import AddContactModal from './components/AddContact/AddContactModal'
import EditContactModal from './components/EditContact/EditContactModal'
import 'antd/dist/antd.css';

const App = () => {
     // Get the Add contact modal
  // Get the Add contact modal
  const [toggle, setToggle] = useState(false)
  const openModal = () => {
    setToggle(!toggle)
    document.getElementById('myModal').style.display = 'block'
    document.getElementById('out').style.display = 'none'
  }
  const closeModal = () => {
    setToggle(!toggle)
    document.getElementById('myModal').style.display = 'none'
    document.getElementById('out').style.display = 'block'
  }
  // Get the Add contact modal
  // Get the Add contact modal

  // Get the Edit contact modal
  // Get the Edit contact modal

  const [editContact, setEditContact] = useState({})

  const [toggles, setToggles] = useState(false)
  const openEditModal = (id) => {
    setToggles(!toggles)
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
    setToggles(!toggles)
    console.log("hello")
    document.getElementById('myModals').style.display = 'none'
    document.getElementById('out').style.display = 'block'
  }
  // Get the Edit contact modal
  // Get the Edit contact modal

  // notes array
  // notes array

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      name: 'This is my first note!',
      number: '08107951217',
      date: '15/04/2021',
      email: 'ajibolaisaac09@gmail.com',
      time: '04-28-59',
    },
    {
      id: nanoid(),
      name: 'This is my second note!',
      number: '08107951217',
      date: '21/04/2021',
      email: 'ajibolaisaac09@gmail.com',
      time: '04-28-59',
    },
    {
      id: nanoid(),
      name: 'This is my third note!',
      number: '08107951217',
      date: '28/04/2021',
      email: 'ajibolaisaac09@gmail.com',
      time: '04-28-59',
    },
    {
      id: nanoid(),
      name: 'This is my new note!',
      number: '08107951217',
      date: '30/04/2021',
      email: 'ajibolaisaac09@gmail.com',
      time: '04-28-59',
    },
  ])
  // notes array
  // notes array


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
      name: formField.noteName,
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

  // delete note
  // delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }
  // delete note
  // delete note

  // search note
  // search note
   const [toggleSearch, setToggleSearch] = useState(true)

   const openNav = () => {
     // navRef.current.style.width = ${240};
     document.getElementById('mySearch').style.width = '100%'
   }
   const closeNav = () => {
     document.getElementById('mySearch').style.width = '0px'

     // navRef.current.style.width = ${0}px;
   }
   const handleToggleSearch = () => {
     setToggleSearch(!toggleSearch)
     if (toggleSearch === true) {
       openNav()
     } else {
       closeNav()
     }
   }

   
  const [searchText, setSearchText] = useState('')
  // search note
  // search note

  return (
    <div>
      <div className='container'>
        <div className='parent-icon'>
          <div className='sub-icon'>
            <div className='search'>
              <FaSearch onClick={handleToggleSearch} className='delete-icon' />
              <input
                onChange={(event) => setSearchText(event.target.value)}
                type='text'
                placeholder='type to search...'
                id='mySearch'
              />
            </div>
            <BiDotsVerticalRounded />
          </div>
        </div>
        {/* <Search handleSearchNote={setSearchText} /> */}
      </div>
      <div className='container-note'>
        <NotesList
          openEditModal={openEditModal}
          notes={notes.filter(
            (note) =>
              note.name.toLowerCase().includes(searchText.toLowerCase()) ||
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
      <AddContactModal closeModal={closeModal} handleAddNote={addNote} />
      <EditContactModal
        closeEditModal={closeEditModal}
        handleAddNote={addNote}
        editContact={editContact}
      />
    </div>
  )
}
export default App
