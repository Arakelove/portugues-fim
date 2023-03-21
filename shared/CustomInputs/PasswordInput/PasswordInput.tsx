import { Controller } from 'react-hook-form'

import styles from './PasswordInput.module.css'

interface PasswordInputProps {
  label: string
  placeholder: string
  value?: string
  name: string
  control: any
  rules: any
  errors: any
  onChange?(): void
}

const PasswordInput = ({
  label,
  placeholder,
  value,
  name,
  control,
  rules,
  onChange,
  errors,
}: PasswordInputProps) => {
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
            type='password'
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  )
}

export default PasswordInput
