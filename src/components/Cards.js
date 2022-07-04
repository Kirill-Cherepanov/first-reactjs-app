import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import images from './Images';

const cardInfo = [
  {
    src: images['img-9.jpg'],
    text: 'Explore the waterfall deep inside the Amazon jungle',
    label: 'Adventure'
  },
  {
    src: images['img-2.jpg'],
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxury'
  },
  {
    src: images['img-3.jpg'],
    text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
    label: 'Mystery'
  },
  {
    src: images['img-4.jpg'],
    text: 'Experience Football on Top of the Himilayan Mountains',
    label: 'Adventure'
  },
  {
    src: images['img-8.jpg'],
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline'
  }
];

export default function Cards() {
  const cardList = cardInfo.map((card, i) => {
    return <CardItem {...cardInfo[i]} path="/services" key={i} />;
  });

  return (
    <div className="cards">
      <h1>Check out these epic destitations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">{cardList.slice(0, 2)}</ul>
          <ul className="cards__items">{cardList.slice(2, 5)}</ul>
        </div>
      </div>
    </div>
  );
}
