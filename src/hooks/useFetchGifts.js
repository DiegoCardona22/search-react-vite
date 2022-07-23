// @packages
import { useState, useEffect } from 'react';

// @scripts
import { getGifts } from "../helpers/getGifs";

const useFetchGifts = ( category ) => {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGifts = async () => {
    setError(null);

    try {
      const gifs = await getGifts(category);
      setGifts(gifs);
    } catch (ex) {
      setError(ex);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchGifts();
  }, []);


  return {
    gifts,
    loading,
    error,
  };
}

export default useFetchGifts;