import { useNavigate, useParams } from 'react-router-dom'
import { addContact, getContactById } from '../service/localstorage'
import { useForm } from '../hooks/useForm'
import uuid from 'react-uuid'
import { useState, useEffect } from 'react'
import { editContact } from '../service/localstorage'
import { BsCamera } from 'react-icons/bs'

export const ShahriarContactForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [showAlert, setshowAlert] = useState(false)
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    if (id) {
      const contact = getContactById(id)
      setForm(contact)
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    id
      ? editContact(id, inputValues)
      : addContact({ id: uuid(), ...inputValues })
    resetForm()
    setshowAlert(true)
    setTimeout(() => {
      setshowAlert(false)
    }, 2000)
  }

  return (
    <div>
      <div className='Shahriar-input'>
        <div className='Shahriar-cir'>
          <BsCamera />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            value={inputValues.name}
            onChange={handleInputChange}
            className='form-control'
            id='inputValid'
            placeholder='Type name...'
          />
          <input
            name='email'
            type='email'
            value={inputValues.email}
            onChange={handleInputChange}
            className='form-control'
            id='inputValid'
            placeholder='Type email...'
          />
          <input
            name='phone'
            type='text'
            value={inputValues.phone}
            onChange={handleInputChange}
            className='form-control'
            id='inputValid'
            placeholder='Type number...'
          />

          <div className='Shahriar-click'>
            <button type='button' className='btn' onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type='button' className='btn1' onClick={handleSubmit}>
              Save
            </button>
            <div />
          </div>
          {/* <div className='d-grid gap-2 mt-3'>
            <button type='submit' className='btn btn-outline-primary btn-block'>
              {id ? 'Edit' : 'Add'} Employee
            </button>
          </div> */}
        </form>
      </div>

      {showAlert && (
        <div className='px-5'>
          <div className='alert alert-success'>
            <p>Contact added</p>
          </div>
        </div>
      )}
    </div>
  )
}
