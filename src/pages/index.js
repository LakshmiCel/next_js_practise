import HomeLayout from "../Components/HomeLayout"



export default function Home() {
  return (
  
   <div>
    This is home content
   </div>
  )
}
Home.getLayout=function getLayout(page){
return <HomeLayout>{page}</HomeLayout>
}
