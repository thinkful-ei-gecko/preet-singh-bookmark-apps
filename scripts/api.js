'use strict';

const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

    const listApiFetch = function(...args) {
        let error;
        return fetch(...args)
          .then(res => {
            if (!res.ok) {
              error = { code: res.status};
              if (!res.headers.get('content-type').includes('json')) {
                error.message = res.statusText;
                return Promise.reject(error);
              }
            }
            return res.json(); 
          })
          .then(data => {
            if (error) {
              error.message = data.message;
              return Promise.reject(error);
            } 
            return data;
          })
          .catch(error => console.error(`${error.code} ${error.message}`));
      }
    
    //CRUD functions

    function getItems(){
        return listApiFetch(`${BASE_URL}/bookmarks`);
        //Promise.resolve('A successful response!');
      }
      
    function createItem(title, url, desc, rating) {
        const newItem = JSON.stringify(      
            {
                title: title,
                url: url,
                desc: desc,
                rating: rating
          });
        //console.log(newItem);
        return listApiFetch(`${BASE_URL}/bookmarks`, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: newItem,
        });
      }
    
    function deleteItem(id){
        return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type':'application/json'}
        });
      }
    
    return {
        getItems,
        createItem,
        deleteItem
      };

}());

