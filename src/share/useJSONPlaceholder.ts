import {useState, useEffect} from 'react';

type Transform = (value: any) => any;

export const useJSONPlaceholder = (path: string, initial: any, transform?: Transform) => {
  const [data, setData] = useState(initial);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${path}`)
    .then(response => response.json())
    .then(transform ? json => setData(transform(json)) : setData)
  }, [path, transform]);
  return data;
};
