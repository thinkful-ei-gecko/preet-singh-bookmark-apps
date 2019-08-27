'use strict';

const api = (function() {
    const bASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

    const listApiFetch = function(...args){
        let error = false;
        return fetch(...args)
          .then(res => {
              if (!res.ok) {
                  error = true;
              }
              return res.json();
          })
          .then(data => {
              if (error) {
                  return Promise.reject(data.message);
              }
              return data; 
          })
          .catch(error => {
              //console.log(error);
              return Promise.reject(error);
            });
    }

    //CRUD next

}());