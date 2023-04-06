import { useRouter } from 'next/router'
import {Form} from "../features/auth";


const SignInPage = () => {
  const currentPage = useRouter().pathname
  return (
    <>
      <Form currentPage={currentPage} />
    </>
  )
}

export default SignInPage
