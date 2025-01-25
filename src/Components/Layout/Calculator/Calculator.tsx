import { useContext, useEffect, useRef } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import { InitialState } from '../../../data/Interfaces';
import { handleResize } from '../../../helpers/helpers';
import IsOpenContext from '../../../context/IsOpenContext';
import { useAppSelector } from '../../../store/hooks/hooks';

function Calculator() {
  const data: InitialState = useAppSelector((state) => state.sum);
  const [IsOpen] = useContext(IsOpenContext);
  const vh = useRef(window.innerHeight * 0.01);

  useEffect(() => {
    handleResize(vh);
  }, []);

  return (
    <table
      className={`fixed w-60 top-0 z-20 h-screen overflow-hidden transition-all ease-out duration-300 delay-100 bg-secondary-50 lg:w-80 motion-reduce:transition-none ${
        IsOpen ? '-left-0' : '-left-80'
      }`}
    >
      <TableHead data={data} />
      <TableBody data={data} />
    </table>
  );
}

export default Calculator;
