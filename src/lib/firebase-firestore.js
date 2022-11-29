import { getFirestore, getDocs, collection } from './export';

import { app } from './firebase.config';

const db = getFirestore(app);

export const getAllProducts = async () => {
  try {
    const products = await getDocs(collection(db, 'produtos'));
    const arrProducts = [];
    products.forEach((produto) => {
      arrProducts.push({ ...produto.data(), id: produto.SKU });
    });
    return arrProducts;
  } catch (error) {
    return error;
  }
};


