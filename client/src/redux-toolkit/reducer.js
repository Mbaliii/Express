import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addEmployeeReducer = createSlice({
  name: "employees",
  initialState,
  reducers: {


    addEmployees: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeEmployees: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateEmployees: (state, action) => {
      return state.map((todo) => {
        if (employee.id === action.payload.id) {
          return {
            ...employee,
            item: action.payload.item,
          };
        }
        return employee;
      });
    },


    completeEmployees: (state, action) => {
      return state.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            completed: true,
          };
        }
        return employee;
      });
    },
  },
});



export const {addEmployees,removeEmployees,updateEmployees,completeEmployees,} = addEmployeeReducer.actions;
export const reducer = addEmployeeReducer.reducer;
