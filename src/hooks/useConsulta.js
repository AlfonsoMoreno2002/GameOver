import axios from 'axios';
import { useEffect, useState } from 'react';

const useConsulta = (endPoint, id = null, nombre = null) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [data, setData] = useState();

  // Construir la URL según si se proporciona un ID o un nombre
  let url = `${API_URL}${endPoint}`;
  if (id) {
    url = `${API_URL}${endPoint}/${id}`;
  } else if (nombre) {
    url = `${API_URL}${endPoint}?nombre=${encodeURIComponent(nombre)}`;
  }

  // Pedir la información del producto
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return [data];
};

export default useConsulta;
