import React from 'react'
import { Countries } from '../components/Api/data';
import ItemCuisines from '../components/Item/ItemCuisines';

const Cuisines = () => {

  return (
    <div className="sub-page">
      <div className="sub-page__title">
        <span>Collection</span>
      </div>
      <div className="sub-page__container">
        {Countries.map((item) => (
          <ItemCuisines item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cuisines