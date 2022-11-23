import React from 'react'
import AddContact from './AddContact'

import "./AddContactModal.css"

const AddContactModal = ({ closeModal, handleAddNote }) => {
  return (
    <>
      <div id='myModal' className='modal'>
        <div className='modals'>
          {/* <!-- Modal content --> */}
          <AddContact closeModal={closeModal} handleAddNote={handleAddNote} />
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

export default AddContactModal
