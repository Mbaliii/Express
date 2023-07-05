import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import Listing from "./components/Employee/Listing";
// import Create from "/components/Employee/Create";
import Detail from "./components/Employee/Detail";
import Edit from "./components/Employee/Edit";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path='/' element={<Listing />}></Route>
			{/* <Route path='/employee/create' element={<Create />}></Route> */}
			<Route path='/employee/detail/:empid' element={<Detail />}></Route>
			<Route path='/employee/edit/:empid' element={<Edit />}></Route>

			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
	);
}

export default App;
