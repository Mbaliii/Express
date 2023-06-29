import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
// import Read from './Read';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee';
import EmployeeCreate from './EmployeeCreate';
import Update from './Update';
// import create from 'Create';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/Employee' element={<Employee/>}></Route>
        <Route path='/Employee/create' element={<EmployeeCreate />}></Route>
        {/* <Route path='/read/:id' element={<Read />}></Route> */}
        <Route path='/update/:id' element={<Update />}></Route>
        {/* <Route path='/create' element={<Create />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;