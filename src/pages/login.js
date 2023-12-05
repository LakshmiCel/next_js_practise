import LoginLayout from "../Components/LoginLayout"
export default function Login() {
    return (
     <div>
      This is login content
     </div>
    )
  }
  
  Login.getLayout=function getLayout(page){
   return <LoginLayout>{page}</LoginLayout>
  }
  