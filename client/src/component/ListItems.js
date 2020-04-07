import React from 'react';

//renders the ul element

const ListItems = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
};

export default ListItems;
