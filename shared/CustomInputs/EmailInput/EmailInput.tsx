import { useState } from 'react'

import styles from '../common.module.css'

interface EmailInputProps {
  label: string
  placeholder: string
  error: string
  handleEmailChange(value: string): void
}

const EmailInput = ({
  label,
  placeholder,
  error,
  handleEmailChange,
}: EmailInputProps) => {
  const [email, setEmail] = useState<string>('')

  return (
    <div className={styles['container']}>
      <label className={styles['label']} htmlFor='email'>
        {label}
      </label>
      <input
        className={styles['input']}
        type='text'
        value={email}
        id='email'
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value
          setEmail(value)
          handleEmailChange(value)
        }}
        autoComplete='off'
      />
      {error && <p className={styles['error-message']}>{error}</p>}
    </div>
  )
}

export default EmailInput
