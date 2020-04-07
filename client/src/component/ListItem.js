import React from 'react';

//renders the individual list element / todo item
function ListItem({ title, isDone }) {
  return (
    <li
      className={`list-group-item rounded 
      ${
        isDone
          ? 'list-group-item-success border border-success'
          : 'list-group-item-danger border border-danger'
      } 
      mt-3 d-flex justify-content-center
      align-items-center text-capitalize`}
    >
      {title}
    </li>
  );
}

export default ListItem;
