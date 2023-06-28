import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
// import employeelist from './components/employeelist';

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          {/* <Route path='/employeelist' element={<employeelist />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
