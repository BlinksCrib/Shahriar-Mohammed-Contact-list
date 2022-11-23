import React, { useState } from 'react';
import {BiArrowBack} from "react-icons/bi";
import {FcCheckmark} from "react-icons/fc";
import {BsCamera} from "react-icons/bs";


const AddContact = ({ handleAddNote, closeModal }) => {


  const [formField, setformField] = useState({})
  function handleChange(e) {
    setformField((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  }
  

  const handleSaveClick = (e) => {
    console.log("hello");
    e.preventDefault()
    if (
      formField.noteText.trim().length > 0 &&
      formField.noteNumber.trim().length > 0 &&
      formField.noteEmail.trim().length > 0
    ) {
      handleAddNote(formField);
      closeModal();
        setformField("")
    }
  }
  // const addNote = (formField) => {
  //   const date = new Date()
  //   const time = new Date().getTime
  //   const newNote = {
  //     id: nanoid(),
  //     text: formField.noteText,
  //     number: formField.noteNumber,
  //     // email: formField.noteEmail,
  //     date: date.toLocaleDateString(),
  //     time: time,
  //   }

  //   const newNotes = [...notes, newNote]
  //   setNotes(newNotes)
  // }

  return (
    <div className='parent-contact'>
      <div className='sub-contact'>
        <div className='top'>
          <div className='back' onClick={closeModal}>
            <BiArrowBack />
            <p style={{marginBottom: "0"}}>New Contact</p>
          </div>
          <div className='tick'>
            <FcCheckmark onClick={handleSaveClick} />
          </div>
        </div>
        <div className='bottom'>
          <div className='circle'>
            <BsCamera />
          </div>
          <div className='account'></div>
          <div className='fill'>
            <form action=''>
              <input
                type='text'
                placeholder='Name'
                name='noteText'
                onChange={handleChange}
                autoComplete='off'
              />
              <input
                type='number'
                placeholder='Phone'
                name='noteNumber'
                onChange={handleChange}
                autoComplete='off'
              />
              <input
                type='email'
                placeholder='Email'
                name='noteEmail'
                onChange={handleChange}
                autoComplete='off'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContact
