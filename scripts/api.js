'use strict';

const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

    const listApiFetch = function (...args) {
        let error = false;
        return fetch(...args)
          .then(res => {
            if (!res.ok) {
              error = true;
            }
    
            return res.json();
          })
          .then(data => {
            console.log(data);
            if (error) throw new Error(data.message);
            return data;
          });
      };  
    
    //CRUD functions

    function getItems(){
        console.log('hi');
        return listApiFetch(`${BASE_URL}/bookmarks`);
    
      }
      
    function createItem(title, url, desc, rating) {
        const newItem = JSON.stringify(      
            {
                title,
                url,
                desc,
                rating
            });
        console.log(newItem);
        return fetch(`${BASE_URL}/bookmarks`, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: newItem,
        })
        .then(res => {
            return res.json();
          })
          .catch(error => {
              console.log(error)
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

