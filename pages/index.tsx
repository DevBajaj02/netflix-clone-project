import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import { getSession } from "next-auth/react"
import { NextPageContext } from "next/types"
import useMovieList from "@/hooks/useMovieList";
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
const Home = () => {
  const { data: movies = []}=useMovieList();
  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  )
}

export default Home;
