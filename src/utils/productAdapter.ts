import { Products, ResponseProducts } from "./types";

/**
 * Adapts a ResponseProducts object to a Products object
 *
 * @param {ResponseProducts} data
 * @returns {Products}
 */
const adaptProduct = (data: ResponseProducts): Products => {
  const { id, title, image, price, description } = data;
  return {
    id: id,
    title: title,
    img: image,
    price: price,
    description: description,
  };
};

/**
 * Maps an array of ResponseProduct to an array of Products.
 *
 * @param {ResponseProducts[]} dataList
 * @returns {Products[]}
 */
export const adaptProductsList = (dataList: ResponseProducts[]): Products[] => {
  return dataList.map(adaptProduct);
};