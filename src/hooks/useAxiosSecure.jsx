import axios from 'axios';

const useAxiosSecure = (useLocal = true) => {
  const baseURL = useLocal && `http://localhost:4000`;

  const axiosSecure = axios.create({ baseURL });

  return [axiosSecure];
};

export default useAxiosSecure;