import { getSession } from "next-auth/react"
import { NextPageContext } from "next/types"
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

// for protecting the route
export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);
  // checking if session exists
  if(!session){
    return{
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return{
    props: {}
  }
}
export default function Home() {
  const { data: user} = useCurrentUser();
  return (
    <>
    <h1 className="text-2xl text-green-500">Netflix Clone</h1>
    <p className="text-white">Logged in as: {user?.email}</p>
    <button className="h-10 w-full bg-white" onClick={()=>signOut()}>Logout</button>
    </>
  )
}
