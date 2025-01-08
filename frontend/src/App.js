import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboards from './pages/Dashboards';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <>
      <Router>
        <div className='container'>
           <Routes>
              <Route path='/' element={<Dashboards />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
           </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
