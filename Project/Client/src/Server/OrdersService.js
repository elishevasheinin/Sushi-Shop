const getOrders = async (path) => {
  const response = await fetch("http://localhost:3080/" + path, 
      {method: "GET",
      headers: {
          "Content-Type": "application/json",
      }});
  const copy = await response.clone();
  const orders = await copy.json();
  return orders;
};

const getProductsByCategory = async (category) => {
  const response = await fetch("http://localhost:3080/products?category=" + category);
  const copy = await response.clone();
  const products = await copy.json();
  return products;
};

const getProduct = async (id) => {
  const response = await fetch("http://localhost:3080/product/" + id);
  const copy = await response.clone();
  const product = await copy.json();
  return product;
};

const addOrder = async (path, orderDetails, products_list) => {
  const order = {...orderDetails};
  if (products_list) {
    let productsList = [];
    products_list.forEach(({_id, amount}) => {
      productsList.push({_id, amount});
    });
    Object.assign(order, { products_list:  productsList});
  }
  await fetch("http://localhost:3080/" + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};

export {
  addOrder,
  getOrders,
  getProductsByCategory,
  getProduct,
}