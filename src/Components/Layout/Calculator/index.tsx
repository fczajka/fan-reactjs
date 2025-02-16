import Calculator from './Calculator';
import { useContext } from 'react';
import IsOpenContext from '@IsOpen';

function WrapperCalculator() {
  const [IsOpen, SetIsOpen] = useContext(IsOpenContext);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center py-12 z-20 bg-neutral-900/70 touch-none ${
        !IsOpen && 'hidden'
      }`}
    >
      <Calculator SetIsOpen={SetIsOpen} />
    </div>
  );
}

export default WrapperCalculator;
