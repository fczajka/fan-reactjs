import { useContext, useState } from 'react';
import type { GramsControlsProps } from './interface';
import {
  changableValues,
  decreaseGransText,
  increaseGransText,
  setValueToChangeGramsText,
} from './constants';
import { ButtonTypes } from '@enums';
import type { ChangeValues } from '@types';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';

function GramsControls({ inputValue, setGrams }: GramsControlsProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const [changeValue, setChangeValue] = useState<ChangeValues>(1);

  return (
    <div>
      <h3 className='text-base text-center my-2 lg:text-lg'>Grams:</h3>
      <div className='flex justify-center items-center'>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => setGrams(inputValue - changeValue)}
          aria={decreaseGransText}
          type={ButtonTypes.submit}
          myStyle='basis-12 h-10 bg-sky-light text-xl hover:bg-sky-bright focus:bg-sky-bright lg:w-12 lg:h-12 lg:text-2xl'
        >
          -
        </Button>
        <div className='basis-12 text-center'>{inputValue}</div>
        <Button
          tabIndex={IsOpen ? -1 : 0}
          callback={() => setGrams(inputValue + changeValue)}
          aria={increaseGransText}
          type={ButtonTypes.submit}
          myStyle='basis-12 h-10 bg-sky-light text-xl hover:bg-sky-bright focus:bg-sky-bright lg:w-12 lg:h-12 lg:text-2xl'
        >
          +
        </Button>
      </div>
      <h3 className='text-base text-center my-2 lg:text-lg'>
        {setValueToChangeGramsText}
      </h3>
      <ul className='flex justify-between items-center'>
        {changableValues.map((value: ChangeValues) => (
          <li key={value}>
            <Button
              tabIndex={IsOpen ? -1 : 0}
              callback={() => {
                setChangeValue(value);
              }}
              aria={`Set value that changes grams to ${value}`}
              type={ButtonTypes.submit}
              myStyle={`w-10 h-10 text-sm bg-sky-light hover:bg-sky-bright focus:bg-sky-bright sm:text-base lg:w-12 lg:h-12 lg:text-lg ${
                changeValue === value && 'bg-sky-bright'
              }`}
            >
              {value}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GramsControls;
