import './header.scss';

import { Link, Redirect, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Logo from '../../../assets/images/logo106x72.png';
import SearchInput from '../../molecules/search-input/search-input';
import { useForm } from 'react-hook-form';

const Header = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');
  const [search, setSearch] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      search: searchParam
    }
  });
  
  useEffect(() => {
    if (location.pathname === '/') {
      reset();
    }
  }, [location]);
  
  const onSubmit = (form) => {
    if (!!form.search && form.search.length !== 0) {
      setSearch(form.search);
      setTimeout(() => {
        setSearch('');
      }, 100);
    }    
  };

  return (
    <React.Fragment>
    <header className='o-header'>
      <div className='o-header__container'>
        <Link to="/" className='o-header__logo'>
          <img src={Logo} alt='Logo de mercado libre'></img>
        </Link>
        <form onSubmit={ handleSubmit(onSubmit) } className='o-header__form'>
          <SearchInput register={register} name='search'/>
        </form>
      </div>
    </header>
    { search && <Redirect to={`/items?search=${search}`} /> }
    </React.Fragment>
  );
};

export default Header;
