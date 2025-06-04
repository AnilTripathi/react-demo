import React, { useState } from 'react'
import type { Employee } from '../types/employeeType'
import EmployeeCard from './EmployeeCard';
import EmployeeForm from './EmployeeForm';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/index';
import { addEmployee, updateEmployee, deleteEmployee } from '../../store/reducers';

const EmployeeList = () => {
    const employees = useSelector((state: RootState) => state.employees.employees);
    const dispatch = useDispatch();
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (employee: Employee) => {
        setEditingEmployee(employee);
        setIsEditing(true);
    }

    const handleSave = (employee: Employee) => {
        if(isEditing){
            dispatch(updateEmployee(employee));
        }else{
            dispatch(addEmployee(employee));
        }
        setIsEditing(false);
    }

    const handleDelete = (id: string) => {
        dispatch(deleteEmployee(id));
    }

  return (
    <>
    <EmployeeForm onSubmit={handleSave} employeeObject={editingEmployee || null} />
    <hr />
    <h4  className='text-center text-primary'>Employee List</h4>
    <div className="table-responsive">  
        <table className="table table-bordered table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Phone</th>
                    <th className="text-center">Address</th>
                    <th className="text-center">City</th>
                    <th className="text-center">State</th>
                    <th className="text-center">Zip</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <EmployeeCard key={`emp${employee.id}`} employee={employee} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
                {employees.length === 0 && (
                    <tr>
                        <td colSpan={9} className="text-center">No employees found</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default EmployeeList