import { useEffect } from 'react'
import type { Employee } from '../types/employeeType';
import { useForm } from 'react-hook-form';
import FormInput from './FormInput';
import Button from './Button';

type EmployeeFormProps = {
  onSubmit: (employee: Employee) => void;
  employeeObject: Employee | null;
}

const EmployeeForm = ({ onSubmit, employeeObject }: EmployeeFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<Employee>();

  useEffect(() => {
    if (employeeObject) {
      Object.keys(employeeObject).forEach((key) => {
        setValue(key as keyof Employee, employeeObject[key as keyof Employee]);
      });
    }
  }, [employeeObject, setValue]);

  const onSubmitForm = (data: Employee) => {
    if (!data.id) {
      data.id = new Date().getTime().toString();
    }
    onSubmit(data);
    reset({
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="row">
            <FormInput
                label="Name"
                name="name"
                register={register}
                error={errors.name}
                validation={{
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                }}
            />
            <FormInput
                label="Email"
                name="email"
                type="email"
                register={register}
                error={errors.email}
                validation={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                    }
                }}
            />
        </div>
        <div className="row">
            <FormInput
                label="Phone"
                name="phone"
                register={register}
                error={errors.phone}
                validation={{
                    required: 'Phone number is required',
                    pattern: {
                        value: /^\d{10}$/,
                        message: 'Phone number must be 10 digits'
                    }
                }}
            />
            <FormInput
                label="Address"
                name="address"
                register={register}
                error={errors.address}
                validation={{
                    required: 'Address is required',
                    minLength: { value: 5, message: 'Address must be at least 5 characters' }
                }}
            />
        </div>
        <div className="row">
            <FormInput
                label="City"
                name="city"
                register={register}
                error={errors.city}
                validation={{
                    required: 'City is required'
                }}
                className="col-md-4 mb-3"
            />
            <FormInput
                label="State"
                name="state"
                register={register}
                error={errors.state}
                validation={{
                    required: 'State is required'
                }}
                className="col-md-4 mb-3"
            />
            <FormInput
                label="ZIP"
                name="zip"
                register={register}
                error={errors.zip}
                validation={{
                    required: 'ZIP code is required',
                    pattern: {
                        value: /^\d{5}(-\d{4})?$/,
                        message: 'Invalid ZIP code format'
                    }
                }}
                className="col-md-4 mb-3"
            />
        </div>
        <div className="row">
            <div className="col-md-12 mb-3 text-center d-grid gap-2">
                <Button
                    type="submit"
                    variant="primary"
                    icon="fa-solid fa-floppy-disk"
                    fullWidth
                >
                    Save
                </Button>
            </div>
        </div>
    </form>
  )
}

export default EmployeeForm