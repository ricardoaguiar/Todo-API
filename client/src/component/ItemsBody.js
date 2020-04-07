import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItems from './ListItems';
import ListItem from './ListItem';

//fetchs the data and render it on the ul and li components

const ItemsBody = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('/api/todo');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url, setUrl]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ListItems>
          {data.map((e) => (
            <ListItem key={e.id} title={e.title} isDone={e.is_done} />
          ))}
        </ListItems>
      )}
    </>
  );
};
export default ItemsBody;
