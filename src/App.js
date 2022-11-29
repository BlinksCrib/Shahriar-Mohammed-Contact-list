import { ShahriarContactList, ShahriarContactForm } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ShahriarContactList />} />
        <Route path='/create-contact' element={<ShahriarContactForm />} />
        <Route path='/edit-contact/:id' element={<ShahriarContactForm />} />
      </Routes>
    </div>
  )
}
export default App
