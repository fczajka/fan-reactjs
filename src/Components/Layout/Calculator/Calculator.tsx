import { useContext, useEffect, useRef } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import type { InitialState } from '@interfaces';
import { handleResize } from '@helpers';
import IsOpenContext from '@IsOpen';
import { useAppSelector } from '@storeHooks';

function Calculator() {
  const data: InitialState = useAppSelector((state) => state.sum);
  const [IsOpen] = useContext(IsOpenContext);
  const vh = useRef(window.innerHeight * 0.01);

  useEffect(() => {
    handleResize(vh);
  }, []);

  return (
    <table
      className={`fixed w-60 top-0 z-20 h-screen overflow-hidden transition-all ease-out duration-300 delay-100 bg-sunrise-soft lg:w-80 motion-reduce:transition-none ${
        IsOpen ? '-left-0' : '-left-80'
      }`}
    >
      <TableHead data={data} />
      <TableBody data={data} />
    </table>
  );
}

export default Calculator;
