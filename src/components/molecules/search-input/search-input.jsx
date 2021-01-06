import './search-input.scss';

import Input from '../../atoms/input/input';
import Lens from '../../../assets/images/search36.png';
import React from 'react';

const SearchInput = ({ register, ...props }) => {
  return (
    <div className='m-search-input'>
      <Input
        placeholder='Nunca dejes de buscar'
        name='search'
        type='text'
        register={register}
        autocomplete={'off'}
      />
      <button className='m-search-input__button'>
        <img src={Lens} alt='Ícono de búsqueda'></img>
      </button>
    </div>
  );
};

export default SearchInput;
