// import useSWR from "swr";
// import fetcher from "@/lib/fetcher";

// const useMovieList = ()=>{
//     const {data, error, isLoading } =useSWR('/api/movies/index',fetcher, {
//         revalidateIfStale: false,
//         revalidateOnFocus: false,
//         revalidateOnReconnect: false
//     })
//     console.log(data,888)
//     console.log(error,888)
//     return{data,
//          error, 
//          isLoading
//         }
// };

// export default useMovieList;

import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const useMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(error,"hihi")
  return {
    data,
    error,
    isLoading
  }
};

export default useMovies;