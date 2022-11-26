import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FcCheckmark } from 'react-icons/fc'
import { BsCamera } from 'react-icons/bs'

const EditContact = ({ handleAddNote, closeEditModal, editContact }) => {

  // name state
  // name state
  const [formName, setformName] = useState('')
  useEffect(() => {
    setformName(editContact.name)
  }, [editContact.name])

  function handleName(e) {
    setformName(e.target.value)
  } // name state
  // name state

  // number state
  // number state
  const [formNumber, setformNumber] = useState('')
  useEffect(() => {
    setformNumber(editContact.number)
  }, [editContact.number])

  function handleNumber(e) {
    setformNumber(e.target.value)
  } // number state
  // number state

  // email state
  // email state
  const [formEmail, setformEmail] = useState('')
  useEffect(() => {
    setformEmail(editContact.email)
  }, [editContact.email])

  function handleEmail(e) {
    setformEmail(e.target.value)
  } // email state
  // email state

  const formField= {
    noteName: formName,
    noteNumber: formNumber,
    noteEmail: formEmail,

  }

  const handleSaveClick = (e) => {
    e.preventDefault()
    if (
      formField.noteText.length > 0 &&
      formField.noteNumber.length > 0 &&
      formField.noteEmail.length > 0
    ) {
      handleAddNote(formField)
      closeEditModal()
    }
  }
  return (
    <div className='parent-contact'>
      <div className='sub-contact'>
        <div className='top'>
          <div className='back' onClick={closeEditModal}>
            <BiArrowBack />
            <p style={{ marginBottom: '0' }}>Edit Contact</p>
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
                name='noteNext'
                value={formName || ''}
                onChange={handleName}
              />
              <input
                type='number'
                placeholder='Phone'
                name='noteNumber'
                value={formNumber || ''}
                onChange={handleNumber}
              />
              <input
                type='email'
                placeholder='Email'
                name='noteEmail'
                value={formEmail || ''}
                onChange={handleEmail}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditContact
