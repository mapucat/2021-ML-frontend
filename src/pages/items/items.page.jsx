import './items.page.scss';

import React, { useEffect, useState } from 'react';

import Breadcrumb from '../../components/atoms/breadcrumb/breadcrumb';
import Item from '../../components/molecules/item/item';
import ItemsService from '../../services/items.service';
import { useLocation } from 'react-router-dom';

const ItemsPage = () => {
  const [items, setItems ] = useState(null);
  const [categories, setCategories] = useState(null);
  const itemService = new ItemsService();
  
  const search = new URLSearchParams(useLocation().search).get('search');
  
  useEffect(() => {
    itemService.getItems(search).then((response) => {
      if (response.data) {
        setItems(response.data);
      }
    }).catch((error) => { console.dir(error) }) 
  }, [ search ]);

  useEffect(() => {
    if (items) {
      setCategories(items.categories);
    }
  }, [ items ]);

  return (
    <section className='p-items-page'>
      { categories && <Breadcrumb list={ categories } /> }
      <div className='p-items-page__list'>
        { 
          items ? 
            items.items.map((item, index) => 
              <React.Fragment key={item.item.id}>
                <Item 
                  id={item.item.id} 
                  imgSrc={item.item.picture}
                  price={item.item.price.amount}
                  isFreeshipping={item.item.free_shipping}
                  name={item.item.title}
                  city={item.item.city_name}
                />
                { index !== items.items.length - 1 ? 
                  <hr className='p-items-page__divider'/> : null }
              </React.Fragment>
              ) : null }
      </div>
    </section>
  );
};

export default ItemsPage;
