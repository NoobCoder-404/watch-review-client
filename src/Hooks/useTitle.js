import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Watch Maker`;
  }, [title]);
};

export default useTitle;
