//store//
'use strict';

const store = (function() {

  const addItem = function(item) {
    this.items.push(item);
    
  };

  const findById = function(id) {
    this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  const filterByRating = function(val) {
    this.items = this.items.filter( item => {
      return item.rating >= val;
    });
  }

  return {
    items: [],
    adding: false,
    error: null,
    addItem,
    findById,
    findAndDelete, 
    filterByRating
  };
  
}());