import './header.scss';

import ItemsService from '../../../services/items.service';
import Logo from '../../../assets/images/logo106x72.png';
import React from 'react';
import { Redirect } from 'react-router-dom';
import SearchInput from '../../molecules/search-input/search-input';
import { useForm } from 'react-hook-form';

const Header = () => {
  const itemsService = new ItemsService();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ search }) => {
    const data = null;
    if (!!search && search.length !== 0) {
      itemsService.getItems(search).then((response) => {
        if (!!response.data) {
          data = response.data;
        }
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        // Redireccionar
      });
    }
  };

  return (
    <header className='o-header'>
      <div className='o-header__container'>
        <img className='o-header__logo' src={Logo} alt='Logo de mercado libre'></img>
        <form onSubmit={ handleSubmit(onSubmit) } className='o-header__form'>
          <SearchInput register={register}/>
        </form>
      </div>
    </header>
  );
};

export default Header;
