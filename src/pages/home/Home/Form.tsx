import { useCallback, useContext } from 'react';
import type { FormProps } from './interface';
import {
  checkText,
  clearFormText,
  clearText,
  foodNameText,
  searchFoodText,
} from './constants';
import { handleClearInput } from '@helpers';
import { ButtonTypes } from '@enums';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';

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
          className='bg-sky-light font-primary rounded-primary p-primary mt-2 text-sm transition-all placeholder:text-dark-blue hover:bg-sky-bright focus:bg-sky-bright sm:text-base lg:text-lg'
          type='text'
          id='food'
          placeholder='Search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <div className='w-full flex justify-between mt-4 gap-4'>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => {
            return;
          }}
          aria={searchFoodText}
          type={ButtonTypes.submit}
          myStyle='basis-8/12 text-sm p-primary bg-lavender-light hover:bg-lavender-bright focus:bg-lavender-bright sm:text-base'
        >
          {checkText}
        </Button>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => handleClearInput(setFoods, setInputValue)}
          aria={clearFormText}
          type={ButtonTypes.reset}
          myStyle='basis-4/12 text-sm p-primary bg-sunshine-light hover:bg-sunshine-bright focus:bg-sunshine-bright sm:text-base'
        >
          {clearText}
        </Button>
      </div>
    </form>
  );
}

export default Form;
