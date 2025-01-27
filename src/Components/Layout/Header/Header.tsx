import { FaHamburger } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { appName } from './constants';
import { ButtonTypes } from '@enums';
import IsOpenContext from '@IsOpen';
import { Button } from '@ui';

function Header() {
  const [IsOpen, SetIsOpen] = useContext(IsOpenContext);
  const [windowWidth] = useState<number>(window.innerWidth);

  return (
    <nav className='fixed bottom-0 w-full h-16 flex justify-around items-center bg-sunrise-soft shadow-custom z-10 lg:h-20 lg:shadow-none lg:justify-center lg:static'>
      <h1 className='font-secondary text-lg sm:text-2xl lg:text-3xl'>
        {appName}
      </h1>
      <Button
        tabIndex={IsOpen ? -1 : 0}
        callback={() => SetIsOpen(!IsOpen)}
        aria='Open calculator'
        type={ButtonTypes.button}
        myStyle='p-3 text-sm bg-lavender-light hover:bg-lavender-bright focus:bg-lavender-bright hover:-translate-y-0.5 sm:text-base lg:absolute lg:right-12 lg:p-primary lg:bg-sky-light lg:focus:bg-sky-bright lg:hover:bg-sky-bright'
      >
        {windowWidth >= 1024 ? 'Open calculator' : <FaHamburger />}
      </Button>
    </nav>
  );
}

export default Header;
