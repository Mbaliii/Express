import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    employees: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (obj) => dispatch(addEmployees(obj)),
  };
};

const Employees = (props) => {
  const [employee, setEmployee] = useState("");

  const handleChange = (e) => {
    setEmployee(e.target.value);
  };

  const add = () => {
    if (employee === "") {
      alert("Input is Empty");
    } else {
      props.addEmployee({
        id: Math.floor(Math.random() * 1000),
        item: employee,
        completed: false,
      });
      setEmployee("");
    }
  };


  return (
    <div className="addEmployees">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Employees);