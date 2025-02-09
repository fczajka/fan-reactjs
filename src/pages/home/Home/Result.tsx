import { useContext } from 'react';
import { Link } from 'react-router-dom';
import type { ResultProps } from './interface';
import IsOpenContext from '@IsOpen';

function Result({ food, delay }: ResultProps) {
  const [IsOpen] = useContext(IsOpenContext);
  return (
    <li
      className={`w-full my-0.5 text-sm animate-fade-in ${delay} rounded-md transition-all bg-sky-light sm:text-base lg:text-lg hover:bg-sky-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sky-bright focus:shadow-custom first:rounded-t-primary last:rounded-b-primary motion-reduce:animate-none motion-reduce:transition-none`}
    >
      <Link
        className='w-full block p-primary rounded-[inherit]'
        to='/details'
        state={food}
        tabIndex={IsOpen ? -1 : 0}
      >
        {food.description}
      </Link>
    </li>
  );
}

export default Result;
