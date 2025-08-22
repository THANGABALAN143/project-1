const BASE_URL = 'http://localhost:8080/api/products';

export const getAllProducts = () => axios.get(`${BASE_URL}/getalldet`);
export const addProduct = (product) => axios.post(`${BASE_URL}/add`, product);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/${id}`);
export const getProductById = (id) => axios.get(`${BASE_URL}/${id}`);