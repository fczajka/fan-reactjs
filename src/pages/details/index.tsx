import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { foodInfoFactory } from '@helpers';
import DetailsTable from './Details/DetailsTable';
import GramsControls from './Details/GramsControls';
import Buttons from './Details/Buttons';
import { Transition } from '@ui';
import type { RootState } from '@store';
import type { FoodInfo, FoodResponse } from '@interfaces';

function Details() {
  const [inputValue, setInputValue] = useState<number>(100);
  const location = useLocation();
  const data = location.state as FoodResponse;
  const storeData = useSelector((state: RootState) => state);

  function setGrams(inputValue: number) {
    if (inputValue > 5000) return;

    if (inputValue < 0) return;

    setInputValue(inputValue);
  }

  const foodInfo: FoodInfo = foodInfoFactory(storeData, data, inputValue);

  return (
    <Transition>
      <h2 className='text-center font-secondary text-lg pb-4 sm:text-xl lg:text-2xl'>
        {data.description}
      </h2>
      <DetailsTable inputValue={inputValue} foodInfo={foodInfo} />
      <GramsControls inputValue={inputValue} setGrams={setGrams} />
      <Buttons foodInfo={foodInfo} name={data.description} />
    </Transition>
  );
}

export default Details;
