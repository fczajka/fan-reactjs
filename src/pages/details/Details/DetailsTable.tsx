import { amountText, nameText, unitText } from './constants';
import { TableProps } from './interface';

function DetailsTable({ inputValue, foodInfo }: TableProps) {
  return (
    <table className='w-full'>
      <thead className='text-base bg-primary-200 sm:text-lg lg:text-xl'>
        <tr>
          <th className='text-left pl-4 py-2 rounded-tl-primary'>{nameText}</th>
          <th className='text-right px-4 py-2 sm:py-2'>
            {amountText(inputValue)}
          </th>
          <th className='text-right pr-4 py-2 rounded-tr-primary'>
            {unitText}
          </th>
        </tr>
      </thead>
      <tbody className='text-sm sm:text-base lg:text-lg'>
        {foodInfo.food.map((food) =>
          food.name === 'Name' ? (
            ''
          ) : food.name === 'Grams' ? (
            ''
          ) : food.name === 'Fiber' ? (
            <tr key={food.name} className='even:bg-primary-200'>
              <td className='text-left pl-4 py-2 rounded-bl-primary'>
                {food.name}
              </td>
              <td className='text-right px-4 py-2 sm:p-primary'>
                {food.value}
              </td>
              <td className='text-right pr-4 py-1 rounded-br-primary'>
                {food.unit}
              </td>
            </tr>
          ) : (
            <tr key={food.name} className='even:bg-primary-200'>
              <td className='text-left pl-4 py-2'>{food.name}</td>
              <td className='text-right px-4 py-2'>{food.value}</td>
              <td className='text-right pr-4 py-2'>{food.unit}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default DetailsTable;
