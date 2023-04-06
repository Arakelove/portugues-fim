import { useState } from 'react'

import styles from '../common.module.css'

interface PasswordInputProps {
  label: string
  placeholder: string
  error: string
  handlePasswordChange(value: string): void
}

const PasswordInput = ({
  label,
  placeholder,
  handlePasswordChange,
  error,
}: PasswordInputProps) => {
  const [password, setPassword] = useState<string>('')
  return (
    <div className={styles['container']}>
      <label className={styles['label']} htmlFor='password'>
        {label}
      </label>
      <input
        className={styles['input']}
        id='password'
        type='password'
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value
          setPassword(value)
          handlePasswordChange(value)
        }}
        value={password}
        autoComplete='off'
      />
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  )
}

export default PasswordInput
