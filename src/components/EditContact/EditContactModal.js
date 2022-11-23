import React from 'react'
import EditContact from './EditContact'

const EditContactModal = ({ closeEditModal, handleAddNote, editContact }) => {
  return (
    <>
      <div id='myModals' className='modal'>
        <div className='modals'>
          {/* <!-- Modal content --> */}
          <EditContact
            closeModal={closeEditModal}
            handleAddNote={handleAddNote}
            editContact={editContact}
          />
          {/* <div class='modal-content'>
          <div class='modal-header'>
            <span class='close' onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Header</h2>
          </div>
          <div class='modal-body'>
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>
          <div class='modal-footer'>
            <h3>Modal Footer</h3>
          </div>
        </div> */}
        </div>
      </div>
    </>
  )
}
export default EditContactModal
