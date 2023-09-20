import React from 'react';

const ItemDetails = ({ item }) => {
  const { title } = item;
  return <div>{title}</div>;
};

export default ItemDetails;
