import { useContext } from 'react';
import type { ResultProps } from './interface';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';
import { ButtonTypes } from '@enums';
import { MdOutlineChevronRight } from 'react-icons/md';
import ExpandableDetails from './ExpandableDetails';

function Result({ food, delay, expandedId, setExpandedId }: ResultProps) {
  const [IsOpen] = useContext(IsOpenContext);

  return (
    <li
      className={`w-full my-0.5 animate-fade-in ${delay} rounded-md transition-all bg-sky-light hover:shadow-custom hover:-translate-y-0.5 focus:shadow-custom first:rounded-t-primary last:rounded-b-primary motion-reduce:animate-none motion-reduce:transition-none`}
    >
      <div className='p-4 rounded-[inherit] overflow-hidden'>
        <div className='flex justify-between items-center'>
          <h2 className='text-sm sm:text-base lg:text-lg'>
            {food.description}
          </h2>
          <Button
            myStyle=''
            aria={`Open ${food.description} details`}
            tabIndex={IsOpen ? -1 : 0}
            callback={() =>
              setExpandedId(expandedId === food.fdcId ? null : food.fdcId)
            }
            type={ButtonTypes.button}
          >
            <MdOutlineChevronRight
              className={`${expandedId === food.fdcId && 'transform rotate-90'} bg-sky-bright text-slate-900 text-2xl rounded-full`}
            />
          </Button>
        </div>
        <ExpandableDetails food={food} expandedId={expandedId} />
      </div>
    </li>
  );
}

export default Result;
