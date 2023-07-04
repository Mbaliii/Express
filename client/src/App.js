import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee';
import EmployeeCreate from './EmployeeCreate';
import Update from './Update';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
        <Route path='/Employee/create' element={<EmployeeCreate />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;