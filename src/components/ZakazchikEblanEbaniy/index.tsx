import React from 'react';
import styles from './index.module.scss';

const data = [
  {
    img: '',
    title: 'Bitcoin (BTC)',
    price: 0,
    percentages: 0,
  },
];

const ZakazchikEblanEbaniy = () => {
  return (
    <div className='list'>
      {data.map(el => (
        <div className='item'>
          <img src={el.img} alt='' />
          <span>{el.title}</span>
          <span>$ {el.price}</span>
          <span>-{el.percentages}%</span>
        </div>
      ))}
    </div>
  );
};

export default ZakazchikEblanEbaniy;
