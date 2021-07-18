import { makeObservable, observable, computed, action } from 'mobx';

class OrderStore {
  list = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      orderList: computed,
      totalPrice: computed,
      addItem: action,
      removeItem: action,
    });
  }

  get orderList() {
    const filteredList = this.list.filter(item => item.amount > 0);
    return filteredList;
  }

  get totalPrice() {
    const total = this.orderList.reduce((total, item) => {
      const price = parseInt(item.price.substring(1)) * item.amount;
      return total + price
    }, 0)
    return total;
  }

  getAmount({ type }) {
    const product = this.orderList.find(p => p.type === type);
    return product ? product.amount : null;
  }

  getItemsCosts({ type }) {
    const product = this.orderList.find(p => p.type === type);
    return parseInt(product.price.substring(1)) * product.amount;
  }

  clearOrderList() {
    this.list = [];
  }

  addItem(product) {
    const existedProduct = this.list.find(p => p.type === product.type);
    if (existedProduct) {
      existedProduct.amount++;
    } else {
      product.amount = 1;
      this.list.push(product);
    }
  }

  removeItem(product) {
    const existedProduct = this.list.find(p => p.type === product.type);
    if (!existedProduct || existedProduct.amount === 0) {
      alert("Error: the product is not in your order")
    }
    else if (existedProduct.amount > 0) {
      existedProduct.amount--;
    }
  }
}

const orderStore = new OrderStore();
export default orderStore;