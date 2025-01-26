import { useCallback, useContext } from 'react';
import Button from '../../../Components/ui/Button';
import { handleClearInput } from '../../../helpers/helpers';
import IsOpenContext from '../../../context/IsOpenContext';
import { ButtonTypes } from '../../../data/Enums';
import type { FormProps } from './interface';
import {
  checkText,
  clearFormText,
  clearText,
  foodNameText,
  searchFoodText,
} from './constants';

function Form({
  inputValue,
  setInputValue,
  setIsClicked,
  setFoods,
}: FormProps) {
  const [IsOpen] = useContext(IsOpenContext);

  const requestFood = useCallback(() => {
    setIsClicked(true);
  }, [setIsClicked]);

  return (
    <form
      className='w-full'
      onSubmit={(e) => {
        e.preventDefault();
        requestFood();
      }}
    >
      <label
        htmlFor='food'
        className='flex flex-col text-lg font-secondary sm:text-xl lg:text-2xl'
      >
        {foodNameText}
        <input
          tabIndex={IsOpen ? -1 : 0}
          className='bg-sky-light font-primary rounded-primary p-primary mt-2 text-sm transition-all placeholder:text-dark-blue hover:bg-sky-bright hover:shadow-custom hover:-translate-y-0.5 focus:bg-sky-bright motion-reduce:transition-none sm:text-base lg:text-lg'
          type='text'
          id='food'
          placeholder='Search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <div className='w-full flex justify-between mt-4'>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => {
            return;
          }}
          aria={searchFoodText}
          type={ButtonTypes.submit}
          myStyle='basis-7/12 text-sm p-primary bg-lavender-light hover:bg-lavender-bright hover:-translate-y-0.5 focus:bg-lavender-bright sm:text-base'
        >
          {checkText}
        </Button>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => handleClearInput(setFoods, setInputValue)}
          aria={clearFormText}
          type={ButtonTypes.reset}
          myStyle='basis-4/12 text-sm p-primary bg-sunshine-light hover:bg-sunshine-bright hover:-translate-y-0.5 focus:bg-sunshine-bright sm:text-base'
        >
          {clearText}
        </Button>
      </div>
    </form>
  );
}

export default Form;
