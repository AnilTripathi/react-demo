import React from 'react'
import type { Employee } from '../types/employeeType'   

type EmployeeCardProps = {
  employee: Employee,
  onEdit: (employee: Employee) => void,
  onDelete: (id: string) => void
}

const EmployeeCard = ({ employee, onEdit, onDelete }: EmployeeCardProps) => {
  return (
    <tr>
        <td className="text-center">{employee.name}</td>
        <td className="text-center">{employee.email}</td>
        <td className="text-center">{employee.phone}</td>
        <td className="text-center">{employee.address}</td>
        <td className="text-center">{employee.city}</td>
        <td className="text-center">{employee.state}</td>
        <td className="text-center">{employee.zip}</td>
        <td className="text-center"><button className="btn btn-primary" onClick={() => onEdit(employee)}><i className="fa-solid fa-pen-to-square me-2"></i>Edit</button></td>
        <td className="text-center"><button className="btn btn-danger" onClick={() => onDelete(employee.id)}><i className="fa-solid fa-trash me-2"></i>Delete</button></td>
    </tr>
  )
}

export default EmployeeCard