import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';
import { RiArrowGoBackFill } from 'react-icons/ri';
import type { ButtonsProps } from './interface';
import { addToCalculatorText, goBackText } from './constants';
import { ButtonTypes } from '@enums';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';
import { useAppDispatch } from '@storeHooks';
import { ADD_FOOD } from '@storeSlices';

function Buttons({ foodInfo, name }: ButtonsProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const dispatch = useAppDispatch();

  return (
    <div className='flex justify-between mt-4'>
      <Button
        tabIndex={IsOpen ? -1 : 0}
        callback={() => dispatch(ADD_FOOD(foodInfo))}
        aria={`Add ${name} to calculator`}
        type={ButtonTypes.submit}
        myStyle='basis-7/12 p-primary text-sm flex items-center justify-center bg-lavender-light hover:bg-lavender-bright focus:bg-lavender-bright sm:text-base'
      >
        <span className='mx-1'>{addToCalculatorText}</span>
        <BsCalculator />
      </Button>
      <Link
        tabIndex={IsOpen ? -1 : 0}
        to='/'
        className='basis-4/12 p-primary text-sm flex items-center justify-center rounded-full bg-sunshine-light transition-all hover:bg-sunshine-bright focus:bg-sunshine-bright sm:text-base'
      >
        <span className='mx-1'>{goBackText}</span>
        {<RiArrowGoBackFill />}
      </Link>
    </div>
  );
}

export default Buttons;
