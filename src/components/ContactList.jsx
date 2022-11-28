import { BsCamera } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { removeContact } from '../service/localstorage'
import { getListContacts } from '../service/localstorage'
import { useNavigate } from 'react-router-dom'

export const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(getListContacts())
  }, [])
  const navigate = useNavigate()

  const deleteContact = (id) => {
    removeContact(id)
    setContacts(getListContacts())
  }
  return (
    <>
      <div>
        <div className='whole-goodness'>
          <div className='circle'><BsCamera /></div>
          <h3>Sewo Goodness</h3>
          <div className='add-contact-button'>
            
          </div>
        </div>

        {contacts.length > 0 ? (
          <>
            <div className='card'>
              {contacts.map((contact) => {
                const { id, name } = contact
                return (
                  <div className='d-flex gap-3'>
                    <p>{name}</p>
                    <span
                      type='button'
                      className='badge bg-success'
                      onClick={() => navigate(`/edit-contact/${id}`)}
                    >
                      Edit
                    </span>
                    <span
                      type='button'
                      className='badge bg-danger'
                      onClick={() => deleteContact()}
                    >
                      Delete
                    </span>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <div className='card'>
            <h3 className='text-center'>No employees</h3>
          </div>
        )}
      </div>
    </>
  )
}
