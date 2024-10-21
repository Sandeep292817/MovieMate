import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  console.log("From Search File" +queryTerm);
  const {data :movies } = useFetch(apiPath, queryTerm);
  useTitle(`serach result for ${queryTerm}/cinemate`);
  
  return (
    <main>
    <section className='py-7'>
      <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No Result Found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
    </section>
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
