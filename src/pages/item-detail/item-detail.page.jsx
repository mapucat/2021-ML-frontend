import React, { useEffect, useState } from "react";

import Breadcrumb from '../../components/atoms/breadcrumb/breadcrumb';
import ItemDetail from '../../components/organisms/item-detail/item-detail';
import ItemsService from '../../services/items.service';
import { useParams } from 'react-router-dom';

const ItemDetailPage = () => {
  const [item, setItem ] = useState(null);
  const [categories, setCategories] = useState(null);
  const itemService = new ItemsService();
  
  const { id } = useParams();
  
  useEffect(() => {
    itemService.getItem(id).then((response) => {
      if (response.data) {
        setItem(response.data);
      }
    }).catch((error) => { console.log(error) });
  }, [ id ]);

  useEffect(() => {
    if (item) {
      setCategories(item.categories);
    }
  }, [ item ]);

  return (
    <section>
      { categories && <Breadcrumb list={ categories } /> }
      { item && <ItemDetail
        imgSrc={item.item.picture}
        condition={item.item.condition}
        soldQuantity={item.item.sold_quantity}
        name={item.item.title}
        price={item.item.price.amount}
        description={item.item.description}
      ></ItemDetail> }
    </section>
  );
};

export default ItemDetailPage;
