import type { Employee } from '../types/employeeType'
import Button from './Button'

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
        <td className="text-center">
            <Button
                variant="primary"
                onClick={() => onEdit(employee)}
                icon="fa-solid fa-pen-to-square"
            >
                Edit
            </Button>
        </td>
        <td className="text-center">
            <Button
                variant="danger"
                onClick={() => onDelete(employee.id)}
                icon="fa-solid fa-trash"
            >
                Delete
            </Button>
        </td>
    </tr>
  )
}

export default EmployeeCard