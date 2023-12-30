import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react"
import { NextPageContext } from "next/types"
// import { signOut } from "next-auth/react";
// import useCurrentUser from "@/hooks/useCurrentUser";

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
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}
