import { useContext } from 'react';
import { Link } from 'react-router-dom';
import type { ExpandableDetailsProps } from './interface';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';
import { ButtonTypes } from '@enums';
import { foodInfoFactory } from '@helpers';
import { ADD_FOOD } from '@storeSlices';
import { useSelector } from 'react-redux';
import type { RootState } from '@store';
import type { FoodInfo } from '@interfaces';
import { useAppDispatch } from '@storeHooks';
import { mainNutrientsIds } from './constants';
import { motion } from 'framer-motion';
import { getNutrientDisplayName } from './utils';

function ExpandableDetails({ food, expandedId }: ExpandableDetailsProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const dispatch = useAppDispatch();
  const storeData = useSelector((state: RootState) => state);

  const handleAddToCalculator = () => {
    const foodInfo: FoodInfo = foodInfoFactory(storeData, food, 100);
    dispatch(ADD_FOOD(foodInfo));
  };

  return (
    <motion.div
      initial={false}
      animate={{ height: expandedId === food.fdcId ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className='text-xs sm:text-sm lg:text-base overflow-hidden'
    >
      <ul className='grid grid-cols-2 gap-4 my-4'>
        {food.foodNutrients
          .filter((_, index) => mainNutrientsIds.includes(index))
          .map((nutrient) => (
            <li
              key={nutrient.nutrientId}
              className='flex justify-between items-center'
            >
              <span>{getNutrientDisplayName(nutrient.nutrientName)}</span>
              <span>
                {nutrient.value} {nutrient.unitName.toLowerCase()}
              </span>
            </li>
          ))}
      </ul>
      <div className='flex justify-between'>
        <Link
          className='px-2 py-1 rounded-full bg-sky-bright lg:px-4 lg:py-2'
          to='/details'
          state={food}
          tabIndex={IsOpen ? -1 : 0}
        >
          View Details
        </Link>
        <Button
          myStyle='px-2 py-1 bg-sky-bright lg:px-4 lg:py-2'
          callback={handleAddToCalculator}
          aria={`Add ${food.description} to calculator`}
          type={ButtonTypes.button}
          tabIndex={IsOpen ? -1 : 0}
        >
          Add to calculator
        </Button>
      </div>
    </motion.div>
  );
}

export default ExpandableDetails;
