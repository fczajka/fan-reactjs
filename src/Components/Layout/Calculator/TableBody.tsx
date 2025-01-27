import { TiDelete } from 'react-icons/ti';
import React, { useContext } from 'react';
import type { TableBodyProps } from './interface';
import { deleteText } from './constants';
import IsOpenContext from '@IsOpen';
import { useAppDispatch } from '@storeHooks';
import { DELETE_FOOD } from '@storeSlices';

function TableBody({ data }: TableBodyProps) {
  const [IsOpen] = useContext(IsOpenContext);
  const dispatch = useAppDispatch();
  return (
    <tbody className='w-full h-calc-mobile flex flex-col overflow-y-auto overflow-x-hidden lg:h-calc-desktop'>
      {data.foods.map((foodInfo) =>
        foodInfo.food.map((nutrients) =>
          !nutrients.unit ? (
            <tr key={nutrients.name} className='flex'>
              <td className='text-sm text-right basis-full px-2 py-2 bg-sky-pale lg:text-base'>
                {nutrients.value}
              </td>
            </tr>
          ) : nutrients.name === 'Grams' ? (
            <React.Fragment key={nutrients.name}>
              <tr className='flex'>
                <td className='text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base'>
                  {nutrients.name}
                </td>
                <td className='text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base'>
                  {`${nutrients.value} ${nutrients.unit}`}
                </td>
              </tr>
              <tr className='flex justify-center'>
                <td className='basis-full flex p-0'>
                  <button
                    tabIndex={IsOpen ? 0 : -1}
                    onClick={() => {
                      dispatch(DELETE_FOOD(foodInfo));
                    }}
                    className='flex text-sm items-center py-2 justify-center basis-full transition-all cursor-pointer hover:scale-110 hover:bg-lavender-bright hover:shadow-custom focus:bg-lavender-bright motion-reduce:transition-none lg:text-base'
                    aria-label='Delete food from calculator'
                  >
                    {deleteText(foodInfo.food[0].value)}
                    <TiDelete />
                  </button>
                </td>
              </tr>
            </React.Fragment>
          ) : (
            <tr key={nutrients.name} className='flex'>
              <td className='text-sm text-left basis-3/5 px-2 py-0.5 lg:text-base'>
                {nutrients.name}
              </td>
              <td className='text-sm text-right basis-2/5 px-2 py-0.5 lg:text-base'>
                {`${nutrients.value} ${nutrients.unit}`}
              </td>
            </tr>
          ),
        ),
      )}
    </tbody>
  );
}

export default TableBody;
