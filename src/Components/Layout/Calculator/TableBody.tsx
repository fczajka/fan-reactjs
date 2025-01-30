import { useContext } from 'react';
import type { TableBodyProps } from './interface';
import IsOpenContext from '@IsOpen';
import { useAppDispatch } from '@storeHooks';
import { DELETE_FOOD } from '@storeSlices';
import { Button } from '@ui';
import { ButtonTypes } from '@enums';
import { MdOutlineClose } from 'react-icons/md';

function TableBody({ data }: TableBodyProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const dispatch = useAppDispatch();

  return (
    <ul className='w-full flex flex-col flex-1 gap-4 pb-2 overflow-y-scroll overflow-hidden'>
      {data.foods.map((foodInfo) => (
        <li
          className='grid grid-cols-2 gap-4 bg-sky-pale rounded-primary p-4'
          key={foodInfo.id}
        >
          {foodInfo.food.map((nutrients) =>
            nutrients.name === 'Name' ? (
              <div className='col-span-2 flex justify-between items-center gap-0.5 lg:gap-4'>
                <h3 className='text-sm lg:text-lg'>{nutrients.value}</h3>
                <Button
                  tabIndex={IsOpen ? 0 : -1}
                  callback={() => {
                    dispatch(DELETE_FOOD(foodInfo));
                  }}
                  aria='Close calculator'
                  type={ButtonTypes.button}
                  myStyle='rounded-full'
                >
                  <MdOutlineClose className='text-lg p-0.5 bg-slate-900 text-sunrise-pale rounded-full lg:text-2xl lg:p-1' />
                </Button>
              </div>
            ) : (
              <div
                className={`flex justify-between items-center text-xs ${nutrients.name === 'Grams' && 'col-span-2'} lg:text-base`}
              >
                <div>{nutrients.name}</div>
                <div>
                  {nutrients.value} {nutrients.unit}
                </div>
              </div>
            ),
          )}
        </li>
      ))}
    </ul>
  );
}

export default TableBody;
