import { useState,useEffect } from "react"


export const useFetch = (apiPath,queryTerm="") => {
    const[data,setData] = useState([]);
    console.log("from the fetchAPI"+apiPath);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    console.log("The URL is "+url);
    useEffect(()=>{
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          //console.log(data);
          setData(json.results);
         // console.log("The Movie Data is "+movies);
        }
        fetchMovies();
      },[url]);
  return {data}
  
}
