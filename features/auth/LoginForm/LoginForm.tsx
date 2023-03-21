import { EmailInput, PasswordInput } from '@/shared/CustomInputs'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    // check data validation
    console.log(data, errors)
  }

  const passwordValidation = {
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
    },
    required: 'Password is required',
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInput
        errors={errors.email}
        placeholder='Enter email'
        label='Email'
        name='email'
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },
        }}
      />
      <PasswordInput
        errors={errors.password}
        placeholder='Enter password'
        label='Password'
        name='password'
        control={control}
        rules={passwordValidation}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LoginForm
