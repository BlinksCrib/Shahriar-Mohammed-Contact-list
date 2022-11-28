import { ContactList, ContactForm } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<ContactList />} />
          <Route path='/create-contact' element={<ContactForm />} />
          <Route path='/edit-contact/:id' element={<ContactForm />} />
        </Routes>
      </div>
  )
}
export default App
