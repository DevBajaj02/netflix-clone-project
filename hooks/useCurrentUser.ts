import useSWR from "swr";
// for fetching data, developed by Vercel
// similar to react query
import fetcher from "@/lib/fetcher";

const useCurrentUser =()=> {
    const {data, error, isLoading, mutate}=useSWR('/api/current', fetcher);
    // only fetches data first time we use the '/api/current', no matter where we use later
    // no fetching later
    // hence no requirement of Redux, other state management tools

    return{
        data,
        error,
        isLoading,
        mutate
    }
};

export default useCurrentUser;