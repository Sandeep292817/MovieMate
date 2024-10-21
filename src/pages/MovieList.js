
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const MovieList = ({apiPath,title}) => {

  const {data :movies } = useFetch(apiPath);
  useTitle(title);
  console.log("from the MovieData"+movies);
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          {
            movies.map((movie)=>{
             return <Card key={movie.id} movie={movie}/>
            })
          }
        </div>
      </section>
    </main>
  )
}
