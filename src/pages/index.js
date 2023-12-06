import { useEffect } from 'react'
import { useRouter } from 'next/router'
 
// Current URL is '/'
function Page() {
  const router = useRouter()
 
  useEffect(() => {
    // Always do navigations after the first render
   
  }, [])
 
  useEffect(() => {
   setTimeout( ()=>{router.push('/login',undefined,{shallow:true})},2000)
  }, [])

  return (
    <>
    this will be redirected to login page without page refresh  </>
  )
}
 
export default Page