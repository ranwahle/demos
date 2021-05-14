export const PRODUCTS = [{
  "key": "shoe",
  "name": "Shoe",
  "price": "$55.90",
  "icon": ""
},
{
  "key": "dress",
  "name": "Dress",
  "price": "$19.90",
  "icon": ""
},
{
  "key": "t_shirt",
  "name": "T Shirt",
  "price": "$85.90",
  "icon": ""
}];

export function toggleSelected(existingKeys, key) {
  let selectedKeys = [];
  let exists = false;
  for (let k of existingKeys) {
    if (k === key) {
      exists = true;
      continue;
    }
    selectedKeys.push(k);
  }
  if (exists === false) {
    selectedKeys.push(key);
  }
  return selectedKeys;
}