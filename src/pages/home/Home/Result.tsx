import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IsOpenContext from '../../../context/IsOpenContext';
import { ResultProps } from './interface';

function Result({ food, delay }: ResultProps) {
  const [IsOpen] = useContext(IsOpenContext);
  return (
    <li
      className={`w-full my-0.5 text-sm animate-fade-in ${delay} rounded-md transition-all bg-primary-200 sm:text-base lg:text-lg hover:bg-primary-300 hover:shadow-custom hover:-translate-y-0.5 focus:bg-primary-300 focus:shadow-custom first:rounded-t-primary last:rounded-b-primary motion-reduce:animate-none motion-reduce:transition-none`}
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
