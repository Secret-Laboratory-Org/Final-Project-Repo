'use strict';

AppState.prototype.loadItems = function () {

  // DONE: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let productJSON = localStorage.getItem('products');
  if (productJSON) {
    this.allProducts = JSON.parse(productJSON);
  } else {
    this.instantiateProducts();
  }
};
