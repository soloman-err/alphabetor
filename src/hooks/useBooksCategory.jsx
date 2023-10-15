import { useQuery } from 'react-query';

const fetchBooksCategory = async () => {
  const response = await fetch('/books.json');
  if (!response.ok) {
    throw new Error('Failed to fetch books category data');
  }
  return response.json();
};

const useBooksCategory = () => {
  const {
    data: booksCategory,
    isLoading,
    isError,
    error,
  } = useQuery('booksCategory', fetchBooksCategory);

  return { booksCategory, isLoading, isError, error };
};

export default useBooksCategory;
