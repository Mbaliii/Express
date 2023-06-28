import React, { useState } from "react";
import { connect } from "react-redux";
import { addEmployees, completeEmployees, removeEmployees, updateEmployees, } from "../redux/reducer";
// import TodoItem from "./TodoItem";
import employeelist from './components/employeelist'
import { AnimatePresence, motion } from "framer-motion";




const mapStateToProps = (state) => {
  return {
    employeelist: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEmployee: (obj) => dispatch(addEmployees(obj)),
    removeEmployee: (id) => dispatch(removeEmployees(id)),
    updateEmployee: (obj) => dispatch(updateEmployees(obj)),
    completeEmployee: (id) => dispatch(completeEmployees(id)),
  };
};

const DisplayEmployees = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displayemployees">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.employeelist.length > 0 && sort === "active"
            ? props.employeelist.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeEmployee={props.removeEmployee}
                    updateEmployee={props.updateEmployee}
                    completeEmployee={props.completeEmployee}
                  />
                )
              );
            })
            : null}
        

        
          {props.todos.length > 0 && sort === "completed"
            ? props.employeelist.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeEmployee={props.removeEmployee}
                    updateEmployee={props.updateEmployee}
                    completeEmployee={props.completeEmployee}
                  />
                )
              );
            })
            : null}
          


          {props.todos.length > 0 && sort === "all"
            ? props.employeelist.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeEmployee}
                  updateTodo={props.updateEmployee}
                  completeTodo={props.completeEmployee}
                />
              );
            })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayEmployees);

