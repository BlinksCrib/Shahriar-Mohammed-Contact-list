import { BsCamera } from 'react-icons/bs'
import {AiOutlinePlusCircle} from "react-icons/ai"
import { TiUserDelete } from "react-icons/ti"
import { FiEdit } from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { removeContact } from '../service/localstorage'
import { getListContacts } from '../service/localstorage'
import { useNavigate } from 'react-router-dom'

export const ShahriarContactList = () => {
  const [contacts, setContacts] = useState([])

  const navigate = useNavigate()
  function goToContact() {
    navigate('/create-contact')
  }

  useEffect(() => {
    setContacts(getListContacts())
  }, [])

  const deleteContact = (id) => {
    removeContact(id)
    setContacts(getListContacts())
  }

  // confirmation before delete
  // delete modal
  // delete modal
  const [toggle, setToggle] = useState(false)
  const openDeleteModal = () => {
    setToggle(!toggle)
    document.getElementById('delete').style.display = 'block '
  }
  const closeDeleteModal = () => {
    setToggle(!toggle)
    document.getElementById('delete').style.display = 'none'
  }
  // delete modal
  // delete modal
  // confirmation before delete

  // search state
  const [search, setSearch] = useState('')
  // search state

  return (
    <>
      <div>
        {/* search area */}
        <div className='Shahriar-cont'>
          <div className='Shahriar-cir'>
            <BsCamera />
          </div>
          <h3>Shahriar Mohammed Shiblee</h3>
          <div className='Shahriar-add-contact-button'>
            <FaSearch className='Shahriar-delete-icon' />
            <input
              type='text'
              placeholder='search by name or number'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <article onClick={goToContact}>
              <AiOutlinePlusCircle />
            </article>
          </div>
        </div>

        {/* where I am  */}
        {contacts.length > 0 ? (
          <>
            <div className='Shahriar-item'>
              {contacts
                ?.filter(
                  (contact) =>
                    contact.name.toLowerCase().includes(search.toLowerCase()) ||
                    contact.phone.includes(search)
                )
                .map((contact, i) => {
                  const { id, name } = contact
                  return (
                    <div className='Shahriar-list-item' key={i}>
                      <h5>{name}</h5>
                      <div>
                        <span onClick={() => navigate(`/edit-contact/${id}`)}>
                          <FiEdit />
                        </span>
                        <span onClick={openDeleteModal}>
                          <TiUserDelete />
                        </span>
                      </div>
                      {/* modal for delete */}
                      <div id='delete' className='Shahriar-modal'>
                        <div className='Shahriar-modals'>
                          <h4>Are you sure you want to delete this contact</h4>
                          <div className='yes-no'>
                            <button onClick={closeDeleteModal}>No</button>
                            <button
                              onClick={() => deleteContact(id)}
                              className='yes'
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </>
        ) : (
          <div className='Shahriar-item'>
            <h3 style={{ textAlign: 'center' }}>No contact</h3>
          </div>
        )}
      </div>
    </>
  )
}
