import React, { useEffect, useState } from 'react'
import type { Employee } from '../types/employeeType';

type EmployeeFormProps = {
  onSubmit: (employee: Employee) => void;
  employeeObject: Employee | null;
}

const EmployeeForm = ({ onSubmit, employeeObject }: EmployeeFormProps) => {
  const [employee, setEmployee] = useState<Employee>({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })

  useEffect(() => {
    if(employeeObject){
        setEmployee(employeeObject);
    }
  }, [employeeObject]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value } as Employee);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //check if employee object is blank then show error message
    if (employee?.name === '' || employee?.email === '' || employee?.phone === '' || employee?.address === '' || employee?.city === '' || employee?.state === '' || employee?.zip === '') {
        alert('Please fill in all fields');
        return;
    }
    if(employee?.id === ''){
        employee.id = new Date().getTime().toString();
    }
    onSubmit(employee as Employee);
    setEmployee({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input className="form-control" type="text" name="name" value={employee?.name} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input className="form-control" type="email" name="email" value={employee?.email} onChange={handleChange} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input className="form-control" type="text" name="phone" value={employee?.phone} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input className="form-control" type="text" name="address" value={employee?.address} onChange={handleChange} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input className="form-control" type="text" name="city" value={employee?.city} onChange={handleChange} />
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <input className="form-control" type="text" name="state" value={employee?.state} onChange={handleChange} />
            </div>
            <div className="col-md-4 mb-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input className="form-control" type="text" name="zip" value={employee?.zip} onChange={handleChange} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-3 text-center d-grid gap-2">
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk me-2"></i> Save</button>
            </div>
        </div>
    </form>
  )
}

export default EmployeeForm