import type { JSXChild } from '@interfaces';
import WrapperCalculator from './Calculator';
import Header from './Header/Header';
import WrapperModal from './Modal';

function Layout({ children }: JSXChild) {
  return (
    <div className='w-full min-h-screen font-primary text-slate-900 flex flex-col items-center bg-sunrise-soft'>
      <Header />
      <WrapperModal />
      <div className='w-full mt-4 p-4 sm:p-0 sm:w-110 lg:w-128'>{children}</div>
      <WrapperCalculator />
    </div>
  );
}

export default Layout;
