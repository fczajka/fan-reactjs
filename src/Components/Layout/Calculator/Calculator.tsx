import { useRef } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import type { InitialState } from '@interfaces';
import { useAppDispatch, useAppSelector } from '@storeHooks';
import type { TableHeadProps } from './interface';
import { Button } from '@ui';
import { ButtonTypes } from '@enums';
import { MdOutlineClose } from 'react-icons/md';
import { DELETE_ALL_FOODS } from '@storeSlices';
import { useCloseOutside } from '@useCloseOutside';

function Calculator({ IsOpen, SetIsOpen }: TableHeadProps) {
  const data: InitialState = useAppSelector((state) => state.sum);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useCloseOutside(ref, () => SetIsOpen(!IsOpen));

  return (
    <div
      ref={ref}
      className='relative w-11/12 h-full max-h-256 flex flex-col p-4 pb-14.5 rounded-3xl bg-sunrise-soft sm:w-120 md:w-144 lg:w-192'
    >
      <div className='flex justify-between items-center'>
        <h2 className='text-lg md:text-xl lg:text-2xl'>Summed Nutrients</h2>
        <Button
          tabIndex={IsOpen ? 0 : -1}
          callback={() => SetIsOpen(false)}
          aria='Close calculator'
          type={ButtonTypes.button}
          myStyle='rounded-full'
        >
          <MdOutlineClose className='text-xl p-0.5 bg-slate-900 text-sunrise-pale rounded-full md:text-2xl lg:text-3xl lg:p-1' />
        </Button>
      </div>
      <div className='w-full h-full z-20 mt-4 flex flex-col min-h-0'>
        <TableHead data={data} />
        <h2 className='my-4 md:text-lg lg:text-xl'>Added foods</h2>
        <TableBody data={data} />
      </div>
      <div className='absolute bottom-0 left-0 w-full p-2 rounded-b-primary border-t-slate-900 border-t-2'>
        <Button
          tabIndex={IsOpen ? 0 : -1}
          callback={() => dispatch(DELETE_ALL_FOODS())}
          aria='Close calculator'
          type={ButtonTypes.button}
          myStyle='w-full text-xs text-slate-900 rounded-full bg-lavender-bright px-4 py-2 md:text-sm lg:text-base'
        >
          Clear all foods
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
