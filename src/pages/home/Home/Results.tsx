import { useReducedMotion } from 'framer-motion';
import Result from './Result';
import Loader from './Loader';
import type { ResultsProps } from './interface';
import { displayLoadingCircle } from './utils';
import { delays } from './constants';
import type { FoodResponse } from '@interfaces';
import { useState } from 'react';

function Results({ foods, counter, isClicked }: ResultsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (displayLoadingCircle({ counter, isClicked, shouldReduceMotion }))
    return <Loader />;

  return (
    <ul className='w-full my-4 mb-20 lg:mb-0'>
      {foods.map((food: FoodResponse, index: number) => (
        <Result
          key={food.fdcId}
          food={food}
          delay={delays[index]}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
        />
      ))}
    </ul>
  );
}

export default Results;
