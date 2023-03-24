import Link from 'next/link'

import { EmailInput, PasswordInput } from '@/shared/CustomInputs'
import { useState } from 'react'

import styles from './Form.module.css'
import { SIGN_IN, SIGN_UP } from '@/shared/endpoints'

interface PropTypes {
  currentPage: string
}

const Form = ({ currentPage }: PropTypes) => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  //
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (email.trim() === '') {
      setEmailError('This field is required')
    }
    if (password.trim() === '') {
      setPasswordError('This field is required')
    }
  }

  const validateEmail = (value: string) => {
    setEmail(value)
    if (value.trim() !== '') {
      if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setEmailError('Please enter a valid email address')
      } else {
        setEmailError('')
      }
    } else {
      setEmailError('This field is required')
    }
  }

  const validatePassword = (value: string) => {
    setPassword(value)
    if (value.trim() !== '') {
      setPasswordError('')
    } else {
      setPasswordError('This field is required')
    }
    console.log(value)
  }

  const authTypePage = `Sign ${currentPage == SIGN_IN ? 'In' : 'Up'}`

  return (
    <div className={styles['container']} onSubmit={handleSubmit}>
      <h3 className={styles['form-header']}>{authTypePage}</h3>
      <form method='post'>
        <EmailInput
          placeholder='Enter email'
          label='Email:'
          handleEmailChange={validateEmail}
          error={emailError}
        />
        <PasswordInput
          placeholder='Enter password'
          label='Password:'
          handlePasswordChange={validatePassword}
          error={passwordError}
        />
        <div className={styles['hint-message']}>
          Don't have an account?{' '}
          <Link href={currentPage === SIGN_IN ? SIGN_UP : SIGN_IN}>
            {`Sign ${currentPage == SIGN_IN ? 'Up' : 'In'}`}
          </Link>
        </div>
        <button className={styles['submit-button']} type='submit'>
          {authTypePage}
        </button>
      </form>
    </div>
  )
}

export default Form
