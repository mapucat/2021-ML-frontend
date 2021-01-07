import './item.scss';

import CurrencyFormat from 'react-currency-format';
import FreeShippingImg from '../../../assets/images/shipping18.png';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({ id, imgSrc, price, isFreeshipping, name, city }) => {
  return (
    <article className='m-item'>
      <Link to={`/items/${id}`} className='m-item__img'>
        <img src={imgSrc} alt={name}></img>
      </Link>
      <Link to={`/items/${id}`} className='m-item__detail'>
        <h2 className='m-item__price'> 
          <CurrencyFormat 
            value={price} 
            displayType={'text'} 
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={'$ '}/> 
          { isFreeshipping ? <img src={FreeShippingImg} alt='Envío gratis'></img> : null } 
        </h2>
        <h3 className='m-item__name'>{ name }</h3>
      </Link>
      <p className='m-item__city'>{city}</p>
    </article>
  );
};

export default Item;
