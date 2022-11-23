import All from './All';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<All />} />
      </Routes>
    </Router>
  )
}
export default App
