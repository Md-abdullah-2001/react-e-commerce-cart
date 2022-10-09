import { getStoredData } from "../utilities/fakedb";

export const commonLoader = async () => {
  const productData = await fetch(`products.json`);
  const products = await productData.json();

  const loadStored = getStoredData();
  const previous = [];
  for (const id in loadStored) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = loadStored[id];
      addedProduct.quantity = quantity;
      previous.push(addedProduct);
    }
  }

  return { products, previous };
};
