import { Controller } from 'react-hook-form'

import styles from './EmailInput.module.css'

interface EmailInputProps {
  label: string
  placeholder: string
  value?: string
  name: string
  control: any
  rules: any
  errors: any
  onChange?(): void
}

const EmailInput = ({
  label,
  placeholder,
  value,
  name,
  control,
  rules,
  onChange,
  errors,
}: EmailInputProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            type='email'
            onChange={onChange}
            value={value}
            name={name}
            placeholder={placeholder}
            autoComplete='off'
          />
        )}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  )
}

export default EmailInput
