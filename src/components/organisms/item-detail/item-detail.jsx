import './item-detail.scss';

import CurrencyFormat from 'react-currency-format';
import React from 'react';

const ItemDetail = ({ 
    imgSrc, 
    condition, 
    soldQuantity, 
    name, 
    price, 
    description  }) => {
  return (
    <article className='o-item-detail'>
      <div className='o-item-detail__main'>
        <img className='o-item-detail__img' src={imgSrc} alt={name}></img>
        <div className='o-item-detail__description'>
          <h4>Descripción del producto</h4>
          <p>{ description }</p>
        </div>
      </div>
      <div className='o-item-detail__basic-info'>
        <p>{ `${condition} - ${soldQuantity} vendidos` }</p>
        <h3 className='o-item-detail__name'>{ name }</h3>
        <h2 className='o-item-detail__price'> 
          <CurrencyFormat 
            value={price} 
            displayType={'text'} 
            thousandSeparator={'.'}
            decimalSeparator={','}
            decimalScale={0}
            prefix={'$ '}/> 
        </h2>
        <button className='o-item-detail__buy-button'>
          Comprar
        </button>
      </div>
    </article>
  );
};

export default ItemDetail;
