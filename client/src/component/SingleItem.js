import React, { useState } from 'react';
import axios from 'axios';

function SingleItem(props) {
  const [url, setUrl] = useState('/api/todo/${id}');

  const id = props.match.params.id;

  return <div>{id}</div>;
}

export default SingleItem;
