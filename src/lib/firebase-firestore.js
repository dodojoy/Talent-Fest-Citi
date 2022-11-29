import { getFirestore, getDocs, collection } from './export.js';

import { app } from './firebase-config.js';

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


