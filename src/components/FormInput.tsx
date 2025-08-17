import type { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';
import type { Employee } from '../types/employeeType';

type FormInputProps = {
    label: string;
    name: keyof Employee;
    type?: string;
    register: UseFormRegister<Employee>;
    error?: FieldError;
    validation?: RegisterOptions<Employee, keyof Employee>;
    className?: string;
}

const FormInput = ({ 
    label, 
    name, 
    type = 'text', 
    register, 
    error, 
    validation,
    className = 'col-md-6 mb-3'
}: FormInputProps) => {
    return (
        <div className={className}>
            <label htmlFor={name} className="form-label">{label}</label>
            <input
                className={`form-control ${error ? 'is-invalid' : ''}`}
                type={type}
                {...register(name, validation)}
            />
            {error && <div className="invalid-feedback">{error.message}</div>}
        </div>
    );
};

export default FormInput;
