import { useRouter } from 'next/router'
import {Form} from "../features/auth";


const SignUpPage = () => {
  const currentPage = useRouter().pathname
  return (
    <>
      <Form currentPage={currentPage} />
    </>
  )
}

export default SignUpPage
