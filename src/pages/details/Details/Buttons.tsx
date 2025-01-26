import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCalculator } from 'react-icons/bs';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { ButtonTypes } from '../../../data/Enums';
import Button from '../../../Components/ui/Button';
import { ADD_FOOD } from '../../../store/slices/food';
import IsOpenContext from '../../../context/IsOpenContext';
import { useAppDispatch } from '../../../store/hooks/hooks';
import type { ButtonsProps } from './interface';
import { addToCalculatorText, goBackText } from './constants';

function Buttons({
  foodInfo,
  setShowNotification,
  setNotificationMessage,
  name,
  showNotification,
}: ButtonsProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const dispatch = useAppDispatch();

  function addToCalculator() {
    dispatch(ADD_FOOD(foodInfo));
    setNotificationMessage(`${name} has been added to the calculator`);
    setShowNotification(!showNotification);
  }

  return (
    <div className='flex justify-between mt-4'>
      <Button
        tabIndex={IsOpen ? -1 : 0}
        callback={addToCalculator}
        aria={`Add ${name} to calculator`}
        type={ButtonTypes.submit}
        myStyle='basis-7/12 p-primary text-sm flex items-center justify-center bg-lavender-light hover:bg-lavender-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-lavender-bright sm:text-base'
      >
        <span className='mx-1'>{addToCalculatorText}</span>
        <BsCalculator />
      </Button>
      <Link
        tabIndex={IsOpen ? -1 : 0}
        to='/'
        className='basis-4/12 p-primary text-sm flex items-center justify-center rounded-full bg-sunshine-light transition-all hover:bg-sunshine-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sunshine-bright sm:text-base'
      >
        <span className='mx-1'>{goBackText}</span>
        {<RiArrowGoBackFill />}
      </Link>
    </div>
  );
}

export default Buttons;
