import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee } from '../src/types/employeeType';

// Simulate API call for saving employee
export const saveEmployeeAPI = createAsyncThunk(
    'employees/saveEmployee',
    async (employee: Employee) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate API response
        return employee;
    }
);

const initialState: { employees: Employee[]; loading: boolean; error: string | null } = {
    employees: [],
    loading: false,
    error: null
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload);
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees = state.employees.map(employee => 
                employee.id === action.payload.id ? action.payload : employee
            );
        },
        deleteEmployee: (state, action: PayloadAction<string>) => {
            state.employees = state.employees.filter(employee => employee.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveEmployeeAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(saveEmployeeAPI.fulfilled, (state, action) => {
                state.loading = false;
                // Check if employee exists (update) or is new (add)
                const existingIndex = state.employees.findIndex(emp => emp.id === action.payload.id);
                if (existingIndex >= 0) {
                    state.employees[existingIndex] = action.payload;
                } else {
                    state.employees.push(action.payload);
                }
            })
            .addCase(saveEmployeeAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to save employee';
            });
    }
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;